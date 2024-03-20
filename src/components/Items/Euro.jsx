import React from 'react';

function Euros({ item }) {
        const euro = item.price * 1.1;
    
    
        return (
            <div>
                <p type="number">€{euro.toFixed(2)}</p>
            </div>
        );
}
export default Euros;