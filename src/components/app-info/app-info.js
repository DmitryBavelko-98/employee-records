import "./app-info.css";

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Company N employee records</h1>
            <h2>Overall number of employees: {employees}</h2>
            <h2>Bonuses: {increased}</h2>
        </div>
    )
}

export default AppInfo;