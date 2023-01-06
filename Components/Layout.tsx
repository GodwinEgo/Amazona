import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system'
import Head from 'next/head'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static">
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
