import React from 'react'
import { Editor } from '../atoms'
import { CovertText } from '../molecules'

export const HomePage = () => {
  return (
    <div className='container m-auto py-10'>
      <div className="grid grid-cols-2 gap-10">
        <Editor />
        <CovertText />
      </div>
    </div>
  )
}


