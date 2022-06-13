import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [
        {name: 'John C.', salary: 800, increase: false, promotion: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, promotion: false, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, promotion: false, id: 3}
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      promotion: false,
      id: this.maxId++
    }
    this.setState(({data}) => ({
      data: [...data, newItem]
    }))
  } 

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }));
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'increase':
        return items.filter(item => item.increase);
      case 'promotion':
        return items.filter(item => item.promotion);
      case 'salary':
        return items.filter(item => item.salary > 1000);
      default: 
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  changeSalary = (id, salary) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, salary}
        }
        return item;
      })
    }))
  }


  render() {
    const {data, term, filter} = this.state;
    const employees = data.length;
    const increased = data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
          <AppInfo employees={employees} increased={increased} />

          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList 
              data={visibleData}
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp}
              onChangeSalary = {this.changeSalary}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
