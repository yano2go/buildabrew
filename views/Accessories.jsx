const React = require('react');
const Default = require('./Default');

class Accessories extends React.Component {
    render() {
        return(
            <Default>
            

            <div>
                <h1>Additional Must Haves!</h1>

                For brewing beer you will need additional products to successfully brew. Mandatory items include bottles, caps, a capping device, 5 ounces of sugar, defoamer dropper, thermometer irish moss and most importantly, sanitizer. <br />
                Non mandatory but highly reccomended items include, a wort chiller, a stiring device, an additional brew bucket, a brush to clean bottles, fermentation chamber, and a regulator for the chamber.  
                <div>
                <h1>enter build equipment here</h1>
           <form action="/brew" method="POST">
             brand: <input type="text" name="brand" />
             <br />
             batchSize: <input type="text" name="batchSize" />
             <br />
             material: <input type= "text" name= "material"/>
             price: <input type= "text" name="price" />
             accessoryType: <input type= "text" name= "accessoryType" />
             additionalAccessory: <input type= "text" name= "additionalAccessory" />
             <br />
             thirdAccessory: <input type= "text" name= "thirdAccessory" /> s
             <input type="submit" name="" value="add to build" />
             
           </form>
         </div>
                

                
            </div>
            </Default>
           
        )
    }
}

module.exports = Accessories;