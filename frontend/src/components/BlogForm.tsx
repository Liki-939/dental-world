'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Upload, Link as LinkIcon, Eye, Edit3, Sparkles, Check, Image as ImageIcon } from 'lucide-react';
import { BlogPostItem } from '@/lib/blog-service';

interface BlogFormProps {
  initialData?: BlogPostItem | null;
  action: (formData: FormData) => Promise<{ success: boolean; error?: string } | void>;
  isEditing?: boolean;
}

const PRESET_IMAGES = [
  {
    label: 'Tooth Care & Brushing',
    url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Orthodontics & Aligners',
    url: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Implants & Surgery',
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Pediatric Dentistry',
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Cosmetic Dentistry',
    url: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Resize and compress uploaded image file into an optimized base64 Data URL
 */
function compressAndConvertImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        const maxDimension = 1200;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Compress to webp (or jpeg fallback) at 85% quality
        const dataUrl = canvas.toDataURL('image/webp', 0.85);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image file'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export default function BlogForm({ initialData, action, isEditing = false }: BlogFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [author, setAuthor] = useState(initialData?.author || 'Dr. Ramesh Kumar');
  const [image, setImage] = useState(
    initialData?.image || PRESET_IMAGES[0].url
  );
  const [imageMode, setImageMode] = useState<'upload' | 'url'>('upload');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [imageCompressing, setImageCompressing] = useState(false);

  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!isEditing || !slug) {
      setSlug(slugify(newTitle));
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setImageCompressing(true);
      setErrorMsg(null);
      setUploadedFileName(file.name);
      const dataUrl = await compressAndConvertImage(file);
      setImage(dataUrl);
    } catch (err) {
      console.error('Error uploading image:', err);
      setErrorMsg('Failed to process uploaded image file. Please try another image.');
    } finally {
      setImageCompressing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('author', author);
    formData.append('image', image);
    formData.append('excerpt', excerpt);
    formData.append('content', content);

    const res = await action(formData);
    if (res && !res.success && res.error) {
      setErrorMsg(res.error);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/admin/blogs"
          className="inline-flex items-center text-slate-500 hover:text-slate-900 font-medium text-sm transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>
        <div className="text-xs text-slate-400">
          {isEditing ? 'Editing Article ID: ' + initialData?.id : 'Creating New Blog Post'}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            {isEditing ? 'Edit Blog Article' : 'Create New Blog Article'}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Fill in the heading, upload cover photo, summary, and article content below to post to Dental World.
          </p>
        </div>

        {errorMsg && (
          <div className="m-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Title & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Article Title / Heading <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={handleTitleChange}
                placeholder="e.g. 5 Essential Habits for a Healthy Smile"
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                URL Slug
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(slugify(e.target.value))}
                placeholder="e.g. 5-essential-habits"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-700 text-sm font-mono focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Author & Excerpt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Author Name
              </label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-teal-500 transition"
              >
                <option value="Dr. Ramesh Kumar">Dr. Ramesh Kumar</option>
                <option value="Dr. Sunitha Rao">Dr. Sunitha Rao</option>
                <option value="Dental World Specialist Team">Dental World Specialist Team</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Short Excerpt / Summary <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A quick 1-2 sentence summary displayed on the blog list page"
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
          </div>

          {/* Cover Photo Upload & Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Article Cover Photo <span className="text-red-500">*</span>
              </label>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setImageMode('upload')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition flex items-center ${
                    imageMode === 'upload' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5 mr-1" /> Upload File
                </button>
                <button
                  type="button"
                  onClick={() => setImageMode('url')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition flex items-center ${
                    imageMode === 'url' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5 mr-1" /> Image URL / Presets
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                {imageMode === 'upload' ? (
                  <div className="space-y-3">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-teal-300 hover:border-teal-500 bg-teal-50/40 hover:bg-teal-50 p-6 rounded-2xl text-center cursor-pointer transition flex flex-col items-center justify-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Upload className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">
                        {imageCompressing ? 'Processing Image...' : 'Click to Upload Photo from Computer'}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Supports PNG, JPG, WEBP or JPEG (Max 10MB)
                      </p>
                      {uploadedFileName && (
                        <div className="mt-3 inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full font-medium">
                          <Check className="w-3.5 h-3.5 mr-1" /> {uploadedFileName}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-teal-500 transition text-sm"
                    />
                    {/* Preset Suggestions */}
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs text-slate-500 flex items-center font-medium">
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-teal-600" /> Presets:
                      </span>
                      {PRESET_IMAGES.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setImage(preset.url);
                            setUploadedFileName(null);
                          }}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 text-xs rounded-lg transition border border-slate-200"
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Cover Photo Preview */}
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase mb-2">Photo Preview</div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
                  {image ? (
                    <Image
                      src={image}
                      alt="Cover Preview"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="text-slate-400 text-xs flex flex-col items-center">
                      <ImageIcon className="w-8 h-8 mb-1 opacity-50" />
                      No photo selected
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Editor with Write / Preview Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Article Body Content <span className="text-red-500">*</span>
              </label>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveTab('write')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition flex items-center ${
                    activeTab === 'write' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5 mr-1" /> Write
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition flex items-center ${
                    activeTab === 'preview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 mr-1" /> Live Article Preview
                </button>
              </div>
            </div>

            {activeTab === 'write' ? (
              <div>
                <textarea
                  required
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog article content here... Use line breaks for paragraphs, ### for section headings, and > for quotes."
                  className="w-full p-4 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-teal-500 transition font-sans text-sm leading-relaxed"
                />
                <p className="text-xs text-slate-400 mt-1">
                  Tip: Use <code>### Section Title</code> for subheadings, and <code>&gt; Quote Text</code> for highlighted tips.
                </p>
              </div>
            ) : (
              <div className="min-h-[300px] p-6 bg-slate-50 border border-slate-200 rounded-xl prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{title || 'Untitled Article'}</h2>
                {content ? (
                  content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="text-lg font-bold text-slate-900 mt-6 mb-2">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('> ')) {
                      return (
                        <blockquote key={idx} className="border-l-4 border-teal-500 bg-teal-50 p-4 rounded-r-xl italic my-4 text-teal-900">
                          {paragraph.replace('> ', '')}
                        </blockquote>
                      );
                    }
                    return (
                      <p key={idx} className="mb-4 text-slate-700 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })
                ) : (
                  <span className="text-slate-400 italic">No content written yet...</span>
                )}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end space-x-4">
            <Link
              href="/admin/blogs"
              className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition font-medium text-sm"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting || imageCompressing}
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-md transition-all flex items-center text-sm disabled:opacity-50"
            >
              {submitting ? (
                <span>Posting Article...</span>
              ) : (
                <span>{isEditing ? 'Save Changes' : 'Post Article to Blog'}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
