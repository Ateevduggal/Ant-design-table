import React, { useState } from "react";
import { Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { data } from "./Data";
import Modals from "./Modals";

const App = () => {
  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name > b.name,
      sortDirections: ["descend"],
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "address",
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      key: "phone",
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      key: "website",
      title: "Website",
      dataIndex: "website",
      // render: (website) => <a href={website}>{website}</a>,
    },
    {
      key: "action",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <div className="flex">
              <EditOutlined
                style={{ color: "black" }}
                onClick={() => Edit(record)}
              />
              <DeleteOutlined
                style={{ color: "red" }}
                onClick={() => Delete(record)}
              />
            </div>
          </>
        );
      },
    },
  ];

  const [Data, setData] = useState(data);
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(null);

  const Delete = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this",
      onOk: () => {
        setData((pre) => {
          return pre.filter((person) => person.id != record.id);
        });
      },
    });
  };

  const Edit = (record) => {
    setVisible(true);
    setEdit({ ...record });
  };

  const ResetEditing = () => {
    setVisible(false);
    setEdit(true);
  };
  return (
    <>
      <div className="app">
        <div className="table">
          <Table
            dataSource={Data}
            columns={columns}
            pagination={{ pageSize: 8, total: 50, showSizeChanger: true }}
            bordered
          />
          <Modals
            visible={visible}
            edit={edit}
            setEdit={setEdit}
            setData={setData}
            ResetEditing={ResetEditing}
            setVisible={setVisible}
          />
        </div>
      </div>
    </>
  );
};

export default App;
