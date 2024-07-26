import React from 'react'
import LandingPage from '../LandingPage'
import Logo from '../Landing/Logo'
import Services from './Services'
import Destination from './Destination'
import TravelingPoint from './TravelingPoint'
import OfferServices from './OfferServices'
import Testimonials from './Testimonials'
import ContactForm from './ContactForm'
import Footer from '../../Layout/Footer'

const Landing = () => {
    return (
        <div>
            <LandingPage />
            <Logo />
            <Services />
            <Destination />
            <TravelingPoint />
            <OfferServices />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Landing