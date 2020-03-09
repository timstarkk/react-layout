import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="TIM STARK" subtitle="Full-Stack Developer">
                    <Link smooth to="#projects" className="btn btn-primary">view projects</Link>
                </Banner>
            </Hero>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
