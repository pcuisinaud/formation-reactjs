class CounterComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    onClick() {

        this.setState({
            counter: (this.state.counter + 1) %10
        });
    }

    render() {
        return e("button", {
            onClick: () => this.onClick()
        }, this.state.counter);
    }
}