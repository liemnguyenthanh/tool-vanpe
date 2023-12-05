import { useEditorContext } from '@/providers'
import React from 'react'

export const ConvertText = () => {
  const { data } = useEditorContext()
  return (
    <div className='rounded-lg border border-[#DAE0D580] bg-[#141a1f]'>
      <p className="text-white font-bold p-4 border-b border-b-[#DAE0D580]">
        Convert Text
      </p>
      <div className="p-4 ">
        <p className="text-white" dangerouslySetInnerHTML={{ __html: data }}></p>
      </div>
    </div>
  )
}
