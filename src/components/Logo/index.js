import Image from 'next/image';
import Box from '@mui/material/Box'; // Usar Box de Material UI para el contenedor

export default function Logo() {
  return (
    <Box sx={{ width: 180, height: 100, position: 'relative' }}>
      <Image
        src="/images/logo_black.png"
        alt="Logo de la empresa"
        fill
        sizes="100px"
        quality={100}
        priority={true}
      />
    </Box>
  );
}
