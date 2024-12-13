'use client';
import React from 'react'

export default function error({ error } : { error: Error }) {
    console.log(error);
  return (
    <div>Error loading tours!</div>
  )
}
