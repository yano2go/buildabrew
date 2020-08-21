const React = require("react");
class New extends React.Component {
     render() {
       return (
         <div>
           <h1>enter build equipment here</h1>
           <form action="/brew" method="POST">
             Brand: <input type="text" name="Brand" />
             <br />
             batchSize: <input type="text" name="Batch size" />
             <br />
             Material: <input type= "text" name= "Material"/>
             Price: <input type= "text" name="price" />
             <input type="submit" name="" value="add too build" />
             
           </form>
         </div>
       );
     }
   }
   
   module.exports = New;