import { Sidebar, HomepageMain } from './'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Sidebar />
            <HomepageMain />
            <Sidebar />
        </div>
    )
}

export default Homepage
