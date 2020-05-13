class CounterComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }

    onClick() {
        this.setState({
            counter: (this.state.counter % 10) + 1
        });
    }

    render() {
        return e("button", {
            onClick: () => this.onClick()
        }, this.state.counter);
    }
}