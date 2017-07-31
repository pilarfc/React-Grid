import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import PanelOriginal from './Componentes/Panel-Original.jsx';
import PanelDividido from './Componentes/Panel-Dividido.jsx';

class App extends Component {
  render() {
    return (
        
    <Grid fluid>
       <Row>
        <Col md={3}>
              <PanelOriginal />
        </Col>
        <Col md={3}>
              <PanelOriginal />
        </Col>
        <Col md={3}>
              <PanelOriginal />
        </Col>
        <Col md={3}>
            <PanelOriginal />
        </Col>
       </Row>
        
        <Row>
            <Col md={9}>
              <PanelDividido />
              <PanelDividido />
            </Col>
            <Col md={3}>
              <PanelOriginal />
              <PanelOriginal />
              <PanelOriginal />
            </Col>
        </Row>
        
        
    </Grid>
        
      
    );
  }
}

export default App;
