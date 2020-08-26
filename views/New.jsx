const React = require("react");
const Default = require('./Default');
class New extends React.Component {
     render() {
       return (
        <Default>
         <div>
           <h1>enter build equipment here</h1>
           <form>
           <form action="/" method="POST">
             brand: <input type="text" name="brand" />
             <br />
             batch size: <input type="text" name="batchSize" />
             <br />
             material: <input type= "text" name= "material"/> <br />
             price: <input type= "text" name="price" /> <br />
             fermenter type: <input type= "text" name= "fermenterType" /> <br />
             brew kettle type: <input type= "text" name= "brewKettleType" /> <br />
             mash tun type: <input type= "text" name= "mashTunType" /> <br />
             accessory type: <input type= "text" name= "accessoryType" />
             additional accessory: <input type= "text" name= "additionalAccessory" /> <br />
             third accessory: <input type= "text" name="thirdAccessory" /> <br />
             <br />
             <input type="submit" name="built" value="add to build" />
             
           </form>
           </form>
         </div>
         </Default>
       );
     }
   }
   
   module.exports = New;