import React from 'react';
import { Header } from './';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
