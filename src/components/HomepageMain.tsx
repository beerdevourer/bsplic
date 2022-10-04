import React from 'react'

import { MainSubheader, BetCard } from './'

import gta5PNG from '../assets/popularbets/robbery.png'
import grid2PNG from '../assets/popularbets/finish-flag.png'
import atomPNG from '../assets/popularbets/atom.png'
import dicePNG from '../assets/popularbets/dice.png'
import csgoPNG from '../assets/popularbets/shooting.png'

interface Bet {
    icon: string
    category: string
    date: string
    hour: string
    homeName: string
    awayName: string
    bet1Name: string
    home1Name: string
    away1Name: string
    home1Odds: number
    away1Odds: number
    home1Percents: number
    away1Percents: number
    isBet2: boolean
    bet2Name: string | null
    home2Name: string | null
    away2Name: string | null
    home2Odds: number | null
    away2Odds: number | null
    home2Percents: number | null
    away2Percents: number | null
}

const HomepageMain = () => {
    const bets: Bet[] = [
        {
            icon: csgoPNG,
            category: 'CS:GO IEM Road to Rio',
            date: 'Dzisiaj',
            hour: '19:45',
            homeName: 'G2 Esports',
            awayName: 'ECSTATIC',
            bet1Name: 'Zwycięzca meczu',
            home1Name: 'G2 Esports',
            away1Name: 'ECSTATIC',
            home1Odds: 1.12,
            away1Odds: 5.75,
            home1Percents: 99,
            away1Percents: 1,
            isBet2: true,
            bet2Name: 'Mapa handicap',
            home2Name: 'G2 Esports -1,5',
            away2Name: 'ECSTATIC +1,5',
            home2Odds: 3.15,
            away2Odds: 1.25,
            home2Percents: 27,
            away2Percents: 73,
        },
        {
            icon: csgoPNG,
            category: 'CS:GO IEM Road to Rio',
            date: 'Dzisiaj',
            hour: '19:45',
            homeName: 'G2 Esports',
            awayName: 'ECSTATIC',
            bet1Name: 'Zwycięzca meczu',
            home1Name: 'G2 Esports',
            away1Name: 'ECSTATIC',
            home1Odds: 1.12,
            away1Odds: 5.75,
            home1Percents: 99,
            away1Percents: 1,
            isBet2: true,
            bet2Name: 'Mapa handicap',
            home2Name: 'G2 Esports -1,5',
            away2Name: 'ECSTATIC +1,5',
            home2Odds: 3.15,
            away2Odds: 1.25,
            home2Percents: 27,
            away2Percents: 73,
        },
        {
            icon: csgoPNG,
            category: 'CS:GO IEM Road to Rio',
            date: 'Dzisiaj',
            hour: '19:45',
            homeName: 'G2 Esports',
            awayName: 'ECSTATIC',
            bet1Name: 'Zwycięzca meczu',
            home1Name: 'G2 Esports',
            away1Name: 'ECSTATIC',
            home1Odds: 1.12,
            away1Odds: 5.75,
            home1Percents: 99,
            away1Percents: 1,
            isBet2: true,
            bet2Name: 'Mapa handicap',
            home2Name: 'G2 Esports -1,5',
            away2Name: 'ECSTATIC +1,5',
            home2Odds: 3.15,
            away2Odds: 1.25,
            home2Percents: 27,
            away2Percents: 73,
        },
        {
            icon: csgoPNG,
            category: 'CS:GO IEM Road to Rio',
            date: 'Dzisiaj',
            hour: '19:45',
            homeName: 'G2 Esports',
            awayName: 'ECSTATIC',
            bet1Name: 'Zwycięzca meczu',
            home1Name: 'G2 Esports',
            away1Name: 'ECSTATIC',
            home1Odds: 1.12,
            away1Odds: 5.75,
            home1Percents: 99,
            away1Percents: 1,
            isBet2: true,
            bet2Name: 'Mapa handicap',
            home2Name: 'G2 Esports -1,5',
            away2Name: 'ECSTATIC +1,5',
            home2Odds: 3.15,
            away2Odds: 1.25,
            home2Percents: 27,
            away2Percents: 73,
        },
    ]

    return (
        <div className='homepage-main-container'>
            <MainSubheader />
            <div className='bets-container'>
                {bets.map((bet, index) => (
                    <BetCard key={index} bet={bet} />
                ))}
            </div>
        </div>
    )
}

export default HomepageMain

/* csgo bet
<CS:GO ICON> CS:GO          Zwycięzca Meczu         Over 15.5 Killa




w button-container mapujemy przyciski z tablicy Bets
button-container display flex i kazdy button ma flex: 1fr i pomiedzy nimi jest gap jakiś
*/
