import React from "react"

const ServicesMainSection = ()  => (
    <section className='services-main-section'>
        <div className='wrapper'>
            <div className='container'>
                <h2>Usługi i cennik</h2>

                <div className='content'>
                    <div className='price-list'>
                        <p>Strzyżenie<span className='price yellow-bold'>35zł</span></p>
                        <p>Strzyżenie maszynką<span className='price yellow-bold'>20zł</span></p>
                        <p>Strzyżenie brody<span className='price yellow-bold'>30zł</span></p>
                        <p>Stylizacja fryzury<span className='price yellow-bold'>20zł</span></p>
                        <p>Strzyżenie dziecka<span className='price yellow-bold'>25zł</span></p>
                    </div>
                    <div className='special-offer'>
                        <p className='title'>Specjalna oferta<span className='yellow-bold'> tata+syn</span></p>
                        <p className='description'>
                            Zapraszamy ojców z synami na wspólne wizyty u nas.
                            Strzyżenie dziecka będzie kosztować wtedy jedyne
                            <span className='yellow-bold'> 15zł</span>
                        </p>
                    </div>
                </div>

            </div>
         </div>
    </section>
)

export default ServicesMainSection