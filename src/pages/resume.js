import React, { useEffect } from 'react'
import './../styles/resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Head(){
    useEffect(() => {
        document.body.classList.add('resumebody');
        document.documentElement.style.fontSize = '1vw';
        return () => {
            document.body.classList.remove('resumebody') ;
            document.documentElement.style.fontSize = '16px';
        };}, []);

    return (  <header id='resumehead'>
        <div id="resumeintro">
            <h1 id='title'>Pranay Deep Rungta, PhD</h1>
            <h2 id='titletag'>Data Scientist</h2>
            <p> Data scientist with 5+ years of industry experience in building scalable machine learning models end to end. Looking for opportunities to leverage my mathematical and computational skills to solve problems in the realm of data science.
            </p>
        </div>
        <img id='resumephoto' src="/Pranay.jpg" alt='PranayPranayPranayPranay'/>
        <ul id="resumecontact">
            <li> pranay.rungta@gmail.com <FontAwesomeIcon
                 icon={faEnvelope} /> </li>
            <li> (+91) 8968306277 / 9815083858 <FontAwesomeIcon
                 icon={faMapMarkerAlt} /> </li>
            <li> Bangalore, India <FontAwesomeIcon
                 icon={faMobile} /> </li>
            <li> <a href="https://www.linkedin.com/in/pranay-rungta/"
                    target="_blank" rel="noopener noreferrer" className='resumelink'>
                    pranay-rungta</a> <FontAwesomeIcon
                 icon={faLinkedin} /> </li>
            <li> <a href="https://github.com/pranayrungta"
                    target="_blank" rel="noopener noreferrer" className='resumelink'>
                    pranayrungta</a> <FontAwesomeIcon
                 icon={faGithub}/> </li>
        </ul>
    </header>
  )

}

