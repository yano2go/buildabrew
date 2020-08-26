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
                <h3>If you're looking to dive into the world of homebrewing you've come to the right place with this website you will gain the knowledge and ability to put together your first home brewery! Starts by clicking a tab that you are confused about or if you don't know where to start click the "brewing process" tab1</h3>
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