import React, { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Divider,
} from '@mui/material'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ExpandLess,
  ExpandMore,
  Home as HomeIcon,
  Business as BusinessIcon,
  LocalShipping as LocalShippingIcon,
  People as PeopleIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material'
import LogOut from 'src/components/LogOut/LogOut'

const NavBarLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openEmpresa, setOpenEmpresa] = useState(false)
  const [openCamion, setOpenCamion] = useState(false)
  const [openConductor, setOpenConductor] = useState(false)
  const [openOrden, setOpenOrden] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar superior */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            LogiTruck System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar con Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Mejorar performance en dispositivos móviles
        }}
        sx={{
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
        }}
      >
        {/* Header del Sidebar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://truck-i.com/img/truck-i-l.png"
              alt="LogiTruck System"
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Typography variant="h6">LogiTruck System</Typography>
          </Box>
          <IconButton onClick={toggleDrawer} sx={{ color: 'inherit' }}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />

        {/* Menú de navegación */}
        <List>
          <ListItem button component={Link} to={routes.home()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          {/* Sección Empresa */}
          <ListItem button onClick={() => setOpenEmpresa(!openEmpresa)}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Empresa" />
            {openEmpresa ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openEmpresa} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to={routes.newCompany()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Agregar empresa" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to={routes.companies()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Ver empresas" />
              </ListItem>
            </List>
          </Collapse>

          {/* Sección Camión */}
          <ListItem button onClick={() => setOpenCamion(!openCamion)}>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Camión" />
            {openCamion ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCamion} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to={routes.newTruck()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Agregar camión" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to={routes.trucks()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Ver camiones" />
              </ListItem>
            </List>
          </Collapse>

          {/* Sección Conductor */}
          <ListItem button onClick={() => setOpenConductor(!openConductor)}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Conductor" />
            {openConductor ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openConductor} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to={routes.newDriver()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Agregar conductor" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to={routes.drivers()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Ver conductores" />
              </ListItem>
            </List>
          </Collapse>

          {/* Sección Orden */}
          <ListItem button onClick={() => setOpenOrden(!openOrden)}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Orden" />
            {openOrden ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openOrden} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to={routes.newOrder()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Agregar orden" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to={routes.orders()}
                sx={{ pl: 4 }}
              >
                <ListItemText primary="Ver órdenes" />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider>
          <Box sx={{p: 2}}>
            <LogOut />
          </Box>
        </Divider>
      </Drawer>

      {/* Contenido principal */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  )
}

export default NavBarLayout
