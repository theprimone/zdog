import React from 'react';
import Container from '../../components/Container';
import { render } from './zdog';

export default class extends React.Component {
  componentDidMount() {
    render();
  }

  render() {
    return (
      <Container>
        <canvas id="zdog-canvas" width="240" height="240"></canvas>
      </Container>
    )
  }
}
