// components/Hat.js
class Hat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var hatClass = 'hat ' + this.props.hatType;
        return (
            <div className={hatClass}></div>
        );
    }
}
