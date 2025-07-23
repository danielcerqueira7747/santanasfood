import HeroSection from '../layout/HeroSection/HeroSection'
import CTASection from '../layout/CTASection/CTASection'
import ProductSection from '../layout/ProductSection/ProductSection'

import Location from '../layout/Location/Location'
import ButtonWhatsapp from '../components/ButtonWhatsapp/ButtonWhatsapp'

export default function Home(){

    return (

        <>

            <HeroSection />
            <ProductSection />
            <Location />
            <CTASection />

            <ButtonWhatsapp />
        
        </>

    )

}