import React from 'react';
import NavBar from "../components/NavBar";
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';
import AppDownload from '../components/appDownload';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div> 
      <NavBar />
      <Hero />
      <JobListing />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default Home;
