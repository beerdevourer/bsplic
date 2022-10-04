import { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { ImSun } from 'react-icons/im'
import { BsFillMoonFill } from 'react-icons/bs'

const Navbar = () => {
    const [navState, setNavState] = useState<boolean>(false)
    const html = document.querySelector('html')
    html?.addEventListener('click', () => {
        setNavState(false)
    })
    return (
        <nav>
            <div className='container py-3 mx-3'>
                <div className='brand'>
                    <span>BSPLIC.</span>
                    <div className='hr'></div>
                    <div className='links'>
                        <ul>
                            <li>
                                <a href='/bsplic' className='active'>
                                    ZAKŁADY
                                </a>
                            </li>
                            <li>
                                <a href='/bsplic' className='live-category'>
                                    NA ŻYWO{' '}
                                    <div className='live-label'>
                                        <p>0</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='/bsplic'>PROMOCJE</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className='links-container'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <button className='login'>Zaloguj się</button>
                    <button className='register'>Zarejestruj się</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
