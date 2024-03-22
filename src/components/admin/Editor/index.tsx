'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { CKEditor } from 'ckeditor4-react';
import React, { useState } from 'react';

export default function Editor() {
  const [editorContent, setEditorContent] = useState('');
  const [isLoading, setLoading] = useState(true);

  const handleEditorChange = (event: any) => {
    setEditorContent(event.editor.getData());
  };

  const configEditor = {
    language: 'ko',
    height: 600,
    resize_enabled: false,
    allowedContent: true,
    fullPage: true,
    removePlugins: 'image,elementspath',
    extraPlugins:
      'colorbutton,panelbutton,floatpanel,save,listblock,font,docprops,colordialog,wysiwygarea',
    toolbar: [
      {
        name: 'document',
        items: ['Source', 'Preview', 'Print', 'DocProps', 'Maximize']
      },
      { name: 'clipboard', items: ['Undo', 'Redo'] },
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat']
      },
      {
        name: 'paragraph',
        items: [
          'NumberedList',
          'BulletedList',
          '-',
          'Blockquote',
          'CreateDiv',
          '-',
          'JustifyLeft',
          'JustifyCenter',
          'JustifyRight',
          'JustifyBlock'
        ]
      },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'insert', items: ['Image', 'Table'] },
      '/',
      { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] }
    ]
  };
  return (
    <>
      <CKEditor
        editorUrl={'/ckeditor/ckeditor.js'}
        initData={editorContent}
        config={configEditor}
        onChange={handleEditorChange}
        onInstanceReady={() => {
          setLoading(false);
        }}
      />
      {isLoading && <Skeleton className='rounded-none w-full h-[675px]' />}
    </>
  );
}
