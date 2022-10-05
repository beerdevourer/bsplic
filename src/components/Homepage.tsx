import { Sidebar, HomepageMain, RightBar } from './'
import { useEffect } from 'react'

interface HomepageProps {
    setCurrentPage: Function
}

const Homepage = ({ setCurrentPage }: HomepageProps) => {
    useEffect(() => {
        setCurrentPage('home')
    }, [])

    return (
        <div className='homepage'>
            <Sidebar />
            <HomepageMain />
            <RightBar />
        </div>
    )
}

export default Homepage
