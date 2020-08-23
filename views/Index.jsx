const React = require('react');

class Index extends React.Component {
    render() {
        const { brew } = this.props
        return(
            
            <div>
                <h1>welcome to build a brew</h1>
                <nav>
                    <a href="/brew/new">make your first build</a>

                </nav>
                    
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
                                    equipment type: {Brew.equipmentType}<br/>

                                    <form action={`/brew/${Brew._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                        <a href={`/brew/${Brew._id}/edit`}>Edit</a>
                                        <a href={`/brew/${Brew._id}`}>Show</a>
                                    </form> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
           
        )
    }
}

module.exports = Index;