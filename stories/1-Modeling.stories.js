import React from 'react';
import ChildShapesIntro from '../src/Modeling/ChildShapesIntro';
import ChildShapesRelative from '../src/Modeling/ChildShapesRelative';
import ChildShapesTransforms from '../src/Modeling/ChildShapesTransforms';
import Anchors from '../src/Modeling/Anchors';

// ref: https://zzz.dog/modeling
export default {
  title: 'Modeling',
};

export const childShapesIntro = () => <ChildShapesIntro />;

childShapesIntro.story = {
  name: 'Child shapes intro',
};

export const childShapesRelative = () => <ChildShapesRelative />;

childShapesIntro.story = {
  name: 'Child shapes relative',
};

export const childShapesTransforms = () => <ChildShapesTransforms />;

childShapesTransforms.story = {
  name: 'Child shapes transforms',
};

export const anchors = () => <Anchors />;
