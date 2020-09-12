import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Page from '../Page';

const Auth = () => {
  const { spacing, palette } = useTheme();
  return (
    <Page center>
      <Box padding={spacing(2)} bgcolor={palette.background.paper}></Box>
    </Page>
  );
};

export default Auth;
