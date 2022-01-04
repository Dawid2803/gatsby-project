import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'



function about() {
    return (
        <Layout>
            <Head title="About" />
            <h1>Some extra info for those who are interested!</h1>
            <p>My name is Dawid Jacobs, I am an aspiring web developer with big goals and bigger ambition!</p>   
            <Link to="/contact">Contact me here!</Link>
        </Layout>
    )
}

export default about
