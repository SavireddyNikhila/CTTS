import React, { useState } from "react";
import { Button, Grid, TextField,Typography } from "@material-ui/core";
import useStyles from "./Styles";
import workimg from "../images/img_dealership@2x.png";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';


const SignUp_1 = () => {
  const classes = useStyles();
  const [password,setPassword]=useState('');
  const [email,setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('');
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
    var isValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,3}$/.test(email);
    setEmailErr(isValidEmail ? "":"Email is not Valid!")
  }

  const hasLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(){}?><,./]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const isComplete = hasLength && hasNumber && hasUpperCase && hasSpecialChar && hasLowerCase;

  return (
    <div>
      <Grid container xs={9} sm={9} md={9} lg={9} xl={9} className={classes.containerMain}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.container1}>
          <Grid container className={classes.innerContainer1}>
            <Grid item className={classes.txtGrid}>
              <p className={classes.txt1}>
                Intelligent attendance system makes management more efficient!
              </p>
            </Grid>
            <Grid item className={classes.imgGrid}>
              <img className={classes.img1} src={workimg} ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className={classes.container2}>
          <Grid container className={classes.innerContainer2}>
            <Grid item className={classes.txtGrid1}>
              <Typography className={classes.txt2}>Create your account</Typography>
            </Grid>
            <Grid item className={classes.inputGrid}>
              <Typography className={classes.ilabel}>Email</Typography>
              <TextField value={email} onChange={handleEmailChange} fullWidth variant='outlined'>Enter your email</TextField>
              <span style={{color:'red'}}>{emailErr}</span>
            </Grid>
            <Grid item className={classes.inputGrid}>
              <Typography className={classes.ilabel}>Password</Typography>
              <TextField value={password} onChange={handlePasswordChange} fullWidth type='password' variant='outlined'>Enter your password </TextField>
            </Grid> 
            <Grid item >
            <Typography align='left' className={classes.pwdText} gutterBottom>Your Password must be at least 8 characters, contain both an upper and lower-case letter, a digit, and a special character(!@#$%^&*(){}?&gt;&lt;,./).</Typography>
            </Grid>
            <Grid item className={classes.errGrid}>
              <Grid container style={{display:'flex',flexDirection : 'row', justifyContent:'space-between'}} spacing={2}>
                <Grid item style={{display:'flex',flexDirection : 'column'}}>
                  <Typography style={{ color: hasLength ? 'green' : 'red' }} align='left' className={classes.errText} component='span'>{hasLength?<CheckIcon style={{color:'green', verticalAlign:'middle'}}/>:<ClearIcon style={{color:'red', verticalAlign:'middle'}}/>}Has 8 Characters</Typography>
                  <Typography style={{ color: hasNumber ? 'green' : 'red' }} align='left' className={classes.errText} component='span'>{hasNumber?<CheckIcon style={{color:'green', verticalAlign:'middle'}}/>:<ClearIcon style={{color:'red', verticalAlign:'middle'}}/>}Has Number</Typography>
                </Grid>
                <Grid item style={{display:'flex',flexDirection : 'column'}}>
                  <Typography style={{ color: hasUpperCase ? 'green' : 'red' }} align='left' className={classes.errText} component='span'>{hasUpperCase?<CheckIcon style={{color:'green', verticalAlign:'middle'}}/>:<ClearIcon style={{color:'red', verticalAlign:'middle'}}/>}Has Uppercase</Typography>
                  <Typography style={{ color: hasSpecialChar ? 'green' : 'red' }} align='left' className={classes.errText} component='span'>{hasSpecialChar?<CheckIcon style={{color:'green', verticalAlign:'middle'}}/>:<ClearIcon style={{color:'red', verticalAlign:'middle'}}/>}Has Special Character</Typography>
                </Grid>
                <Grid item style={{display:'flex',flexDirection : 'column'}}>
                  <Typography style={{ color: hasLowerCase ? 'green' : 'red' }} align='left' className={classes.errText} component='span'>{hasLowerCase?<CheckIcon style={{color:'green', verticalAlign:'middle'}}/>:<ClearIcon style={{color:'red', verticalAlign:'middle'}}/>}Has Lowercase</Typography>
                  <Typography style={{ color: isComplete ? 'green' : 'red' }} align='left' className={classes.errText} component='span'>{isComplete?<CheckIcon style={{color:'green', verticalAlign:'middle'}} />:<ClearIcon style={{color:'red', verticalAlign:'middle'}}/>}Complete</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.btnGrid}>
              <Button className={classes.btnnext} fullWidth variant="contained" >NEXT</Button>
            </Grid>           
          </Grid>
          
        </Grid>
      </Grid>
      <Typography align='center' className={classes.signIn}>Already have an account?<span className={classes.signInp}>Sign in</span></Typography>
    </div>
  );
};

export default SignUp_1;
