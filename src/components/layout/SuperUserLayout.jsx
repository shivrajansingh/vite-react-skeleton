import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './template/Header';
import NavigationBar from './template/NavigationBar'; 

export default function SuperUserLayout() {
    return (
      <>
        <Header/>
        <NavigationBar/>
        <Outlet/>
      </>
    )
  }