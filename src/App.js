import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import About from '/About';
import { Breadcrumb, Alert } from 'antd';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：
    </li>
  </ul>
);

const About = () => (
  <div className="about">
    <h1>About</h1>
  </div>
);

const Page = () => (
  <div className="page">
    <h1>Page</h1>
  </div>
);

const breadcrumbNameMap = {
  '/about': 'About',
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
};

export default function (props) {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
        <Link to="/about">About</Link>
        <Link to="/page">Page</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
}
