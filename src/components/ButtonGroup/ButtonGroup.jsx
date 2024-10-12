import React from 'react';
import { Box, Button } from '@mui/material';
import '../../partials/_fonts.scss'

const StyledButtonGroup = ({skills}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap', // This will enable wrapping
        gap: '8px',
        paddingBottom: '8px',
        justifyContent: 'center',
        '@media (max-width: 320px)': {
          flexDirection: 'column', // Stack buttons vertically on small screens
        },
      }}
    >
{skills.map((skill) => (
  <Button
    key={skill}
    variant="text"
    sx={{
      fontFamily: 'Montserrat',
      fontSize: '11px',
      color: '#000',
      border: 'none',
      boxShadow: 'none', // Remove box shadow
      borderRadius: '0', // Remove border radius
      '&:hover': {
        borderBottom: '1px solid #5e2424', // Bottom border on hover
        backgroundColor: 'transparent', // No background color change
        boxShadow: 'none', // Remove hover box shadow
        borderRadius: '0', // Ensure no border radius on hover
      },
    }}
  >
    {skill}
  </Button>
))}
    
      {/* <Button
        variant="text"
        sx={{
            fontFamily: 'Montserrat',
            fontSize: '11px',
            color: '#000',
            border: 'none',
            boxShadow: 'none', // Remove box shadow
            borderRadius: '0', // Remove border radius
            '&:hover': {
              borderBottom: '1px solid #5e2424', // Bottom border on hover
              backgroundColor: 'transparent', // No background color change
              boxShadow: 'none', // Remove hover box shadow
              borderRadius: '0', // Ensure no border radius on hover
            },
        }}
      >
        Software Dev
      </Button>
      <Button
        variant="text"
        sx={{
            fontFamily: 'Montserrat',
            fontSize: '11px',
            color: '#000',
            border: 'none',
            boxShadow: 'none', // Remove box shadow
            borderRadius: '0', // Remove border radius
            '&:hover': {
              borderBottom: '1px solid #5e2424', // Bottom border on hover
              backgroundColor: 'transparent', // No background color change
              boxShadow: 'none', // Remove hover box shadow
              borderRadius: '0', // Ensure no border radius on hover
            },
        }}
      >
        Databases
      </Button>
      <Button
        variant="text"
        sx={{
            fontFamily: 'Montserrat',
            fontSize: '11px',
            color: '#000',
            border: 'none',
            boxShadow: 'none', // Remove box shadow
            borderRadius: '0', // Remove border radius
            '&:hover': {
              borderBottom: '1px solid #5e2424', // Bottom border on hover
              backgroundColor: 'transparent', // No background color change
              boxShadow: 'none', // Remove hover box shadow
              borderRadius: '0', // Ensure no border radius on hover
            },
        }}
      >
        Softwares
      </Button> */}
    </Box>
  );
};

export default StyledButtonGroup;
