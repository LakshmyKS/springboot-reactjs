import React from "react";
import styled from "styled-components";
import green from "@material-ui/core/colors/green";
import CheckCircle from "@material-ui/icons/EventAvailable";

const Root = styled.div({
  marginTop: '10%',
  flexDirection: "column",
  display:'flex'
});
const Text = styled.span({
  fontSize: "1.3rem",
  fontWeight: 300,
  width: "75%",
  textAlign: "center",
  marginTop: 30,
  marginLeft:'12%',
});

export default function SuccessMsg() {

  return (
    <React.Fragment>
      <Root className="centered-container">
        <CheckCircle style={{ height: 110, marginLeft:'43%', width: 110, color: green[500] }} />
        <Text>Your application has been submitted</Text>
      </Root>
    </React.Fragment>
  );
}