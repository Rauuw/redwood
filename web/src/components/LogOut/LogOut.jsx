import React from 'react'
import { useAuth } from 'src/auth'
import { navigate, routes } from '@redwoodjs/router'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
  textTransform: 'none',
  padding: theme.spacing(1, 3),
  borderRadius: theme.shape.borderRadius,
}))

const LogOut = () => {
  const { logOut } = useAuth()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate(routes.home())
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <StyledButton
      variant="contained"
      startIcon={<LogoutIcon />}
      onClick={handleLogout}
    >
      Cerrar sesión
    </StyledButton>
  )
}

export default LogOut
