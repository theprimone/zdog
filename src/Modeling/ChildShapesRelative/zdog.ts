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

  const zCircle = new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    quarters: 2,
    closed: true,
    translate: { z: 40 },
    scale: 1,
    stroke: 8,
    fill: true,
    color: eggplant,
  });

  // z line
  new Zdog.Shape({
    addTo: zCircle,
    path: [{}, zCircle.translate.copy().multiply({ z: -1 })],
    scale: 1 / zCircle.scale.z,
    stroke: 2,
    color: zCircle.color,
  });

  const xRect = new Zdog.Rect({
    addTo: zCircle,
    width: 20,
    height: 20,
    translate: { x: 40 },
    stroke: 8,
    fill: true,
    color: garnet,
  });

  // x line
  new Zdog.Shape({
    addTo: xRect,
    path: [{}, xRect.translate.copy().multiply({ x: -1 })],
    stroke: 2,
    color: xRect.color,
  });

  const yTri = new Zdog.Polygon({
    addTo: xRect,
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