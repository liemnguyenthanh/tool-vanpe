'use client'
import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';

type EditorContextType = {
  data: string;
  updateData: (value: string) => void
};

export const EditorContext = createContext<EditorContextType>({
  data: '',
  updateData: () => { }
});

export const EditorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState('')

  const updateData = (value: string) => {
    setData(value)
  }

  return (
    <EditorContext.Provider value={{ data, updateData }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = (): EditorContextType => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within a EditorProvider');
  }
  return context;
};