export default function resume() {
  return (<div id="resumecontent">
  <Head/>
  <hr id='hline'/>

  <section id="resumemain">
      <div id="resumecolm1">
          <h3 className='subhead'> INDUSTRY EXPERIENCE </h3>

          <div className="exp"><h4 className='exphead'>Data Scientist III at Inmobi</h4>
              <div className="resumeventen">
                  <div className="resumeven">Bangalore</div>
                  <div className="resumeten">08/2024 - present</div>
              </div>
              <p id='resumep'> I am working on improving the ML models for deals KPI.  </p>
          </div>
          <div className="exp"><h4 className='exphead'>Lead Data Scientist at Freshworks</h4>
              <div className="resumeventen">
                  <div className="resumeven">Bangalore</div>
                  <div className="resumeten">08/2022 - 07/2024</div>
              </div>
              <p id='resumep'> I was leading the analytics team of three data scientists responsible for building backend of forecasting engine for multiple metrics: namely ticket count, resolution time and response time. I also worked as an individual contributor on the "AI first" project that aims to build NLP engine for all customer interaction concerned with analytics. In this project we built services that enables customers to interact with Freshworks products in natural language using LLM(like chatGPT).
              I also developed the core engine for root cause analysis for multiple insights (e.g. spike in ticket count) that used history data and machine learning to generate a tree to localise the reason behind an anomaly.
              </p>
          </div>
          <div className="exp"><h4 className='exphead'>Data Scientist at Exxonmobil</h4>
              <div className="resumeventen">
                  <div className="resumeven">PSN, Bangalore</div>
                  <div className="resumeten">12/2020 - 08/2022</div>
              </div>
              <p id='resumep'> I worked on problems in upstream operations, building machine learning models that lead to significant reduction in operational expenses. I worked on three projects as the major contributor: Dilbit blending, green house gas emission reduction, modelling of Kearl recovery. I also lead the team of three data scientists and  mentored them over following projects: optimization of net operating hours of vehicles, remaining useful life estimation of Knifegate, and Kearl flotation project.
              </p>
          </div>
          <div className="exp"><h4 className='exphead'>Data Scientist at GE Healthcare</h4>
              <div className="resumeventen">
                  <div className="resumeven">JFWTC, Bangalore</div>
                  <div className="resumeten">10/2018 - 12/2020</div>
              </div>
              <p id='resumep'> <ul className='resumeul'>
                      <li> Predictive analytics of medical imaging device
                          (collimator in CT scanner, RF coil in MRI scanner).  </li>
                      <li> Parts Recommendation: Model for personalized recommendation to
                          customers for purchase of CT Parts based on their history. </li>
                      <li> Preventive maintenance: Prediction of the failed component of medical
                          imaging systems (CT scan, MRI, and others). </li>
                      <li> Reliability analysis: Prediction of average number of
                          failures of a CT component, and Remaining useful life. </li>
                  </ul>
                  <p> Techniques used: TF-IDF, logistic regression, principal component analysis, collaborative filtering, singular value decomposition, k-means clustering, decision tree, logistic regression, fuzzy logic, Reliability analysis
                  </p>
              </p>
          </div>
          <div className="exp"><h4 className='exphead'>Data Scientist at dishq</h4>
              <div className="resumeventen">
                  <div className="resumeven">Bangalore</div>
                  <div className="resumeten">07/2018 - 09/2018</div>
              </div>
              <p> Built ML model to classify recipe text into different attributes.
                  Technique used: voting classifier, part of speech tagging, logistic regression,
                  TF-IDF, regular expressions, conditional random field.
              </p>
          </div>
      </div>

      <div id="resumecolm2">
          <div><h3 className='subhead'>EDUCATION</h3>
          <ul className='resumeul'>
              <li>Ph. D. in Physics (Non-linear dynamics and chaos)
                  <div className="resumeventen">
                      <div className="resumeven">IISER Mohali</div>
                      <div className="resumeten">2015 - July 2018</div>
                  </div>
                  Thesis title: Synchronization in Networks of Bistable Systems
              </li>
              <li>Integrated BS/MS (Physics, CPI: 8.5)
                  <div className="resumeventen">
                      <div className="resumeven">IISER Mohali</div>
                      <div className="resumeten">2010 - 2015</div>
                  </div>
              </li>
          </ul>
          </div>
          <div><h3 className='subhead'>AWARDS/ DISTINCTIONS</h3>
          <ul className='resumeul'>
              <li> a.Game Finalist, Exxonmobil (2021) </li>
              <li> Best Digital/AI Project  (GEHC Technology Award 2019) </li>
              <li> INSPIRE Scholarship (2010-2015) </li>
              <li> IIT-JEE (2010) - Merit list </li>
          </ul>
          </div>
          <div><h3 className='subhead'>RESEARCH PUBLICATIONS</h3>
          <ul className='resumeul'>
              <li> EPL, 112 6 (2015) 60004 </li>
              <li> EPL, 117 2 (2017) 20003 </li>
              <li> Phys. Rev. E 98 (2018) 022314 </li>
              <li> PLOS One 12(8): e0183251 </li>
          </ul>
          </div>
          <div><h3 className='subhead'>KEY SKILLS</h3>
          <ul className='resumeul'>
              <li> Probability, Statistics, Machine Learning, NLP, Algorithms and Data structures,
                   LLD and HLD of machine learning models</li>
              <li> Python(10+ years: sklearn, pyspark, pandas, matplotlib, NumPy,
                   SciPy, networkX, pyQt5), C++11(5 years), SQL, Latex, CUDA, Java
                   Haskell, MATLAB, html, css, javascript</li>
              <li> Git, docker, Kubernetes, AWS, Azure</li>
              <li> Differential equations, Linear Algebra, Math Methods for Numerical computation,
                   Multivariable calculus</li>
              <li> Experience with Agile methodology</li>
          </ul>
          </div>
          <div><h3 className='subhead'>OTHER ACADEMIC EXPERIENCES</h3>
          <ul className='resumeul'>
              <li>Development of python library(05/2014 - 04/2018) for Linear regression, Statistical analysis, ETL pipelines, Interpolation, data visualization, GNUplot script generation</li>
              <li>Teaching Assistant (IISER  Mohali: 2016-2017)</li>
              <li>Summer school at IUCAA (Radio Astronomy - POS 2013), Winter school at NCRA
              (Ooty Radio Telescope-RAWS 2013), Summer project at BARC (IAS fellowship 2012).</li>
          </ul>
          </div>
      </div>
  </section>
  </div>)
}
