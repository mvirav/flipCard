const FlipCard = React.createClass({
    getInitialState(){
        return { flipped: false }
    },

    classToggle () {
        this.setState({
            flipped: !this.state.flipped
        });
    },

    render() {
        return (
            <div
                className={`flip-wrapper ${this.state.flipped ? "flipped" : ""}`}
                onClick={this.classToggle}
            >
                <img
                    className="flip-image"
                    src={this.props.imageSrc}
                    alt={this.props.imageAlt}/>
            </div>
        );
    }
});

ReactDOM.render(
    <FlipCard
        imageSrc="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg"
        imageAlt="flip card"/>,
    document.getElementById('root')
)