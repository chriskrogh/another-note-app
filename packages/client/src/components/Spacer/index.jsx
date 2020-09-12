import { styled } from '@material-ui/core/styles';

const Spacer = styled('span')({
  display: 'inline-block',
  width: ({ width = 1 }) => width,
  height: ({ height = 1 }) => height,
});

export default Spacer;
