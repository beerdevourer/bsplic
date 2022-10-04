import React from 'react'
import { SearchBar, SideCategories, SidePopularBets } from './'

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <SearchBar />
            <SidePopularBets />
            <SideCategories />
        </div>
    )
}

export default Sidebar
