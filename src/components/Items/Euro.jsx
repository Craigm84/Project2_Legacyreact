function Euros({ price }) {
    const euro = price * 1.3;


    return (
        <div>
            <p type="text">${euro.toFixed(2)}</p>
        </div>
    );
}
export default Euros;