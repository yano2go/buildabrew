const React = require('react');

class Show extends React.Component {
    render() {
        
        const { Brand, batchSize, Material, Price } = this.props.brew;
        return (
            <div>
                <h1>Build Show Page</h1>
                <p>The specs of your build are</p> 
                <p>{Brand}</p>,
                <p> {batchSize}</p>, 
                <p> {Material}</p>, 
                <p>{Price}</p>, 
                <p>{equipmentType} </p>
            </div>
        )
    }
}

module.exports = Show;