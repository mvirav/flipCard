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
        imageSrc="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg"
        imageAlt="flip card"/>,
    document.getElementById('root')
)