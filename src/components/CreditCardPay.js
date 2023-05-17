import React,{useState} from "react";
import useStyles from "./Styles";
import { Grid, Typography, TextField} from "@material-ui/core";

function CreditCardPay() {
    const classes=useStyles();
  return (
        <Grid container spacing={4} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.ic2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Typography className={classes.labels}>Address 1<span className={classes.redAsterisk}>  *</span></Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Address 2<span className={classes.redAsterisk}>  *</span></Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Country<span className={classes.redAsterisk}>  *</span></Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>City<span className={classes.redAsterisk}>  *</span></Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>State<span className={classes.redAsterisk}>  *</span></Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Zip<span className={classes.redAsterisk}>  *</span></Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Cardholder Name</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Card Number</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Expiration Month</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>Expiration Year</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography className={classes.labels}>CVV</Typography>
                        <TextField variant="outlined" fullWidth></TextField>   
                    </Grid>
        </Grid>
   
  )
}

export default CreditCardPay