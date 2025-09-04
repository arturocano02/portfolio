"use client";
import React from 'react';

export default function Badge({ text, color }) {
  return (
    <span className="badge" style={color ? { backgroundColor: color } : {}}>
      {text}
    </span>
  );
}
