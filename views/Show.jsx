const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
            
        
        const {brand, batchSize, material, price, fermenterType, brewKettleType, mashTunType, accessoryType, additionalAccessory, thirdAccessory } = this.props.brew;
        return (
            <Default>
            <div>
                <h1 id="test">Build Show Page</h1>
                <h1>The specs of your build are</h1>
                <h3>{brand}</h3>,
                <h3>{batchSize}</h3>, 
                <h3>{material}</h3>, 
                <h3>{price}</h3>,
                <h3>{fermenterType}</h3>
                <h3>{brewKettleType}</h3>
                 <h3>{mashTunType}</h3>
                <h3>{accessoryType}</h3>
                <h3>{additionalAccessory}</h3>
                <h3>{thirdAccessory}</h3>
                <a href="/brew">go back to your build</a>
            </div>
            </Default>
        )
    }
}

module.exports = Show;