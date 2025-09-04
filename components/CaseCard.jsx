import React from 'react';
import { default as StatBadge } from './StatBadge';

export default function CaseCard({ title, subtitle, body, badges = [], cta }) {
  return (
    <article className="p-4 border rounded bg-[#111] mb-4">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      {subtitle && <div className="text-sm text-gray-300 mb-2">{subtitle}</div>}
      {body && <p className="mb-2">{body}</p>}
      <div className="flex flex-wrap items-center mt-2">
        {badges.map((b, i) => (
          <StatBadge key={i} text={b} />
        ))}
      </div>
      {cta && (
        <a href={cta.href} className="inline-block mt-2 text-red-400 hover:underline">{cta.label}</a>
      )}
    </article>
  );
}
