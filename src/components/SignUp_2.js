import React,{useState} from "react";
import useStyles from "./Styles";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Icon} from '@mui/material'
import { Button } from '@mui/material';
import { Grid, Stepper,Step, Typography, StepLabel, TextField } from "@material-ui/core";
import SignUp_2_1 from "./SignUp_2_1";
import SignUp_2_2 from "./SignUp_2_2";
import SignUp_2_3 from "./SignUp_2_3";
const SignUp_2 = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0)
  const steps=[
    <SignUp_2_1 />,
    <SignUp_2_2 />,
    <SignUp_2_3 />
  ]
  const nextStep = () => {
    if(activeStep < 2)
      setActiveStep((currentStep) =>currentStep + 1)
  }
  const prevStep = () => {
    if(activeStep !== 0)
      setActiveStep((currentStep) =>currentStep - 1)
}
  return (
    <div>
      <Grid container className={classes.c1}>
        <Grid item className={classes.i1}>
          <Typography className={classes.backTxt} onClick={()=>prevStep()} ><Icon style={{verticalAlign:'middle'}} component={KeyboardArrowLeftIcon}/> Back</Typography>
        </Grid>
        <Grid container className={classes.innerc1} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item className={classes.i2}>
            <Stepper activeStep={activeStep} className={classes.i2Stepper}>
              <Step><StepLabel ></StepLabel></Step>
              <Step><StepLabel></StepLabel></Step>
              <Step><StepLabel></StepLabel></Step>
            </Stepper>
          </Grid>
          <Grid item className={classes.i3} xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* {activeStep === 0 && <SignUp_2_1 />}
            {activeStep === 1 && <SignUp_2_2 />}
            {activeStep === 2 && <SignUp_2_3 />} */}
            {steps[activeStep]}
              <Grid container className={classes.ic1} xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid item className={classes.ici4} xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Button variant="contained" fullWidth onClick={()=>nextStep()} style={{backgroundColor:'#36C96DFF'}}>Next</Button>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Typography align="center" className={classes.signIn}>
          Already have an account?<span className={classes.signInp}>Sign in</span>
        </Typography>
      </Grid>
    </div>
  );
};

export default SignUp_2;
