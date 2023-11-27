import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard'
import Users from '../../Pages/Users'
import { Table } from '../../Pages/Table'

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/table" element={<Table />}></Route>
            </Routes>
        )
    }

export default AppRoutes