class CounterComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    onClick() {
        let newCount = (this.state.counter + 1) % 10;
        
        this.setState({
            counter: newCount
        });
    }

    render() {
        return e("button", {
            onClick: () => this.onClick()
        }, this.state.counter);
    }
}