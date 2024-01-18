import React from 'react';
import { Button, Modal } from 'antd';
import "../Modal/Modal.scss";

const ModalPost = ({modalOpen, setModalOpen, status, setStatus}) => {

  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
            <Button key={"Submit"} type='primary' disabled={ status.length> 0 ? false : true } >Post</Button>
        ]}
      >
        <input
            className='modal-input'
            type="text"
            name="" id="" 
            placeholder='What do you want to talk about?' 
            onChange={(event) => setStatus(event.target.value)}
            value={status}
        />

      </Modal>
    </>
  );
};

export default ModalPost;