import React from "react";
import PropTypes from "prop-types";
import { Button, Alert } from "react-bootstrap";

import "./SamplePanel.scss";

export class SamplePanel extends React.Component<any, any> {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName: any) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
    <>
        <Alert className="alert alert-primary" role="alert">A simple primary alert—check it out!</Alert>
        <Button name="SamplePanel" className="btn btn-primary btn-lg btn-block" type="button"> 버튼 예제 </Button>
    </>
    );
  }
}