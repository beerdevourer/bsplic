import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Homepage } from './components'
import './scss/index.scss'

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar />
                <Routes>
                    <Route path='/bsplic/' element={<Homepage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
