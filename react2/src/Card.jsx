import me from './assets/me.png';

function Card() {
    return (
        <div className="card">
            <img alt="Eshaan's photo" src={me} />
            <h2 className="card.Header">Eshaan</h2>
            <p className="card.desc">My name is Eshaan and I study Software Engineering at YorkU</p>
        </div>
    );
}

export default Card;
