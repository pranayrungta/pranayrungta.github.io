import React from 'react'
import Layout from './components/Layout'
import './../styles/content.css'

export default function industry() {
    return (<Layout>
    <h1>Professional Experience</h1>
    <div className="exp"><h4>Data Scientist at Freshworks</h4>
        <div className="venten">
            <div className="ven">Bangalore</div>
            <div className="ten">08/2022 - present</div>
        </div>
        <p> I am leading the analytics team of three data scientists
            responsible for building backend of forecasting engine for
            multiple metrics: namely ticket count, resolution time and
            response time. I am also working as an individual contributor
            on the "AI first" project that aims to build NLP engine for
            all customer interaction concerned with analytics. In this
            project we are building services that enables customers to
            interact with Freshworks products in natural language
            using LLM(like chatGPT).
        </p>
    </div>
    <div className="exp"><h4>Data Scientist at Exxonmobil</h4>
        <div className="venten">
            <div className="ven">PSN, Bangalore</div>
            <div className="ten">12/2020 - 08/2022</div>
        </div>
        <p> I worked on problems in upstream operations, building machine
            learning models that lead to significant reduction in operational
            expenses. I worked on three projects as the major contributor: Dilbit
            blending, green house gas emission reduction, modelling of Kearl
            recovery. I also lead the team of three data scientists and  mentored
            them over following projects: optimization of net operating hours of
            vehicles, remaining useful life estimation of Knifegate, and
            Kearl flotation project.
        </p>
    </div>
    <div className="exp"><h4>Data Scientist at GE Healthcare</h4>
        <div className="venten">
            <div className="ven">JFWTC, Bangalore</div>
            <div className="ten">10/2018 - 12/2020</div>
        </div>
        <p> <ul>
                <li> Predictive analytics of medical imaging device
                    (collimator in CT scanner, RF coil in MRI scanner).  </li>
                <li> Parts Recommendation: Model for personalized recommendation to
                    customers for purchase of CT Parts based on their history. </li>
                <li> Preventive maintenance: Prediction of the failed component of medical
                    imaging systems (CT scan, MRI, and others). </li>
                <li> Reliability analysis: Prediction of average number of
                    failures of a CT component, and Remaining useful life. </li>
            </ul>
            <p>
                 Techniques used: TF-IDF, logistic regression, principal component analysis,
                 collaborative filtering, singular value decomposition, k-means clustering,
                 decision tree, logistic regression, fuzzy logic, Reliability analysis
            </p>
        </p>
    </div>
    <div className="exp"><h4>Data Scientist at dishq</h4>
        <div className="venten">
            <div className="ven">Bangalore</div>
            <div className="ten">07/2018 - 09/2018</div>
        </div>
        <p>
            Built ML model to classify recipe text into different attributes.
            Technique used: voting classifier, part of speech tagging, logistic regression,
            TF-IDF, regular expressions, conditional random field.
        </p>
    </div>
  </Layout>)
}
