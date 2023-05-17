import React,{useState} from "react";
import useStyles from "./Styles";
import { Grid, Typography, TextField} from "@material-ui/core";

function ACHPay() {
    const classes=useStyles();

  return (
    <div>
        <Grid container item spacing={4} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.ic2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Account Holder Name</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Routing Number</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Account Number</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Account Type</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Bank Name</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
            </Grid>
    </div>
  )
}

export default ACHPay