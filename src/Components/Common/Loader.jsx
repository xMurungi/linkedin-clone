import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "../Common/Loader.scss";

const Loader = () => (
  <div className='spin-main' >
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