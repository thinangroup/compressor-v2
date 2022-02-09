import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FullWidthGrid from './grid';
import Navbar from './components/navbar';
import MainContent from './maincontent';

export default function MainPage() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="xl">
          <FullWidthGrid />
        </Container>
      </React.Fragment>
    </div>
  );
}