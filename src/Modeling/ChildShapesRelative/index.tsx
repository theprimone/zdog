import React from 'react';
import Container from '../../components/Container';
import { render } from './zdog';
import styles from './index.less';

export default class extends React.Component {
  componentDidMount() {
    render();
  }

  render() {
    return (
      <Container>
        <canvas id="zdog" className={styles["zdog-canvas"]} width="240" height="240"></canvas>
      </Container>
    )
  }
}
