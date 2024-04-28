import bestPrices from "../../assets/bestPrices.png"
import salesService from "../../assets/salesService.png"
import goodStaff from "../../assets/goodStaff.png"



const WhyChooseUs = () => {
  return (
    <section className="features">
        <div className="container">
            <h1>Why choose magnet battery?</h1>
            <div className="features-container">

                <div className="feature-box">
                    <img src={bestPrices} alt="bestPrices" />
                    <div className="feature-text">
                        <h1>best Prices</h1>
                        <p>WE ALWAYS PROVIDE OUR CUSTOMERS WITH BEST POSSIBLE PRICES AND YEAR-ROUND  VARIETY OF DISCOUNTS AND OFFERS</p>
                    </div>
                </div>

                <div className="feature-box">
                    <img src={salesService} alt="bestPrices" />
                    <div className="feature-text">
                        <h1>BEST AFTER SALE SERVICES</h1>
                        <p>CUSTOMER IS THE KING, THE THE PRINCIPLE WE ABIDE OURSELVES BY AND THAT’S WHY WE PROVIDE OUR CUSTOMERS WITH BEST AFTER SALE SERVCIES TO ENSURE MAXIMUM SATISFACTION</p>
                    </div>
                </div>
                
                <div className="feature-box">
                    <img src={goodStaff} alt="bestPrices" />
                    <div className="feature-text">
                        <h1>WELL TRAINED STAFF</h1>
                        <p>OUR STAFF IS EQUIPPED WITH PROPER KNOWLEDGE AND TRAINING TO HELP OUR CUSTOMERS CHOOSE THE BEST POSSIBLE OPTION FOR THEIR NEED AND DEMAND</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs