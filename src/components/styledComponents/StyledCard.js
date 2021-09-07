import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const StyledCard = withStyles({
    root: {
      background: '#FDEFEF',
      borderRadius: 3,
      height: '50%',
      width: '25%',
      margin: 20,
    }
  })(Card);
  
  export default StyledCard