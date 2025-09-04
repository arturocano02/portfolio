import React from 'react';

export default function StatBadge({ text }) {
  return (
    <span className="text-xs bg-red-600 text-white rounded px-2 py-1 ml-2">{text}</span>
  );
}
