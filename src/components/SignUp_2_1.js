import React,{useState} from "react";
import useStyles from "./Styles";
import { Grid, Typography, TextField } from "@material-ui/core";
function SignUp_2_1 () {
   const classes = useStyles();
   const [firstName,setFirstName]=useState("")
   const [lastName,setLastName]=useState("")
   const [errFirst, setErrFirst] = useState("")
   const [errLast, setErrLast] = useState("")
   const firstNameHandler = (e)=>{
      setFirstName(e.target.value)
      setErrFirst(e.target.value.length !== 0 ?"":"This field is required!")
   }
   const lastNameHandler = (e)=>{
      setLastName(e.target.value)
      setErrLast(e.target.value.trim().length !== 0 ?"":"This field is required!")
      
   }
   return (
    <div>
        <Grid container className={classes.ic1}>
                    <Grid item className={classes.ici1}>
                       <Typography className={classes.wlc}>Welcome to CirrusTime</Typography>
                    </Grid>
                    <Grid item className={classes.ici2}>
                       <Typography className={classes.wlcTxt}>Let’s get your account set up.</Typography>
                    </Grid>
                    <Grid item className={classes.ici3}>
                       <Typography className={classes.labels}>First Name<span className={classes.redAsterisk}>  *</span></Typography>
                       <TextField  required variant="outlined" fullWidth value={firstName} placeholder="Enter first name" onChange={(e)=>firstNameHandler(e)}></TextField>
                       <span style={{color:'red'}}>{errFirst}</span>
                    </Grid>
                    <Grid item className={classes.ici3}>
                       <Typography className={classes.labels}>Last Name<span className={classes.redAsterisk}>  *</span></Typography>
                       <TextField required variant="outlined" fullWidth value={lastName} placeholder="Enter last name" onChange={(e)=>lastNameHandler(e)}></TextField>
                       {errLast}
                    </Grid>
                   
         </Grid>
    </div>
  )
}

export default SignUp_2_1