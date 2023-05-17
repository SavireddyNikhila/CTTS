import React,{useState} from "react";
import useStyles from "./Styles";
import { Grid, Typography, TextField } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SignUp_2_2() {
    const classes = useStyles(); 

  return (
    <div>
        <Grid container className={classes.ic1}>
            <Grid item className={classes.ici1}>
                <Typography className={classes.wlc}>Your Company Info</Typography>
            </Grid>
            <Grid item className={classes.ici2}>
                <Typography className={classes.wlcTxt}>Tell us a bit about your company.</Typography>
            </Grid>
            <Grid item className={classes.ici3}>
                <Typography className={classes.labels}>Company Name<span className={classes.redAsterisk}>  *</span></Typography>
                <TextField variant="outlined" fullWidth  placeholder="Enter company name" ></TextField>
            </Grid>
            <Grid item className={classes.ici3}>
                <Typography className={classes.labels}>Phone Number<span className={classes.redAsterisk}>  *</span></Typography>
                <TextField variant="outlined" fullWidth placeholder="Enter phone number" ></TextField>
            </Grid>
            <Grid item className={classes.ici3}>
                <Typography className={classes.labels}>Number of Employees<span className={classes.redAsterisk}>  *</span></Typography>
                <FormControl fullWidth >
                    <Select fullWidth defaultValue="Number of employees">
                        <MenuItem disabled value="Number of employees">Number of employees</MenuItem>
                        <MenuItem value="1-10">1-10</MenuItem>
                        <MenuItem value="11-25">11-25</MenuItem>
                        <MenuItem value="26-50">26-50</MenuItem>
                        <MenuItem value="51-99">51-99</MenuItem>
                        <MenuItem value="100+">100+</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item className={classes.ici3}>
                <Typography className={classes.labels}>Referral code</Typography>
                <TextField variant="outlined" fullWidth placeholder="Enter referral code" ></TextField>
            </Grid>
        </Grid>
    </div>
  )
}

export default SignUp_2_2