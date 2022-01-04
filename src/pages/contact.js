import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'




function contact() {


    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact details provided below:</h1>

            <ul>
                <li>Cell no: 082 318 3089</li>
                <li>Email: dawidjacoba@gmail.com</li>
                <li>Check out my <a href="https://www.linkedin.com/in/dawid-jacobs-ab16011a2/" target="_blank" rel="noreferrer">Linkedin</a> profile!</li>

            </ul>

        </Layout>
    )
}

export default contact
