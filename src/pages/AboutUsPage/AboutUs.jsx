import './aboutUs.css'
import cart from './images/lucrezia-carnelos-wQ9VuP_Njr4-unsplash.jpg'

const AboutUs = () => {
    return (
        <div>
            <section className="about">
                <div className="about-content">
                    <img src={cart} alt="aboutUs" />
                    <div className="about-text">
                        <h1>درباره ی ما</h1>
                        <h5>طراح & توسعه دهنده</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio omnis tempore fugiat labore quis eius eum error soluta magni! Harum provident maiores adipisci nostrum soluta eos corrupti itaque facere numquam.</p>
                        {/* <button type='button' className='about-btn'>hire me</button> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
