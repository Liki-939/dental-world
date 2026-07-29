'use client';

import { useState } from 'react';
import { Upload, Link as LinkIcon, Check, RefreshCw, Plus, Search, RotateCcw, Trash2, X, Image as ImageIcon } from 'lucide-react';
import { updateSiteMedia, deleteSiteMedia, createCustomSiteMedia } from '@/app/admin/media-actions';
import { SiteMediaItem } from '@/lib/media-service';

export default function SiteMediaManager({ initialRecords }: { initialRecords: SiteMediaItem[] }) {
  const [records, setRecords] = useState<SiteMediaItem[]>(initialRecords);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [updatingKey, setUpdatingKey] = useState<string | null>(null);
  const [successKey, setSuccessKey] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // URL input state
  const [editingUrlKey, setEditingUrlKey] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState<string>('');

  // Add Custom Modal state
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newKey, setNewKey] = useState<string>('');
  const [newLabel, setNewLabel] = useState<string>('');
  const [newImageUrl, setNewImageUrl] = useState<string>('');
  const [isAdding, setIsAdding] = useState<boolean>(false);

  // Filter records
  const categories = ['All', 'Main Pages', 'Treatments', 'Graphics & Banners', 'Custom'];

  const filteredRecords = records.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.key.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Upload to Supabase Storage and Update Site Media
  const handleImageFileUpload = async (key: string, file: File) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload a valid image file (JPG, PNG, WEBP).');
      return;
    }

    try {
      setUpdatingKey(key);
      setErrorMsg('');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'media');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image.');
      }

      const uploadData = await response.json();
      const uploadedUrl = uploadData.url;

      await updateSiteMedia(key, uploadedUrl);
      setRecords((prev) =>
        prev.map((item) => (item.key === key ? { ...item, imageUrl: uploadedUrl } : item))
      );
      setSuccessKey(key);
      setTimeout(() => setSuccessKey(null), 3000);
    } catch (err: any) {
      console.error('Error uploading site media:', err);
      setErrorMsg(err.message || 'Failed to update cover photo.');
    } finally {
      setUpdatingKey(null);
    }
  };

  const handleSaveUrl = async (key: string) => {
    if (!urlInput.trim()) return;
    setUpdatingKey(key);
    setErrorMsg('');
    try {
      await updateSiteMedia(key, urlInput.trim());
      setRecords((prev) =>
        prev.map((item) => (item.key === key ? { ...item, imageUrl: urlInput.trim() } : item))
      );
      setSuccessKey(key);
      setEditingUrlKey(null);
      setUrlInput('');
      setTimeout(() => setSuccessKey(null), 3000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to update cover photo URL.');
    } finally {
      setUpdatingKey(null);
    }
  };

  const handleResetToDefault = async (key: string, defaultUrl: string) => {
    if (confirm(`Reset "${key}" to original default photo?`)) {
      setUpdatingKey(key);
      try {
        await updateSiteMedia(key, defaultUrl);
        setRecords((prev) =>
          prev.map((item) => (item.key === key ? { ...item, imageUrl: defaultUrl } : item))
        );
        setSuccessKey(key);
        setTimeout(() => setSuccessKey(null), 3000);
      } catch (err: any) {
        setErrorMsg('Failed to reset image.');
      } finally {
        setUpdatingKey(null);
      }
    }
  };

  const handleDeleteCustomKey = async (key: string) => {
    if (confirm(`Delete custom key "${key}"?`)) {
      try {
        await deleteSiteMedia(key);
        setRecords((prev) => prev.filter((item) => item.key !== key));
      } catch (err) {
        setErrorMsg('Failed to delete media key.');
      }
    }
  };

  const handleAddCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKey || !newImageUrl) {
      setErrorMsg('Key and Image URL are required.');
      return;
    }

    setIsAdding(true);
    setErrorMsg('');
    try {
      await createCustomSiteMedia(newKey, newLabel || newKey, newImageUrl);
      const cleanKey = newKey.trim().toLowerCase().replace(/\s+/g, '_');
      setRecords((prev) => [
        ...prev,
        {
          key: cleanKey,
          label: newLabel || newKey,
          category: 'Custom',
          imageUrl: newImageUrl,
          defaultUrl: newImageUrl,
        },
      ]);
      setShowAddModal(false);
      setNewKey('');
      setNewLabel('');
      setNewImageUrl('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to add custom media key.');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6">
      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium flex items-center justify-between">
          <span>{errorMsg}</span>
          <button onClick={() => setErrorMsg('')} className="text-red-500 hover:text-red-800">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Control Bar: Categories, Search & Add Custom */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const count = cat === 'All' ? records.length : records.filter((r) => r.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                  activeCategory === cat ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Add Button */}
        <div className="flex items-center space-x-3">
          <div className="relative flex-grow md:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cover photo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom</span>
          </button>
        </div>
      </div>

      {/* Grid of Cover Images */}
      {filteredRecords.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">No Cover Photos Found</h3>
          <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting another category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecords.map((item) => {
            const isCustom = item.category === 'Custom';
            const isModified = item.imageUrl !== item.defaultUrl;

            return (
              <div
                key={item.key}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {/* Header Badge */}
                  <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between">
                    <div className="truncate mr-2">
                      <div className="font-bold text-xs truncate" title={item.label}>
                        {item.label}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono tracking-tight">{item.key}</div>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold shrink-0">
                      {item.category}
                    </span>
                  </div>

                  {/* Image Preview Box */}
                  <div className="relative aspect-[16/9] bg-slate-900 border-b border-slate-100 overflow-hidden group">
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />

                    {updatingKey === item.key && (
                      <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                        <RefreshCw className="w-6 h-6 animate-spin mb-2 text-indigo-400" />
                        <span className="text-xs font-semibold">Updating Live...</span>
                      </div>
                    )}

                    {successKey === item.key && (
                      <div className="absolute top-2 right-2 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-lg shadow-lg flex items-center space-x-1 animate-fade-in-up">
                        <Check className="w-3.5 h-3.5" />
                        <span>Saved Live!</span>
                      </div>
                    )}

                    {isModified && (
                      <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-amber-500 text-white text-[10px] font-extrabold rounded-md shadow">
                        MODIFIED
                      </div>
                    )}
                  </div>
                </div>

                {/* Direct Action Controls */}
                <div className="p-3.5 bg-slate-50 border-t border-slate-100 space-y-2">
                  {editingUrlKey === item.key ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Paste image URL (e.g. https://...)"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleSaveUrl(item.key)}
                          className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition"
                        >
                          Save URL
                        </button>
                        <button
                          onClick={() => {
                            setEditingUrlKey(null);
                            setUrlInput('');
                          }}
                          className="px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {/* Upload Local File */}
                      <label className="py-2 px-3 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-sm">
                        <Upload className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files?.[0]) handleImageFileUpload(item.key, e.target.files[0]);
                          }}
                          className="hidden"
                        />
                      </label>

                      {/* Paste URL */}
                      <button
                        onClick={() => {
                          setEditingUrlKey(item.key);
                          setUrlInput(item.imageUrl.startsWith('data:') ? '' : item.imageUrl);
                        }}
                        className="py-2 px-3 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 transition flex items-center justify-center space-x-1.5 shadow-sm"
                      >
                        <LinkIcon className="w-3.5 h-3.5 text-teal-600" />
                        <span>Paste URL</span>
                      </button>
                    </div>
                  )}

                  {/* Reset & Delete buttons */}
                  <div className="flex items-center justify-between pt-1 text-xs">
                    {isModified ? (
                      <button
                        onClick={() => handleResetToDefault(item.key, item.defaultUrl)}
                        className="text-[11px] font-semibold text-amber-600 hover:text-amber-700 flex items-center space-x-1"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset to Default</span>
                      </button>
                    ) : (
                      <span className="text-[10px] text-slate-400">Using Default Asset</span>
                    )}

                    {isCustom && (
                      <button
                        onClick={() => handleDeleteCustomKey(item.key)}
                        className="text-[11px] font-semibold text-red-600 hover:text-red-700 flex items-center space-x-1 ml-auto"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Delete</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal: Add Custom Cover Image */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-fade-in-up">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold font-heading text-slate-800 mb-1">Add Custom Cover Photo</h3>
            <p className="text-xs text-slate-500 mb-4">Register a unique key for custom banners or new campaign landing pages.</p>

            <form onSubmit={handleAddCustomSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Key Name (e.g. hero_diwali_campaign) *</label>
                <input
                  type="text"
                  required
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  placeholder="hero_campaign_1"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Display Label *</label>
                <input
                  type="text"
                  required
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="Diwali Festival Special Banner"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Image URL or Base64 *</label>
                <input
                  type="text"
                  required
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAdding}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow disabled:opacity-50"
                >
                  {isAdding ? 'Adding...' : 'Add Cover Photo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
