import Image from 'next/image';
import Box from '@mui/material/Box'; // Usar Box de Material UI para el contenedor

export default function Logo() {
  return (
    <Box sx={{ width: 100, height: 100, position: 'relative' }}>
      <Image
        src="/images/logo_black.png"
        alt="Logo de la empresa"
        layout="fill"
        objectFit="contain" // Ajusta la imagen dentro del contenedor sin cortar
        quality={100}
        loading='eager'
      />
    </Box>
  );
}
