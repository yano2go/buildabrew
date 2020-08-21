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
                                    <a href={`/brew/${Brew._id}`}></a>
                                    Brand: {Brew.Brand}<br />
                                    batchSize: {Brew.batchSize}<br />
                                    Material: {Brew.Material}<br />
                                    Price: {Brew.Price}<br />

                                    <form action={`/brew/${brew._id}?_method=DELETE`} method="POST">
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