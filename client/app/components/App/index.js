import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

const App = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
