'use client';

import { useState } from 'react';
import { Upload, Sparkles, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { createBeforeAfterCase, updateBeforeAfterCase } from '@/app/admin/case-actions';

interface CaseFormProps {
  initialData?: {
    id?: string;
    title: string;
    category: string;
    beforeImage: string;
    afterImage: string;
    isFeatured: boolean;
    order: number;
  };
}

export default function CaseForm({ initialData }: CaseFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || 'Dental Implants');
  const [beforeImage, setBeforeImage] = useState(initialData?.beforeImage || '');
  const [afterImage, setAfterImage] = useState(initialData?.afterImage || '');
  const [isFeatured, setIsFeatured] = useState(initialData?.isFeatured ?? true);
  const [order, setOrder] = useState(initialData?.order || 0);

  const [beforePreview, setBeforePreview] = useState(initialData?.beforeImage || '');
  const [afterPreview, setAfterPreview] = useState(initialData?.afterImage || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Helper to compress and convert file to WebP base64 Data URL
  const handleFileUpload = (file: File, type: 'before' | 'after') => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
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
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/webp', 0.85);

          if (type === 'before') {
            setBeforeImage(dataUrl);
            setBeforePreview(dataUrl);
          } else {
            setAfterImage(dataUrl);
            setAfterPreview(dataUrl);
          }
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!beforeImage || !afterImage) {
      setError('Both Before and After photos are required.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('beforeImage', beforeImage);
    formData.append('afterImage', afterImage);
    formData.append('isFeatured', isFeatured ? 'true' : 'false');
    formData.append('order', order.toString());

    try {
      if (initialData?.id) {
        await updateBeforeAfterCase(initialData.id, formData);
      } else {
        await createBeforeAfterCase(formData);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Case Title *</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Full Mouth Dental Implants Transformation"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none transition text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Category *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none transition text-sm bg-white"
          >
            <option value="Dental Implants">Dental Implants</option>
            <option value="Smile Makeover">Smile Makeover</option>
            <option value="Invisalign">Invisalign</option>
            <option value="Braces">Braces</option>
            <option value="Gum Treatment">Gum Treatment</option>
            <option value="Root Canal">Root Canal</option>
            <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
            <option value="General">General</option>
          </select>
        </div>
      </div>

      {/* Side-by-Side Dual Image Upload Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* BEFORE Photo Box */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-800 flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block mr-2"></span>
            BEFORE Photo *
          </label>

          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center hover:border-teal-500 transition relative bg-slate-50">
            {beforePreview ? (
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                <img src={beforePreview} alt="Before Preview" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 px-2.5 py-1 bg-red-600/90 text-white font-bold text-xs rounded-md shadow">
                  BEFORE
                </div>
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center justify-center">
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                <p className="text-xs font-semibold text-slate-600">Click to upload BEFORE photo</p>
                <p className="text-[11px] text-slate-400 mt-1">Supports PNG, JPG, WEBP</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) handleFileUpload(e.target.files[0], 'before');
              }}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
          </div>
        </div>

        {/* AFTER Photo Box */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-800 flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block mr-2"></span>
            AFTER Photo *
          </label>

          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center hover:border-teal-500 transition relative bg-slate-50">
            {afterPreview ? (
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                <img src={afterPreview} alt="After Preview" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 px-2.5 py-1 bg-green-600/90 text-white font-bold text-xs rounded-md shadow">
                  AFTER
                </div>
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center justify-center">
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                <p className="text-xs font-semibold text-slate-600">Click to upload AFTER photo</p>
                <p className="text-[11px] text-slate-400 mt-1">Supports PNG, JPG, WEBP</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) handleFileUpload(e.target.files[0], 'after');
              }}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Options: Featured & Display Order */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="isFeatured"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
            className="w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
          />
          <label htmlFor="isFeatured" className="text-sm font-semibold text-slate-700 cursor-pointer">
            Feature on Homepage Before/After Showcase
          </label>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Display Priority Order</label>
          <input
            type="number"
            value={order}
            onChange={(e) => setOrder(parseInt(e.target.value || '0', 10))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none transition text-sm"
          />
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition shadow-md flex items-center space-x-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Saving Case...</span>
          ) : (
            <>
              <span>{initialData?.id ? 'Update Case' : 'Create Case'}</span>
              <Sparkles className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
