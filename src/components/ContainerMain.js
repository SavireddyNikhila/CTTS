import React from 'react'
import SignUp_1 from './SignUp_1'
import logo from '../images/final.png'
import { Container } from '@material-ui/core'
import useStyles from './Styles'
import SignUp_2 from './SignUp_2'
const ContainerMain = () => {
  const classes=useStyles();
  return (
    <Container className={classes.main} maxWidth='xl'>
        <img className={classes.ctslogo} src={logo} alt="Cirrus Time logo"/>
        <SignUp_1 />
        {/* <SignUp_2 /> */}
    </Container>
  )
}

export default ContainerMain