import React from 'react';
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";

import TodoTable from './TodoTable';

class TodoForm extends React.Component {

    state = {
        items: [],
        text: '',
        selectedDate: null,
        textValidated: false,
        dateValidated: false 
    }

    onInputChange = event => {
        // console.log(event.target.value);
        this.setState({
            text: event.target.value
        })
    };

    onDateChanged = date => {
        this.setState({
            selectedDate: date
        })
    };


    onFormSubmit = event => {
        event.preventDefault();
        if (!this.state.text.length) {
            alert("please entern something!");
        }
        // copy old text state
        const newItems = {
            text: this.state.text,
            id: Date.now(),
            selectedDate: this.state.selectedDate
        }
        console.log(newItems);

        this.setState({
            items: this.state.items.concat(newItems),
            text: "",
            selectedDate: null,
        })
    };
    

    render() {
        return(
            <div>
                <div className="form">
                    <h1>Todo List Length: {this.state.items.length}</h1>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group>
                            <Form.Label>Todo Context</Form.Label>
                            <Form.Control
                                className="form-control"
                                type="text"
                                placeholder="Please enter something..."
                                value={this.state.text}
                                onChange={this.onInputChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter something...
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pick a Date</Form.Label>
                            <DatePicker
                            className="form-control"
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            minDate={new Date()}
                            selected={this.state.selectedDate}
                            onChange={this.onDateChanged}
                            placeholderText="Please select a date and time..."
                            required
                            />
                        </Form.Group>
                        {
                            !this.state.text && !this.state.selectedDate && this.state.items.length === 0 &&
                            <small className="invalidMsg">{this.state.errMsg}</small>
                        }
                        
                        <Button variant="outline-primary" type="submit">Submit</Button>
                    </Form>
                </div>
                <TodoTable items={this.state.items}/>
            </div>
        )
    }
};

export default TodoForm;