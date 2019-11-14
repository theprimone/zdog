import Zdog from 'zdog';

const orange = '#E62';
const garnet = '#C25';
const eggplant = '#636';

export function render() {
  const illo = new Zdog.Illustration({
    element: '#zdog',
    dragRotate: true,
  });

  // origin dot
  new Zdog.Shape({
    addTo: illo,
    stroke: 8,
    color: eggplant,
  });

  const zAnchor = new Zdog.Anchor({
    addTo: illo,
    translate: { z: 40 },
    scale: 1.5, // scale 150%
  });

  // z line
  new Zdog.Shape({
    addTo: zAnchor,
    path: [{}, zAnchor.translate.copy().multiply({ z: -1 })],
    scale: 1 / zAnchor.scale.z,
    stroke: 2,
    color: eggplant,
  });

  const xAnchor = new Zdog.Anchor({
    addTo: zAnchor,
    translate: { x: 40 },
    rotate: { x: Zdog.TAU / 8 }, // rotate back
  });

  // x line
  new Zdog.Shape({
    addTo: xAnchor,
    path: [{}, xAnchor.translate.copy().multiply({ x: -1 })],
    stroke: 2,
    color: garnet,
  });

  const yTri = new Zdog.Polygon({
    addTo: xAnchor,
    radius: 10,
    sides: 3,
    translate: { y: -60 },
    stroke: 8,
    fill: true,
    color: orange,
  });

  // y line
  new Zdog.Shape({
    addTo: yTri,
    path: [{}, yTri.translate.copy().multiply({ y: -1 })],
    stroke: 2,
    color: yTri.color,
  });

  function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  animate();
}
