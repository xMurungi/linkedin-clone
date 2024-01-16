import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Loader = () => (
  <div>
  <Spin className='spin'
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 200,
        }}
        spin
      />
    }
  />
  </div>
);

export default Loader;