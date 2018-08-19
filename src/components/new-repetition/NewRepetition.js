import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  Alert
} from "reactstrap";
import {
  addRepetition,
  increaseRepetitionId
} from "../../actions/creators/repetition";

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
    this.persistRepetitionData(false);
  };

  persistRepetitionData = (setDefaultState = true) => {
    this.props.addRepetition(this.mapStateToRepetition());
    this.props.increaseRepetitionId();

    if (setDefaultState) {
      this.setState(this.getDefaultState());
    }
  };

  mapStateToRepetition = () => {
    return {
      weight: this.state[this.WEIGHT],
      repetitions: this.state[this.REPETITIONS]
    };
  };

  render() {
    return (
      <div>
        <Alert color="primary">
          Current rep: {this.props.currentRepetitionId}
        </Alert>
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
          <Button color="primary" onClick={this.persistRepetitionData}>
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
    addRepetition: repetitionData => dispatch(addRepetition(repetitionData)),
    increaseRepetitionId: () => dispatch(increaseRepetitionId())
  };
}

function mapStateToProps(state) {
  return {
    currentRepetitionId: state.repetition.currentRepetitionId
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRepetition);
