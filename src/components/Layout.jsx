import React from 'react'

export default function Layout(props) {

    const { children } = props

    const header = (
        <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50, marginBottom: '2rem', borderRadius: '0 0 1rem 1rem' }}>
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built with 💙 by <a href="https://siva19-portfolio.vercel.app/" target="_blank"> Siva Subramanian G</a><br />Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )


    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}