import React from 'react';
import { default as StatBadge } from './StatBadge';

export default function CaseCard({ title, subtitle, body, badges = [], cta }) {
  return (
    <article className="p-5 md:p-6 border rounded-lg bg-[#111] mb-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {subtitle && <div className="text-sm text-gray-300 mb-3">{subtitle}</div>}
      {body && <p className="mb-4">{body}</p>}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        {badges.map((b, i) => (
          <StatBadge key={i} text={b} />
        ))}
      </div>
      {cta && (
        <a href={cta.href} className="inline-block mt-4 text-red-400 hover:underline">{cta.label}</a>
      )}
    </article>
  );
}
