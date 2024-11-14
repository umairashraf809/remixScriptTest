import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from '../component/Navbar';
import '../styles/global.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="header container">
        <header>
          <h1>Welcome to Our Website</h1>

          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          <Link to="/about" className="button">Learn More</Link>
        </header>
        <div style={{ display: 'flex', marginTop: '40px', justifyContent: ' center' }}>
          <section style={{ marginRight: '5px' }}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
          </section>
          <section style={{ marginRight: '5px' }}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
          </section>
          <section style={{ marginRight: '5px' }}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
          </section>
          <section style={{ marginRight: '5px' }}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
          </section>
          <section style={{ marginRight: '5px' }}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
              </div>
            </div>
          </section>
          <section style={{ marginRight: '5px' }}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}