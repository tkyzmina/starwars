import React from 'react'
import {  Alert } from "@mui/material";


function Notification({text, type}) {
  return (
    <Alert severity={type} xs={12} sm={4}>
    {text}
  </Alert>
  )
}

export default Notification