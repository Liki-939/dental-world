'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { deleteBlogPost } from '@/app/admin/blog-actions';

export default function DeleteBlogButton({ id, title }: { id: string; title: string }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      setLoading(true);
      await deleteBlogPost(id);
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
      title="Delete Blog Post"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
