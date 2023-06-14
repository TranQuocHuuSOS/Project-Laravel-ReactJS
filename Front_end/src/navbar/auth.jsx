import { Routes, Route, Link } from 'react-router-dom';
import Home from '../view/User/Home';
import Introduce from '../view/User/Introduce';
import Co_Living from '../view/User/Co_Living';
import Dashboard from '../component/dashboard';
import AuthUser from '../component/AuthUser';
import './auth.css';
function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <div className="header">
            <nav className="navbar navbar-expand-sm navbar-danger bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">DreamHome</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Introduce">Giới thiệu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Co_Living">Co_Living</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Co_Living">Đối tác</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Co_Living">Tin tức</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Co_Living">Dịch vụ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Co_Living">Loại phòng</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Introduce" element={<Introduce/>} />
                    <Route path="/Co_Living" element={<Co_Living/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
}
export default Auth;
