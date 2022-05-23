import React from "react";
import { Input, Modal } from "antd";

const Modals = ({ visible, edit, setEdit, setData, ResetEditing }) => {
  return (
    <>
      <Modal
        title="Edit Details"
        visible={visible}
        okText="Save"
        onCancel={() => /*setVisible(false)*/ ResetEditing()}
        onOk={() => /*setVisible(false)*/ {
          setData((pre) => {
            return pre.map((student) => {
              if (student.id === edit.id) {
                return edit;
              } else {
                return student;
              }
            });
          });
          ResetEditing();
        }}
      >
        <Input
          value={edit?.name}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.email}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.address}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.phone}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, phone: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.website}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, website: e.target.value };
            });
          }}
        />
      </Modal>
    </>
  );
};

export default Modals;
