const e = React.createElement;
class SwitchComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
    }

    onClick() {
        this.setState({
            on: !this.state.on
        });
    }

    render() {
        var txt = this.state.on ? "ON" : "OFF";
        return e("button", {
            onClick: () => this.onClick()
        }, txt);
    }
}