'use client'
import React from 'react'
import { Editor } from '../atoms'
import { EditorProvider } from '@/providers'
import { ConvertText } from '../molecules'

export const HomePage = () => {
  return (
    <EditorProvider>
      <div className='container m-auto py-10'>
        <div className="grid grid-cols-2 gap-10">
          <Editor />
          <ConvertText />
        </div>
      </div>
    </EditorProvider>
  )
}


