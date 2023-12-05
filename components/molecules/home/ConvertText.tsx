import { useEditorContext } from '@/providers'
import React, { useEffect, useRef } from 'react'

const mappingHtmlToDictionary = (element: HTMLElement) => {
  const tagName = element.tagName
  console.log(tagName);
  
  return ''
}


export const ConvertText = () => {
  const { data } = useEditorContext()
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const convertData = () => {
      if (textRef.current) {
        const dataMap = mappingHtmlToDictionary(textRef.current)
        console.log({ dataMap });

      }
    }
    convertData()
  }, [data])



  return (
    <div className='rounded-lg border border-[#DAE0D580] bg-[#141a1f] overflow-hidden'>
      <p className="text-white font-bold p-4 border-b border-b-[#DAE0D580] bg-[#1f262e]">
        Convert Text
      </p>
      <div className="p-4">
        <p className="text-white" ref={textRef} dangerouslySetInnerHTML={{ __html: data }}></p>
      </div>
    </div>
  )
}
