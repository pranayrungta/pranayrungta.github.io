import React from 'react'
import Layout from '../components/Layout'


export default function research() {
  return (<Layout>
      <h2>Math</h2>
      <ul>
        <li> Introduction to Analysis : Arthur Mattuck </li>
        <li> Advanced Engineering Mathematics : Erwin Kreyszig </li>
      </ul>

      <br/><br/>

      <h2>Physics</h2>
      <ul>
        <li> University Physics : Young and Freedman </li>
        <li> Concepts of Physics : H.C Verma </li>
      </ul>

      <br/><br/>

      <h2>Programming</h2>
      <ul>
        <li> Programming Principles and Practice using C++ : Bjarne Stroustrup</li>
        <li> Introduction To Algorithms : Thomas H Cormen, Charles E Leiserson, Ronald L Rivest, Clifford Stein </li>
      </ul>
    </Layout>)
  }
