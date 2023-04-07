import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system'
import Head from 'next/head'
import React from 'react'
import useStyles from '../Utils/styles'


export default function Layout({children}) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>
         {children}
      </Container>
      <footer>
        <Typography>
          All Rights reserved. Next Amazona
        </Typography>
      </footer>
    </div>
  )
}
