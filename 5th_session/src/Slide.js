function Slide(props) {
    return (
        <div>
            <img src={props.imgSrc} alt="img" />
            <div className="info">
                <div className="title">
                    <p className="dest">{props.dest}</p>
                    <p className="rate">{props.rate}<i class="fas fa-star"></i></p>
                </div>
                <div className="detail">
                    <p className="dist">{props.dist}</p>
                    <p className="date">{props.date}</p>
                </div>
                <p className="cost">{props.cost} /박</p>
            </div>
        </div>

    );
}

export default Slide;