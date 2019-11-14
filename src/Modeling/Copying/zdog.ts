import Zdog from 'zdog';

export function render() {
  const illo = new Zdog.Illustration({
    element: '#zdog',
    dragRotate: true,
  });

  // create original
  const rect = new Zdog.Rect({
    addTo: illo,
    width: 64,
    height: 64,
    translate: { x: -48 },
    stroke: 16,
    color: '#EA0',
  });

  // add child item
  new Zdog.Shape({
    addTo: rect,
    translate: { z: 20 },
    stroke: 32,
    color: '#636',
  });

  // copy
  rect.copy({
    // overwrite original options
    translate: { x: 48 },
    color: '#C25',
  });

  // copy rect and its children
  rect.copyGraph({
    // overwrite original options
    translate: { x: -48, y: -48 * 2 },
    color: '#E62',
  });

  function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  animate();

}
