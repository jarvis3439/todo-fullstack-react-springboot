import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoService from "../../todo-api/TodoService";

class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };
  }

  componentDidMount() {
    if (this.state.id === -1) {
      console.log("called");
      return;
    } else {
      let username = sessionStorage.getItem("authenticatedUser");
      TodoService.getTodo(username, this.state.id).then((response) => {
        this.setState({
          description: response.data.description,
          targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
        });
      });
    }
  }

  onValidate = (values) => {
    let error = {};
    if (!values.description) {
      error.description = "Description is Required";
    } else if (values.description.length < 5) {
      error.description = "Description have atleast 5 characters";
    }

    if (!moment(values.targetDate).isValid()) {
      error.targetDate = "Date is invalid";
    }

    return error;
  };

  onSubmit = (values) => {
    let username = sessionStorage.getItem("authenticatedUser");

    let todo = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
    };

    if (this.state.id === -1) {
      TodoService.createTodo(username, todo).then(() =>
        this.props.history.push("/todos")
      );
    } else {
      TodoService.updateTodo(username, this.state.id, todo).then(() =>
        this.props.history.push("/todos")
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Create/Update Todo</h1>
        <div className="container">
          <Formik
            initialValues={{
              description: this.state.description,
              targetDate: this.state.targetDate,
            }}
            onSubmit={this.onSubmit}
            validate={this.onValidate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>

                <button className="btn btn-success" type="submit">
                  Update
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
export default UpdateTodo;
