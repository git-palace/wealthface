import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './styles.scss'

const App = ({ children }) => (
  <div className="row flex-xl-nowrap flex-column">
    <Header />

    <main className="p-5">
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
