import { Component } from 'react/cjs/react.production.min';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input type="text"
                    onChange={this.onSearch}
                    value={this.state.term}
                    className="form-control search-input"
                    placeholder="Find employee"/>
        )
    }
}

export default SearchPanel;