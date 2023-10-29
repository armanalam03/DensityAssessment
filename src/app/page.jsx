"use client"

import React, {useEffect} from 'react'
import Image from 'next/image'

// GSAP
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import logo from '../assets/logos/ahead-logo.jpg'
import progressImage from '../assets/images/progress.png'
import trackImage from '../assets/images/track.png'
import signature from '../assets/images/signature.png'
import ghost from '../assets/images/ghost.png'
import mailIcon from '../assets/images/mail.png'
import locationIcon from '../assets/images/location.png'
import appleLogo from '../assets/images/apple.png'
import AppleBtn from '../assets/images/appleBtn.png'
import stars from '../assets/images/stars.png'

export default function Home() {

  useEffect(() => {

    gsap.to("#familiarText", {
      fontSize: '45px',
      transform: 'translateX(0px)',
      scrollTrigger: {
        trigger: "#firstColorDiv",
        start: 'bottom left',
        end: 'top right',
        duration: 5,
        ease: "elastic.out()"
      },
    });

    gsap.to("#meetAheadAppHeadings", {
      fontSize: '45px',
      transform: 'translateX(0px)',
      scrollTrigger: {
        trigger: "#familiarText",
        start: 'bottom left',
        end: 'top right',
        duration: 5,
        ease: "elastic.out()"
      },
    });

    gsap.to("#meetAheadAppContent", {
      fontSize: '20px',
      lineHeight: "32px",
      scrollTrigger: {
        trigger: "#familiarText",
        start: 'bottom left',
        end: 'top right',
        duration: 5,
        ease: "elastic.out()"
      },
    });
    
    gsap.to("#progress-img", {
      width: "800px",
      height: "75px",
      scrollTrigger: {
        trigger: "#progress-container",
        start: 'center center+=300px',
        end: 'center center',
        duration: 5,
        ease: "elastic.out()"
      },
    });

    gsap.to(".progress", {
      fontSize: "12px",
      scrollTrigger: {
        trigger: "#progress-container",
        start: 'center center+=300px',
        end: 'center center',
        delay: 2,
        duration: 5,
        ease: "elastic.out()"
      },
    });

    gsap.to("#track-img", {
      width: "51vw",
      height: "17vw",
      scrollTrigger: {
        trigger: "#progress-container",
        start: 'center center+=100px',
        end: 'center center',
        delay: 2,
        duration: 5,
        ease: "elastic.out()"
      },
    });

    gsap.to("#work-with-us-text", {
      transform: "translateX(0px)",
      scrollTrigger: {
        trigger: ".work-with-us-div",
        start: 'center center+=500px',
        end: 'center center',
        delay: 2,
        duration: 5,
        ease: "elastic.out()"
      },
    });

    gsap.to(".company-name", {
      transform: "translateX(0px)",
      scrollTrigger: {
        trigger: ".work-with-us-div",
        start: 'center center+=500px',
        end: 'center center',
        delay: 2,
        duration: 5,
        ease: "elastic.out()"
      },
    });

    gsap.to(".vacancies-div-heading", {
      transform: "translateX(0px)",
      opacity: 1,
      scrollTrigger: {
        trigger: ".vacancies-div",
        start: 'center center+=500px',
        end: 'center center',
        delay: 2,
        duration: 5,
        ease: "elastic.out()"
      },
    });

  }, [])

  return (
    <main className='container'>
      <nav className="navbar">
        <Image src={logo} width={50} height={50} alt='logo' className='logo' />
        <section className="nav-elements">
          <span className="nav-element">
            Emotions
          </span>
          <span className="nav-element">
            Manifesto
          </span>
          <span className="nav-element">
            Self-awareness test
          </span>
          <span className="nav-element">
            Work With Us
          </span>
        </section>
        <div className="download-btn black-btn">
          Download app
        </div>
      </nav>
      <section className='coloured-div' id='firstColorDiv'>
        <aside className='div-content'>
          <span className="app-name">
            Ahead app
          </span>
          <span className="headline">
            Master your life by mastering emotions
          </span>
          <footer className='appstore-div'>
            <div className="appstore-download-btn">
              <Image src={AppleBtn} width={120} height={''} alt='apple' className='apple-icon' />
            </div>
            <div className="ratings-div">
              <Image src={stars} width={100} height={''} alt='stars' className='stars' />
              <span className="ratings-text">
                100+ AppStore reviews
              </span>
            </div>
          </footer>
        </aside>
      </section>
      <section className="eq-beats-div no-color-div" >
        <span className="eq-beats-heading eq-beats-section">
          EQ beats IQ
        </span>
        <span className="eq-text eq-beats-section">
          People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
        </span>
        <span className="eq-text eq-beats-section">
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
        </span>
      </section>
      <section className="familiar-card-div no-color-div">
        <span className="familiar-div-heading" id='familiarText'>
          Does this sound familiar...
        </span>
        <section className='cards-container'>
          <div className="card">
            <span className="card-emoji">
              😠
            </span>
            <span className="card-heading">
              You argue with colleague
            </span>
            <span className="card-text">
              You get angry and defensive. Instead of staying open and working towards common ground.
            </span>
          </div>
          <div className="card">
            <span className="card-emoji">
              😠
            </span>
            <span className="card-heading">
              You argue with colleague
            </span>
            <span className="card-text">
              You get angry and defensive. Instead of staying open and working towards common ground.
            </span>
          </div>
          <div className="card">
            <span className="card-emoji">
              😠
            </span>
            <span className="card-heading">
              You argue with colleague
            </span>
            <span className="card-text">
              You get angry and defensive. Instead of staying open and working towards common ground.
            </span>
          </div>
          <div className="card">
            <span className="card-emoji">
              😠
            </span>
            <span className="card-heading">
              You argue with colleague
            </span>
            <span className="card-text">
              You get angry and defensive. Instead of staying open and working towards common ground.
            </span>
          </div>
        </section>
      </section>
      <section className='meet-app-div coloured-div'>
          <section className='div-headings' >
            <span className="small-heading-text">
              Built out of frustration
            </span>
            <span id="meetAheadAppHeadings">
              Meet the ahead app
            </span>
          </section>
          <section className='content-section-container'>
            <div className="section-img content-section"></div>
            <span className="div-text-content content-section" id='meetAheadAppContent'>
              A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
              <br />
              <br />
              Think of it as a pocket cheerleader towards a better, more fulfilling.
            </span>
          </section>
        </section>
      <section className="eq-beats-div no-color-div" id="progress-prev">
        <span className="eq-beats-heading eq-beats-section">
          Be the best you with EQ
        </span>
        <span className="eq-text eq-beats-section">
          Not having your own emotions under control might be holding you back.
        </span>
        <span className="eq-text eq-beats-section">
          Additionally not understanding those of other stops you from being parent, friend you can be.
        </span>
      </section>
      <section className='rate-div coloured-div'>
        <section className="headings-container">
          <span className="small-heading-text">
            Let your friends, family, and co-workers (anonymously) rate your social skills.
          </span>
          <span className="large-heading-text">
            Ever wondered what others think of you?
          </span>
        </section>
        <section className="progress-container" id='progress-container'>
          <Image src={progressImage} width={''} height={''} alt='progress' className='progress-img' id="progress-img" />
          <section className="progress-text">
            <span className="progress">
              Answer questions on your social skills
            </span>
            <span className="progress">
              Let others anonymously answer the same questions about you
            </span>
            <span className="progress">
              Find out where you and others see things the same way - and where not!
            </span>
          </section>
        </section>
        <Image src={trackImage} width={''} height={''} alt='track' className='track-img' id='track-img'/>
      </section>
      <section className="test-div coloured-div">
        <section className="headings-container">
          <span className="small-heading-text">
            We take privacy seriously
          </span>
          <span className="large-heading-text">
            Before you get started
          </span>
        </section>
        <span className="quote">
        "We won't share your answers with anyone (and won't ever tell you which friends said what about you)"
        </span>
        <span className="signature-div">
          with love, 
          <Image src={signature} width={150} height={''} alt='signature' className='signature' />
        </span>
        <div className="start-test-btn black-btn">
          Start a test
        </div>
        <span className="btn-footer-text">
          Take only 5 minutes
        </span>
      </section>
      <section className="work-with-us-div coloured-div">
        <div className="work-with-us-heading large-heading-text">
          <span id='work-with-us-text'>
            Work with us
          </span>
          <span className="company-name" id="company-name">
            ahead
          </span>
        </div>
        <section className="work-with-us-content-container">
          <aside className="about-product-container">
            <section className="about-product-section about">
              <Image src={ghost} width={40} height={50} alt='ghost' className='ghost' />
              <span className="about-product-heading">
                About
              </span>
              <span className="about-product-text">
                At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!
              </span>
            </section>
            <section className="about-product-section product">
              <span className="about-product-heading">
                Product
              </span>
              <span className="about-product-text">
                Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
              </span>
            </section>
          </aside>
          <aside className='cards-list'>
            <section className="ahead-card card">
              <span className="card-heading">
                Power through, even when the going gets tough
              </span>
              <span className="ahead-card-text card-text">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </span>
            </section>
            <section className="ahead-card card">
              <span className="card-heading">
                Power through, even when the going gets tough
              </span>
              <span className="ahead-card-text card-text">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </span>
            </section>
            <section className="ahead-card card">
              <span className="card-heading">
                Power through, even when the going gets tough
              </span>
              <span className="ahead-card-text card-text">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </span>
            </section>
            <section className="ahead-card card">
              <span className="card-heading">
                Power through, even when the going gets tough
              </span>
              <span className="ahead-card-text card-text">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </span>
            </section>
            <section className="ahead-card card">
              <span className="card-heading">
                Power through, even when the going gets tough
              </span>
              <span className="ahead-card-text card-text">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </span>
            </section>
            <section className="ahead-card card">
              <span className="card-heading">
                Power through, even when the going gets tough
              </span>
              <span className="ahead-card-text card-text">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </span>
            </section>
          </aside>
        </section>
      </section>
      <section className="vacancies-div no-color-div">
        <span className="vacancies-div-heading large-heading-text">
          Open vacancies
        </span>
        <section className="vacancies-cards-container">
          <div className="vacancies-card">
            <span className='vacancies-card-heading'>
              Senior Full-Stack Developer
            </span>
            <ul className="vacancy-specs">
              <li>
                <span className="vacancy-spec">
                  Full-time position
                </span>
              </li>
              <li>
                <span className="vacancy-spec">
                  Berlin or remote
                </span>
              </li>
              <li>
                <span className="vacancy-spec">
                  €65k-85k, 0.5-1.50% equity share options
                </span>
              </li>
            </ul>
          </div>
          <div className="vacancies-card">
            <span className='vacancies-card-heading'>
              Senior Full-Stack Developer
            </span>
            <ul className="vacancy-specs">
              <li>
                <span className="vacancy-spec">
                  Full-time position
                </span>
              </li>
              <li>
                <span className="vacancy-spec">
                  Berlin or remote
                </span>
              </li>
              <li>
                <span className="vacancy-spec">
                  €65k-85k, 0.5-1.50% equity share options
                </span>
              </li>
            </ul>
          </div>
          <div className="vacancies-card">
            <span className='vacancies-card-heading'>
              Senior Full-Stack Developer
            </span>
            <ul className="vacancy-specs">
              <li>
                <span className="vacancy-spec">
                  Full-time position
                </span>
              </li>
              <li>
                <span className="vacancy-spec">
                  Berlin or remote
                </span>
              </li>
              <li>
                <span className="vacancy-spec">
                  €65k-85k, 0.5-1.50% equity share options
                </span>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <footer className='footer no-color-div'>
        <Image src={logo} width={50} height={50} alt='logo' className='logo' />
        <span className="footer-company-name company-name">
          ahead
        </span>
        <section className="company-details-div">
          <div className="company-address company-detail">
            <Image src={locationIcon} width={30} height={30} alt='location' className='location-icon footer-icon' />
            <span className="company-address-text">
              AuguststraBe 26, 10117 Berlin
            </span>
          </div>
          <div className="mail-address company-detail">
            <Image src={mailIcon} width={30} height={30} alt='location' className='mail-icon footer-icon' />
            <span className="company-address-text">
              hi@ahead-app.com
            </span>
          </div>
        </section>
        <div className="appstore-download-btn">
          <Image src={AppleBtn} width={120} height={''} alt='apple' className='apple-icon' /> 
        </div>
        <span className="rights-text">
          @ 2022 Ahead app. All right reserved
        </span>
      </footer>
    </main> 
  )
}
