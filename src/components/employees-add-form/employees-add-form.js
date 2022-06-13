import { Component } from 'react/cjs/react.production.min';

import './employees-add-form.scss'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        minLength={4}
                        className="form-control new-post-label"
                        placeholder="Name" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        required
                        className="form-control new-post-label"
                        placeholder="Salary USD" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button type="submit"
                        className="btn btn-outline-light"
                        >Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;