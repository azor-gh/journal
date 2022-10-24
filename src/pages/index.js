import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './home'
import AboutUs from './aboutus'
import Activity from './activity'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Portfolio from './portfolio'
import Hooks from '../components/Hooks'
import ContactUs from './ContactUs'
import Exercise from './exercise'

const Index = () => {
  return (
    <Router>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/aboutus" element={<AboutUs/>}/>
                <Route exact path="/activity" element={<Activity/>}/>
                <Route exact path="/portfolio" element={<Portfolio/>}/>
                <Route exact path="/hooks" element={<Hooks/>}/>
                <Route exact path="/contactus" element={<ContactUs/>}/>
                <Route exact path="/exercise" element={<Exercise/>}/>
            </Routes>
            <Footer/>
    </Router>
  )
}

export default Index
