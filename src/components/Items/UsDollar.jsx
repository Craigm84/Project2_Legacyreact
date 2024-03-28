function USD({item}) {
    const usd = item.price * 1.3;

    return (
        <div>
            <p type="number">${usd.toFixed(2)}</p>
        </div>
    );
}
export default USD;