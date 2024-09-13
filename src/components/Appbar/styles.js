const useStyles = () => ({
  iconButton: {
    transition: 'transform 0.5s ease',
  },
  button: {
    textTransform: 'capitalize',
    fontSize: '14px',
    my: 2,
    color: 'black',
    display: 'block',
    mx: 4,
    fontWeight: 'bold',
    position: 'relative',
    transition: 'color 0.3s ease',
    backgroundColor: 'transparent',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      background: '#009688',
      bottom: 0,
      left: 0,
      transition: 'width 0.3s ease, background 0.3s ease',
    },
    '&:hover': {
      color: '#009688',
      '&::after': {
        width: '100%',
      },
    },
  },
  menuBox: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 64px)',
    bgcolor: 'rgba(255, 255, 255, 1)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'left',
    transition: 'top 0.5s ease'
  },
  menuItem: {
    color: 'black',
    fontSize: '1rem',
    margin: '0 26px',
    fontWeight: '700',
    position: 'relative',
  },
  activeButton: {
    color: '#009688',  // Mantener el color del botón activo en verde
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',  // Mantener la línea cuando el botón está activo
      height: '2px',
      background: '#009688',
      bottom: 0,
      left: 0,
    },
  },
  activeMenuItem: {
    color: '#009688',  // Mantener el color del botón activo en verde
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',  // Mantener la línea cuando el botón está activo
      height: '2px',
      background: '#009688',
      bottom: 0,
      left: 0,
    },
  },
});

export default useStyles;
