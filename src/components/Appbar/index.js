'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Logo';
import useStyles from './styles';

const pages = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Acompañamiento', path: '/support' },
  { name: 'Nosotros', path: '/about' }
];

function ResponsiveAppBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const classes = useStyles();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false);  // Cerrar menú tras navegar
  };

  return (
    <>
      <AppBar position="static" color="white" sx={{
          boxShadow: '0 5px 10px rgba(154, 161, 177, .1)', // Cambia el valor para ajustar la sombra
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo visible solo en pantallas medianas o grandes */}
            <Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            {/* Botón del menú para pantallas pequeñas */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                size='large'
                aria-label="menu toggle"
                onClick={toggleMenu}
                color="inherit"
                sx={{
                  ...classes.iconButton,
                  transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                {menuOpen ? <CloseIcon sx={{ fontSize: 30 }} /> : <MenuIcon sx={{ fontSize: 30 }} />}
              </IconButton>
            </Box>

            {/* Navegación completa visible en pantallas medianas o grandes */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigation(page.path)}  // Navegación SPA
                  sx={{
                    ...classes.button,
                    ...(pathname === page.path && classes.activeButton),  // Aplica estilos activos si coincide el path
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Menú desplegable responsivo para pantallas pequeñas */}
      <Box
        sx={{
          ...classes.menuBox,
          top: menuOpen ? '100px' : '-100vh',
          transition: 'top 0.3s ease',
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.name}
            onClick={() => handleNavigation(page.path)}  // Navegación SPA
          >
            <Typography sx={classes.menuItem}>
              {page.name}
            </Typography>
          </MenuItem>
        ))}
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
