import amaron from "../../assets/amaron.png"
import exide from "../../assets/exide.png"
import luminous from "../../assets/luminous.png"
import powerzone from "../../assets/powerzone.png"
import microtek from "../../assets/microtek.png"

const Brands = () => {
  return (
    <div className="brands">
        <div className="container">
            <h1 className="underlined-text"> Brands We Deal In</h1>
            <div className="brands-box-container">
                <img src={amaron} alt="amaron" />
                <img src={exide} alt="exide" />
                <img src={powerzone} alt="powerzone" />
                <img src={luminous} alt="luminous" />
                <img src={microtek} alt="microtek" />
            </div>
        </div>
    </div>
  )
}

export default Brands