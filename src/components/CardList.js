import React from 'react';
import Card from './Card';



// Create an inline style to hide overflow  
const overflow = {
    overflow: 'hidden',
    height: '100%',
    width: '100%',

}

const CardList = ({ robots }) => {
    return (
        <div style={overflow}>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;