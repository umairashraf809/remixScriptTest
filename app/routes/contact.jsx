import Navbar from '../component/Navbar';
import '../styles/global.css';

const Contact = () => {
    console.log('ContactContactContact');

    return (
        <>
            <Navbar />
            <div className='header container'>
                <h1>Contact Us Page</h1>
                <section id="contact" className="contact">
                    <p>If you have any questions, feel free to reach out to us.</p>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>

                <div>
                    <h1>Services</h1>
                    <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='OTTOimag'>
                        <img src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
                    </div>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Example select</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Example multiple select</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact