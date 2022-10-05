import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Homepage, Livepage } from './components'
import { useState } from 'react'
import './scss/index.scss'
import Promotionpage from './components/Promotionpage'

type CurrentPage = 'home' | 'live' | 'promo'

function App() {
    const [currentPage, setCurrentPage] = useState<CurrentPage>('home')

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar currentPage={currentPage} />
                <Routes>
                    <Route
                        path='/bsplic/'
                        element={<Homepage setCurrentPage={setCurrentPage} />}
                    />
                    <Route
                        path='/bsplic/live/'
                        element={<Livepage setCurrentPage={setCurrentPage} />}
                    />
                    <Route
                        path='/bsplic/promotion/'
                        element={
                            <Promotionpage setCurrentPage={setCurrentPage} />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
