const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { brew } = this.props
        return(
            <Default>
            
            <div>
                <h1>welcome to build a brew</h1>
                <nav>
                    

                </nav>
                <h3>Lets build your first brew! </h3>

                <ul>
                    {
                        brew.map((Brew)=>{
                            return (
                                <li>
                                    <a href={`brew/${Brew._id}`}></a>       
                                    brand: {Brew.brand}<br />
                                    batch size: {Brew.batchSize}<br />
                                    material: {Brew.material}<br />
                                    price: {Brew.price}<br />
                                    fermenter type: {Brew.fermenterType}
                                    <br/>
                                    brew kettle type: {Brew.brewKettleType} <br/>
                                    mash tun type: {Brew.brewKettleType} <br/>
                                    accessory type: {Brew.accessoryType} <br/>
                                    additional accessory: {Brew.additionalAccessory} <br/>
                                    third accessory: {Brew.thirdAccessory} <br/>

                                    <form action={`/${Brew._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                        <a href={`/${Brew._id}/edit`}>Edit</a>
                                        <a href={`/${Brew._id}`}>Show</a>
                                    </form> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
           
        )
    }
}

module.exports = Index;