import DataTableImages from '@/components/admin/DataTableImages';
import { columns } from '@/components/admin/DataTableImages/columns';
import { payments as data } from '@/components/admin/DataTableImages/dummy_data';

import React from 'react';

function ImageManagementPage() {
  return (
    <div className='w-full h-full flex justify-center'>
      <DataTableImages columns={columns} data={data} />
    </div>
  );
}

export default ImageManagementPage;