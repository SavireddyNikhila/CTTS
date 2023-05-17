import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  // Signup1 CSS Starts from here

  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "#F5F6FA",
  },
  ctslogo: {
    height: "3.9%",
    width: "12%",
    marginTop: "4.9%",
    marginBottom: "4.9%",
    marginLeft: "44%",
  },
  containerMain: {
    width: "75%",
    margin: "auto",
    // border: "1px solid gray",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
  },
  container1: {
    width: "40%",
    height: "auto",
    // border:'1px solid red',
    background: "linear-gradient(0deg, #7FFFAF 0%, #E2FCEC 100%)",
  },
  txtGrid: {
    height: "40%",
  },
  txt1: {
    height: "100%",
    textAlign: "left",
    fontSize: "32px",
    fontStyle: "italic",
    color: "#304669FF",
    fontWeight: "bold",
    hyphens: "auto",
    margin:'7.8% 4.2% 5% 3.6%',
    
    // [theme.breakpoints.up('xl')] : {
    //   fontSize: '36px'
    // },
    // [theme.breakpoints.up('lg')] : {
    //   fontSize: '32px'
    // },
    // [theme.breakpoints.up('md')] : {
    //   fontSize: '26px'
    // },
    // [theme.breakpoints.up('sm')] : {
    //   fontSize: '23px'
    // },
    // [theme.breakpoints.up('xs')] : {
    //   fontSize: '20px'
    // }
  },
  imgGrid: {
    width: "100%",
    height: "60%",
    margin: "auto",
  },
  img1: {
    width: "100%",
    height: "100%",
    position: "static",
  },
  container2: {
    width: "60%",
    height: "auto",
    // border:'1px solid red',
    display: "flex",
    alignItems: "center",
  },
  innerContainer2: {
    margin: "5.2% 9.1% 4.4% 9.1%",
    // border:'1px solid red',
    height: "auto",
    width: "83%",
  },
  txt2: {
    fontSize: "29px",
    color: "#304669FF",
    fontWeight: "bold",
  },
  txtGrid1: {
    width: "100%",
  },
  inputGrid: {
    marginTop: "3.9%",
    width: "100%",
  },
  ilabel: {
    marginBottom: "1.7%",
    fontSize: "18px",
    fontWeight: "400",
    color: "#4B5669",
  },
  btnGrid: {
    width: "100%",
  },
  btnnext: {
    marginTop: "3.5%",
    backgroundColor: "#36C96DFF",
    color: "white",
  },
  pwdText: {
    marginTop: "2%",
    fontSize: "14px",
    color: "#4B5669FF",
  },
  pwdCheck: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  errGrid: {
    marginTop: "2%",
  },
  errText: {
    fontSize: "12px",
    color: "red",
  },
  iconstyle: {
    verticalAlign: "middle",
  },
  signIn :{
    marginTop:'2.9%',
    paddingBottom:'4%',
    color:'#7C8D9DFF',
    fontSize:'14px'
  },
  signInp :{ 
    color:'green',
  },

  // Signup1 CSS ends here

  // Signup2 CSS Starts from here

  c1 :{
    width:"75%",
    height:"auto",
    margin: "auto",
    //border: "1px solid red",
    boxShadow: '0px 3px 12px 0px rgba(0,0,0,0.05)',
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    display:'flex',
    flexDirection:'column'
  },
  innerc1 :{
    width:'98%',
    margin:'auto'
  },
  backTxt :{
    fontSize: '14px'
  },
  i2 :{
     textAlign:"center",
     margin:"auto",
     width:"80%",
     //border:'1px solid red'
  },
  i3 :{
    width:'100%',
    margin:'auto'
  },
  ic1 :{
    width:"50%",
    height:"auto",
    margin:'auto',
    //border:'1px solid red',
    display:'flex',
    flexDirection:'column'
  },
  ici1 :{
    textAlign:"center",
    margin : "auto"
  },
  ici2 :{
    textAlign:"center",
    margin:"auto",
  },
  wlcTxt :{
    textAlign:'center',
    color:'#7C8D9DFF'
  },
  ici3 :{
    width:'100%',
    marginTop:'7.4%',
  },
  ici4 :{
    marginTop:'7.4%',
    marginBottom:'7.4%'
  },
  labels :{
    color:'#4B5669FF',
  },
  payText:{
    paddingLeft:'16px'
  },
  wlc :{
    fontSize: "36px",
    fontWeight: "bold",
    textAlign:"center",
    color: "#304669",
  },
  redAsterisk :{
    color: "red"
  },
  i2Stepper :{
    "& .MuiStepIcon-active": { color: "#36C96D !important"  } ,
    "& .MuiStepIcon-completed": { color: "#36C96D !important" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "gray !important" }
  },

  // Signup2 CSS ends here

 icontainer1 :{
    width:"100%",
    height:"auto",
    margin:'auto',
    // border:'1px solid green',
    display:'flex',
    flexDirection:'column'
  },
  paymentGrid :{
    width:'100%',
    marginTop:"5%",
    // border:'1px solid red',
    
  },
  ic2 :{
    width:'100%',
    height:'auto',
    margin : 'auto',
    // marginLeft:'0px',
    // marginRight:'0px',
    // border:'1px solid red',
  },

}));

export default useStyles;
