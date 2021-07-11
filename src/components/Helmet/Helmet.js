import React from "react"
import {Helmet as ReactHelmet} from "react-helmet"

const Helmet = () => (
    <ReactHelmet htmlAttributes={{ lang: 'pl-PL' }}>
        <title>Fryzman - salon fryzjerski</title>
        <meta name='author' content='Patryk Zabłocki'/>
        <meta name="description" content="Salon fryzjerski zapewniający strzyżenie męskie i dzięcięce. Oprócz typowych dla salonu fryzjerskiego usług dotyczących strzyżenia włosów, oferujemy również usługi barberskie, czyli zadbamy też o twoją brodę." />
        <link rel="icon" href="/favicon.png" type="image/png" />
    </ReactHelmet>
)

export default Helmet
