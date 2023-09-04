import classes from "./Nomedia.module.css";
import React from "react";

function NoImage(props) {
    return <div className={classes.containter}>{props.children}</div>;
  }
  
  export default React.memo(NoImage);