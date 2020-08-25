const React = require("react");
const Default = require('./Default');
class New extends React.Component {
     render() {
       return (
        <Default>
         <div>
           <h1>enter build equipment here</h1>
           <form action="/" method="POST">
             brand: <input type="text" name="brand" />
             <br />
             batchSize: <input type="text" name="batchSize" />
             <br />
             material: <input type= "text" name= "material"/>
             price: <input type= "text" name="price" />
             fermenterType: <input type= "text" name= "fermenterType" />
             brewKettleType: <input type= "text" name= "brewKettleType" />
             mashTunType: <input type= "text" name= "mashTunType" />
             accessoryType: <input type= "text" name= "accessoryType" />
             additionalAccessory: <input type= "text" name= "additionalAccessory" />
             thirdAccessory: <input type= "text" name="thirdAccessory" />
             <br />
             <input type="submit" name="built" value="add to build" />
             
           </form>
         </div>
         </Default>
       );
     }
   }
   
   module.exports = New;