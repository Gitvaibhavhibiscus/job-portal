"use client";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Layout, Button, theme } from "antd";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Joblist from "./Joblist";
import "../app/assets/main.scss";

const { Header, Sider, Content } = Layout;
const UserInfo = () => {
  const { data: session } = useSession();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="Menu-link">
          <Link href="/">
            <li>Dashboard</li>
          </Link>
          <Link href="/employee/latestjob">
            <li>Latest Job</li>
          </Link>
          <Link href="/employee/applyjob">
            <li>Apply Job</li>
          </Link>
          <Link href="/employer/dashboard">
            <li>Employer dashboard</li>
          </Link>
        </div>
      </Sider>

      <Layout>
        <Header
          className="userheader"
          style={{
            background: colorBgContainer,
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <span className="font-bold">Name: {session?.user?.name}</span>
          <span className="font-bold">Email: {session?.user?.email}</span>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-3"
          >
            Log Out
          </button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Joblist />
        </Content>
      </Layout>
    </Layout>
  );
};
export default UserInfo;
