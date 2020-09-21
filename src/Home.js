import React from 'react';
import AmazonPrimeVideoLogo from './img/amazon-prime_video.jpg';
import './Home.css';
import Product from './Product';
import Product1 from './img/product1.jpg';
import Product2 from './img/product2.jpg';
import Product3 from './img/product3.jpg';
import Product4 from './img/product4.jpg';
import Product5 from './img/product5.jpg';
import Product6 from './img/product6.jpg';


function Home() {
    return (
        <div className="home">
            <img className="home__image" src={AmazonPrimeVideoLogo} alt="Amazon Prime Video"/>
            {/* Product id, title, rating, image */}
            <div className="home__row">
            <Product
                id="1232134"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.69}
                rating={5} 
                image={Product6}
            />
            <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4} 
                image={Product1}
            />
            </div>

            <div className="home__row">
            <Product
                id="49038501"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.0}
                rating={3} 
                image={Product2}
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5} 
                image={Product3}
            />

            <Product
                id="1232341"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4} 
                image={Product4}
            />
            </div>

            <div className="home__row">
                <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4} 
                image={Product5}
            />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home