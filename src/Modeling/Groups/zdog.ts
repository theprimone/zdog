import Zdog from 'zdog';

const yellow = '#ED0';
const gold = '#EA0';
const orange = '#E62';
const garnet = '#C25';
const eggplant = '#636';
const TAU = Zdog.TAU;

export function render() {

  const illo = new Zdog.Illustration({
    element: '#zdog',
    dragRotate: true,
  });

  const eyeGroup = new Zdog.Group({
    addTo: illo,
    translate: { z: 20 },
  });

  // eye white
  new Zdog.Ellipse({
    addTo: eyeGroup,
    width: 160,
    height: 80,
    stroke: 8,
    fill: true,
    color: 'white',
  });

  const iris = new Zdog.Ellipse({
    addTo: eyeGroup,
    diameter: 70,
    stroke: 8,
    fill: true,
    color: gold,
  });

  // pupil
  iris.copy({
    diameter: 40,
    color: eggplant,
  });

  // highlight
  iris.copy({
    diameter: 30,
    translate: { x: 15, y: -15 },
    color: 'white',
  });

  function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  animate();
}
