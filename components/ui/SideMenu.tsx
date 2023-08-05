import { useContext } from "react"
import { Box, Divider, Drawer, Link, List, ListItem, SxProps, Theme, Typography } from "@mui/material"

import { UIContext } from "@/context"
import { linkHeaders } from "."

const styleLink: SxProps<Theme> = {
  m: '5px 20px'
}

export const SideMenu = () => {

  const { isOpenSideMenu, toggleSideMenu } = useContext(UIContext)

  return (
    <Drawer
      open={isOpenSideMenu}
      onClose={ toggleSideMenu }
      anchor="bottom"
      
    >

      <ListItem onClick={toggleSideMenu}>
        <Link 
          href='/' sx={{...styleLink, mt: 4, mb: 4}}>
          Nombre/Logo Estudio
        </Link>
      </ListItem>


      <Divider sx={{ mb: 4 }}/>

      <List>

        {
          linkHeaders.map(({ link, tag }) => (

            <ListItem key={tag} onClick={toggleSideMenu}>
              <Link href={link} sx={styleLink}>
                { tag }
              </Link>
            </ListItem>
          ))
        }
      </List>

      <Box sx={{ mb: 4}}></Box>
    </Drawer>
  )
}
