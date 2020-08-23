const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
            
        
        const { brand, batchSize, material, price, equipmentType } = this.props.brew;
        return (
            <Default>
            <div>
                <h1 id="test">Build Show Page</h1>
                <p>The specs of your build are</p> 
                <p>{brand}</p>,
                <p>{batchSize}</p>, 
                <p>{material}</p>, 
                <p>{price}</p>, 
                <p>{equipmentType}</p>
                <a href="/brew">go back to your build</a>
            </div>
            </Default>
        )
    }
}

module.exports = Show;