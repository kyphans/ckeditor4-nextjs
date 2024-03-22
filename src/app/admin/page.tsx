import React from 'react';
import Editor from '@/components/admin/Editor';

function AdminPage() {
  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full h-full bg-red-200'>
          <Editor />
          <div>
            <span>aaa</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
