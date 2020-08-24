const React = require('react');
const Default = require('./Default');

class MashTuns extends React.Component {
    render() {
        return(
            <Default>
            
            <div>
                <h1>What You Need To Know About Mash Tuns</h1>
              </div>
              <div>
                <h1>enter build equipment here</h1>
           <form action="/brew" method="POST">
             brand: <input type="text" name="brand" />
             <br />
             batchSize: <input type="text" name="batchSize" />
             <br />
             material: <input type= "text" name= "material"/>
             price: <input type= "text" name="price" />
             equipmentType: <input type= "text" name= "equipmentType" />
             <br />
             <input type="submit" name="" value="add to build" />
             
           </form>
         </div>
            </Default>
           
        )
    }
}

module.exports = MashTuns;