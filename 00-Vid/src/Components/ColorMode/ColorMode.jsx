import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ColorMode() {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <ToggleColorModeButton />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function ToggleColorModeButton() {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        Toggle {theme.palette.mode === 'dark' ? 'Light' : 'Dark'} Mode
      </IconButton>
    </Box>
  );
}

export default ColorMode;
