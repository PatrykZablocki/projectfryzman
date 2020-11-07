import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/Layout/Layout'
import {PrimaryButton} from '../components/Buttons/Button'

import '../styles/404.scss'

const NotFoundPage = ()  => (
    <Layout>
        <section className='not-found-page-section'>

            <div className='container'>
                <span className='big-number'>404</span>
                <h3>Strony nie znaleziono</h3>
                <Link to='/' className='link'>
                    <PrimaryButton>Strona główna</PrimaryButton>
                </Link>
            </div>

        </section>
    </Layout>
)

export default NotFoundPage