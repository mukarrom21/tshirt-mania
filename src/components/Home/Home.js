import React from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {tshirts.length}
                <Tshirt></Tshirt>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;