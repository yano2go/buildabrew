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
                                    batchSize: {Brew.batchSize}<br />
                                    material: {Brew.material}<br />
                                    price: {Brew.price}<br />
                                    equipmentType: {Brew.equipmentType}<br/>

                                    <form action={`/brew/${Brew._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
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