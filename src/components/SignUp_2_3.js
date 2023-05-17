import React,{useState} from "react";
import useStyles from "./Styles";
import { Grid, Typography, TextField} from "@material-ui/core";
import { FormControlLabel,Radio,RadioGroup,FormControl } from "@mui/material";
import {Link} from 'react-router-dom'
import CreditCardPay from "./CreditCardPay";
import ACHPay from "./ACHPay";

function SignUp_2_3() {
    const classes = useStyles();
    const [payType, setPayType] = useState("CreditCard");
    var comp;
    const HandlePay = (event) =>{
        let temp=event.target.value;
        setPayType(temp);
    }
  return (
    <div>
        <Grid container className={classes.icontainer1} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item className={classes.ici1}>
                <Typography className={classes.wlc}>Payment Information</Typography>
            </Grid>
            <Grid item className={classes.ici2}>
                <Typography className={classes.wlcTxt}>Select your payment type and input your payment information</Typography>
            </Grid>
            <Grid item className={classes.paymentGrid}>
                <Typography  className={classes.payText}>Payment Type<span className={classes.redAsterisk}>  *</span></Typography>               
                <Radio style={{paddingLeft : '14px',color:"#36C96D"}} value="CreditCard" checked={payType==="CreditCard"} onChange={HandlePay}></Radio>
                <span>Credit Card</span>
                <Radio style={{color:"#36C96D"}} value="ACH" checked={payType==="ACH"} onChange={HandlePay}></Radio>
                <span>ACH</span>
            </Grid>
            <Grid item>
                {payType === "CreditCard" && <CreditCardPay />}
                {payType === "ACH" && <ACHPay />}
            </Grid>
        </Grid>
        
    </div>
  )
}

export default SignUp_2_3