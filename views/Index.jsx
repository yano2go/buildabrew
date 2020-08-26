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

                <h3>Use this website as a guide to build your very first home brewery! Start by clicking a topic you want to learn more about or if you're lost click the brewing process tab!</h3>
                <img id="store" src= "https://images.squarespace-cdn.com/content/v1/56eb44e7a3360c45493cd1ff/1468180051141-RBMQ2JX2DROHQ60V1FTB/ke17ZwdGBToddI8pDm48kDRipwOq3v44bTldlIoZZ-97gQa3H78H3Y0txjaiv_0fQZQHeq0CwZe2fIqUUdZnbwVtqe4SbB55k1DuUOwTBBmXgeHCFdeoz64T3if0EP9-eoqS5JAWrnb1436X_b_yVRx0TKp4jCW7sB_BGURRbuWR-qnQeGSdU98--sqBiP7esVwk1m85ElTBgxmdvCq-Kw/IMG_20160708_153902121.jpg"></img>


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