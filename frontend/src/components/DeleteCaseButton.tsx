'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { deleteBeforeAfterCase } from '@/app/admin/case-actions';

export default function DeleteCaseButton({ id, title }: { id: string; title: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      setIsDeleting(true);
      try {
        await deleteBeforeAfterCase(id);
      } catch (err) {
        alert('Failed to delete case.');
        setIsDeleting(false);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
      title="Delete case"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
