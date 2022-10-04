import React from 'react'
import circlePlaceholder from '../assets/circle.webp'
import schoolPNG from '../assets/school.png'
import drinkingPNG from '../assets/drinking.png'
import gamingPNG from '../assets/gaming.png'
import awardPNG from '../assets/award.png'
import streamingPNG from '../assets/live.png'
import mmaPNG from '../assets/mma.png'

interface Category {
    icon: string
    title: string
}

const SideCategories = () => {
    const categories: Category[] = [
        { icon: gamingPNG, title: 'Gaming' },
        { icon: drinkingPNG, title: 'Picie' },
        { icon: schoolPNG, title: 'Szkoła' },
        { icon: awardPNG, title: 'BSPL Awards' },
        { icon: streamingPNG, title: 'Streaming' },
        { icon: mmaPNG, title: 'Freakfights' },
    ]

    return (
        <div className='side-categories-container'>
            <h5>Kategorie</h5>
            {categories.map((category, index) => (
                <div className='category-over' key={index}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className='side-category'>
                            <img src={category.icon} alt='category icon' />{' '}
                            {category.title}
                        </div>
                        <i className='fa-sharp fa-solid fa-arrow-right'></i>
                    </div>

                    <div className='category-hr'>
                        <hr className='side-hr' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SideCategories
