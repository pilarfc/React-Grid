import React from 'react';
import { Panel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

export default class PanelDividido extends React.Component {
   render() {
       return(
       
        <Panel>
          <Row>
              <Panel>
                  
              </Panel>
          </Row>
           <Row>
            <Col md={4}>
              Titulo1
            </Col>
            <Col md={4}>
              Titulo2
            </Col>
            <Col md={4}>
              Titulo3
            </Col>
           </Row>
        </Panel>
       
       )
   }
    
}