import React from 'react';

const Tshirt = (props) => {
    const {name} = props.tshirt;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Tshirt;