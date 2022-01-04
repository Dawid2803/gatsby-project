import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

function notFound404() {
    return (
        <Layout>
            <Head title="Not Found 404 Error" />
            <h1>Page not found</h1>
            <p><Link to='/'>Head Home</Link></p>
        </Layout>
    )
}

export default notFound404
