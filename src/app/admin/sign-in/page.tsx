import LoginForm from '@/components/admin/LoginForm';
import React from 'react';

function AdminSignInPage() {
  return (
    <>
      <div className='w-full h-screen'>
        <div className='h-full flex justify-center items-center'>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default AdminSignInPage;