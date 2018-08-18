import React, { Component } from "react";
import { connect } from "react-redux";
import { addSet, increaseSetId } from "../../actions/creators/set";
import {
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  Alert
} from "reactstrap";

class NewRepetition extends Component {
  WEIGHT = "WEIGHT";
  REPETITIONS = "REPETITIONS";

  constructor() {
    super();
    this.state = this.getDefaultState();
  }

  getDefaultState = () => {
    return {
      [this.WEIGHT]: 0,
      [this.REPETITIONS]: 0
    };
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveAndDuplicate = () => {
    this.persistSetData(false);
  };

  persistSetData = (setDefaultState = true) => {
    this.props.addSet(this.mapStateToSet());
    this.props.increaseSetId();

    if (setDefaultState) {
      this.setState(this.getDefaultState());
    }
  };

  mapStateToSet = () => {
    return {
      weight: this.state[this.WEIGHT],
      repetitions: this.state[this.REPETITIONS]
    };
  };

  render() {
    return (
      <div>
        <Alert color="primary">Current rep: {this.props.currentSetId}</Alert>
        <Form>
          <FormGroup>
            <Label for={this.WEIGHT} size="lg">
              Weight (kg)
            </Label>
            <Input
              type="number"
              name={this.WEIGHT}
              id={this.WEIGHT}
              placeholder={this.WEIGHT}
              value={this.state[this.WEIGHT]}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for={this.REPETITIONS} size="lg">
              Repetitions
            </Label>
            <Input
              type="number"
              name={this.REPETITIONS}
              id={this.REPETITIONS}
              placeholder={this.REPETITIONS}
              value={this.state[this.REPETITIONS]}
              onChange={this.onChange}
            />
          </FormGroup>
        </Form>

        <ButtonGroup className="btn-block" vertical>
          <Button color="primary" onClick={this.persistSetData}>
            Save
          </Button>
          <Button color="secondary" onClick={this.saveAndDuplicate}>
            Save & duplicate
          </Button>
          <Button color="danger">Discard</Button>
        </ButtonGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addSet: setData => dispatch(addSet(setData)),
    increaseSetId: () => dispatch(increaseSetId())
  };
}

function mapStateToProps(state) {
  return {
    currentSetId: state.set.currentSetId
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRepetition);
