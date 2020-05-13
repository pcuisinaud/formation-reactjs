class CounterComponent extends React.Component
{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            counter: 0
        };
    }

    onClick() {
        let newCount = (this.state.counter + 1) % 10;
        // this.props.message = 'Hello'; // Ca marche mais faut pas car dans d'autres situations ça ne marchera pas
        this.setState({
            counter: newCount
        });
    }

    render() {
        return e("button", {
            onClick: () => this.onClick()
        }, this.props.message + ' ' + this.state.counter);
    }
}