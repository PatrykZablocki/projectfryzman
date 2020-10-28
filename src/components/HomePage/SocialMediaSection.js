import React from "react"

import FacebookIcon from '../../images/facebook-icon.svg'
import InstagramIcon from '../../images/instagram-icon.svg'

const SocialMediaSection = ()  => (
    <section id='social-media-section' className='social-media-section' >
        <div className='container'>

            <div className='wrapper'>
                <h2>Odwiedź nasze portale społecznościowe</h2>
                <p>Umieszczamy tam efekty naszej pracy oraz informujemy o specjalnych promocjach na nasze usługi.</p>
                <div className='social-media-links'>
                    <a href='https://www.facebook.com/' className='link link--facebook'>
                        <span>
                            Facebook
                        </span>
                        <FacebookIcon className='icon' />
                    </a>
                    <a href='https://www.instagram.com/' className='link link--instagram'>
                        <span>
                            Instagram
                        </span>
                        <InstagramIcon className='icon' />
                    </a>
                </div>
            </div>

        </div>
    </section>
)

export default SocialMediaSection



