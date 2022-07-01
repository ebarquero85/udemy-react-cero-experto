import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar';

export const Main = () => {
    return (
        <>
            <h1>MainApp</h1>

            <NavBar />
            
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/login" element={ <LoginPage />} />
                <Route path="/about" element={ <AboutPage />} />

                {/* <Route path='/*' element={ <LoginPage /> } /> */}
                <Route path="/*" element={ <Navigate to="/login" /> } />

            </Routes>

        </>
    )
}
