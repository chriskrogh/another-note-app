import React from 'react';
import StoryWrapper from '../../utils/StoryWrapper';
import Notes from '.';

export default {
  title: 'Notes',
  component: Notes,
};

export const Base = () => (
  <StoryWrapper>
    <div style={{ maxWidth: '100vw' }}>
      <Notes owner="5f5c1c67a306864803267d59" />
    </div>
  </StoryWrapper>
);

export const Mobile = () => (
  <StoryWrapper>
    <div style={{ maxWidth: 375 }}>
      <Notes owner="5f5c1c67a306864803267d59" />
    </div>
  </StoryWrapper>
);
