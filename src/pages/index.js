import * as React from "react"
import Layout from "./components/Layout"
import './../styles/content.css'

export default function Home() {

  return (<Layout>
    <img id='homephoto' src="/Pranay.jpg" alt="Pranay"/>
    <h1>About Me</h1>
    <p className='just'>
        Hi,<br/>
        I am Pranay Deep Rungta, PhD in Physics(Non-linear dynamics and chaos).
        I am currently working as a data scientist at Freshworks. I have 6+ years of
        industry experience as a data scientist.
    </p>
    <p className='just'>
        I like solving difficult problems. I have extensively experience with mathematical
        modelling, statistical analysis, machine learning. I have a deep understanding of
        linear algebra, differential equations, probability, statistics, artificial Intelligence.
    </p>
  </Layout>)
}
