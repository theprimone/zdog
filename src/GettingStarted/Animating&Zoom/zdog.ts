import Zdog from 'zdog';

export function render() {
  // create illo
  let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '#zdog-canvas',
    zoom: 4,
  });

  // add circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    // position closer
    translate: { z: 10 },
    stroke: 5,
    color: '#636',
  });

  // square
  new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    // position further back
    translate: { z: -10 },
    stroke: 3,
    color: '#E62',
    fill: true,
  });

  function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.03;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
  }

  animate();
}