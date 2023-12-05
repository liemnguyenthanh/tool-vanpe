'use client'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRef } from "react";
import { useEditorContext } from "@/providers";

export const Editor = () => {
  const editorRef = useRef<any>()
  const { updateData } = useEditorContext()

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onReady={editor => {
          editorRef.current = editor
        }}
        onChange={(event) => {
          const editorData = editorRef.current.getData();
          updateData(editorData)
        }}
      />
    </div>
  )
}
