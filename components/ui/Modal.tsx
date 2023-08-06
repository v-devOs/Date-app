import { FC, useContext, useEffect } from 'react';
import { UIContext } from '@/context';

import { Box, SxProps, Theme, Typography } from '@mui/material';
import MuiModal from '@mui/material/Modal';

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 350, md: 450, lg: 550},
  bgcolor: '#252525',
  p: 2,
  borderRadius: '10px'
};

interface Props{

  showImage:  boolean
  img? :      string
}

export const Modal: FC<Props> = () =>  {

  const { isOpenModal, toggleSideMenuOrModal } = useContext(UIContext)



  return (
    <Box>
      <MuiModal
        open={isOpenModal}
        onClose={ () => toggleSideMenuOrModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h3">
            Antes de continuar
          </Typography>

          <Typography variant='body2'>
            Debes de tener en cuenta que para este punto, ya has realizado la cotisacion completa 
            de tu tatuaje mediante nuestras redes sociales o acudiendo a nuestro estudio
            solo pagaras parte de esta cotizacion previa,<br/>
            Esto lo hacemos con tal de evitar citas de broma y que esto llegara a afectar 
            la atencion a nuestro verdaderos clientes
          </Typography>

          <Typography variant='body2'>
            Los pasos a seguir seran los siguientes: 
          </Typography>
            <ol>
              <li>Realizar el pago con tarjeta o mediante paypal</li>
              <li>Ingresar los datos que se te pidan, junto con el codigo de cita</li>
              <li>Seleccionar la imagen de tu tatuaje e ingresar las medidas de este</li>
              <li>Escojer la fecha que sea mas comoda para ti y finalizar</li>
            </ol>
          
        </Box>
      </MuiModal>
    </Box>
  );
}