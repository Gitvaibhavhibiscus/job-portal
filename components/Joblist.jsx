import { Divider, Tabs } from 'antd';
import React from 'react';
import Uploadjob from "@/app/employer/uploadjob/page"
import Newjob from '@/app/employer/newjob/page';

// Define your React components for each tab
const TabContent1 = () => <div><Empdashboard /></div>;
const TabContent2 = () => <div><Uploadjob /></div>;
const TabContent3 = () => <div><Newjob /></div>;

const items = [
  {
    label: 'All Users',
    key: '1',
    children: <TabContent1 />,
    link: 'Content of tab 1',
  },
  {
    label: 'Upload Post',
    key: '2',
    children: <TabContent2 />,
    link: 'Content of tab 2',
  },
  {
    label: 'Apply Newjob',
    key: '3',
    children: <TabContent3 />,
    link: 'Content of tab 3',
  },
];

const Joblist = () => {
  return (
    <>
      <Tabs items={items} />
      <br />
      <Divider />
    </>
  );
};

export default Joblist;
