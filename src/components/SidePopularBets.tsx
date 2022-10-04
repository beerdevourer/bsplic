import React from 'react'
import circlePlaceholder from '../assets/circle.webp'
import examPNG from '../assets/popularbets/exam.png'
import gta5PNG from '../assets/popularbets/robbery.png'
import grid2PNG from '../assets/popularbets/finish-flag.png'
import atomPNG from '../assets/popularbets/atom.png'
import dicePNG from '../assets/popularbets/dice.png'
import csgoPNG from '../assets/popularbets/shooting.png'
import soccerPNG from '../assets/popularbets/football.png'
import bsplPNG from '../assets/popularbets/bspl.png'
import crazyPNG from '../assets/popularbets/crazy.png'
import panstwamiastaPNG from '../assets/popularbets/panstwamiasta.webp'
import awardPNG from '../assets/award.png'

interface Popularbet {
    icon: string
    title: string
}

const SidePopularBets = () => {
    const popularbets: Popularbet[] = [
        { icon: csgoPNG, title: 'CS:GO' },
        { icon: soccerPNG, title: 'FIFA 23' },
        { icon: grid2PNG, title: 'Grid 2' },
        { icon: gta5PNG, title: 'GTA V' },
        { icon: panstwamiastaPNG, title: 'Państwa-miasta' },
        { icon: bsplPNG, title: 'BSPL' },
        { icon: dicePNG, title: 'Bukmacherka' },
        { icon: crazyPNG, title: 'Dawid Jasper' },
        { icon: atomPNG, title: 'Fizyka' },
        { icon: examPNG, title: 'Matura' },
    ]

    return (
        <div className='side-popularbets-container'>
            <h5>Popularne</h5>
            {popularbets.map((popularbet, index) => (
                <div className='popularbet-over' key={index}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className='side-popularbet'>
                            <img src={popularbet.icon} alt='popular bet icon' />
                            {popularbet.title}
                        </div>
                        <i className='fa-sharp fa-solid fa-arrow-right'></i>
                    </div>

                    <div className='popularbet-hr'>
                        <hr className='side-hr' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SidePopularBets
