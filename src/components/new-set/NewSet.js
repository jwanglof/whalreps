import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Alert,
  Button,
  ButtonGroup,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { addRepetitionToSet } from "../../actions/creators/set";
import { emptyRepetition } from "../../constants/repetition";
import "./NewSet.css";

class NewSet extends Component {
  EXERCISE_NAME = "EXERCISE_NAME";
  REPETITIONS = "REPETITIONS";

  constructor() {
    super();
    this.state = this.getDefaultState();
  }

  getDefaultState = () => {
    return {
      [this.EXERCISE_NAME]: "",
      [this.REPETITIONS]: []
    };
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  addRepetition = () => {
    // const { currentSetId } = this.props;
    // this.REPETITIONS.push(this.getEmptyRepetition());
    // this.props.addRepetitionToSet(currentSetId);

    const currentRepetitions = this.state[this.REPETITIONS].slice(0);
    currentRepetitions.push(this.getEmptyRepetition());

    console.log(111, currentRepetitions);
    this.setState({
      [this.REPETITIONS]: currentRepetitions
    });
  };

  getEmptyRepetition = () => {
    return Object.assign({}, emptyRepetition);
  };

  render() {
    return (
      <div>
        <Alert color="primary">Current set: {this.props.currentSetId}</Alert>
        <Form>
          <FormGroup row>
            <Label for={this.EXERCISE_NAME} xs={2}>
              Name
            </Label>
            <Col xs={10}>
              <Input
                type="text"
                name={this.EXERCISE_NAME}
                id={this.EXERCISE_NAME}
                placeholder={this.EXERCISE_NAME}
                value={this.state[this.EXERCISE_NAME]}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
        </Form>

        {/*<div>*/}
        {/*{*/}
        {/*this.state[this.REPETITIONS].length > 0 ?*/}
        {/*this.state[this.REPETITIONS].map(r => r) :*/}
        {/*null*/}
        {/*}*/}
        {/*</div>*/}

        <div className="NewSet">
          <Button color="primary" block onClick={this.addRepetition}>
            Add repetition
          </Button>

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
        </div>

        <ButtonGroup className="btn-block" vertical>
          {/*<Button color="primary" onClick={this.addRepetition}>*/}
          {/*Add repetition*/}
          {/*</Button>*/}
          <Button color="secondary">Save</Button>
          <Button color="danger">Discard</Button>
        </ButtonGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRepetitionToSet: setId => dispatch(addRepetitionToSet(setId))
  };
}

function mapStateToProps(state) {
  console.log(3333, state);
  return {
    currentSetId: state.set.currentSetId
  };
}

export default connect(mapStateToProps)(NewSet);
