const React = require("react");
const Default = require("./Default");

class Edit extends React.Component {
  render() {
    const { _id, brand, batchSize, material, price, fermenterType, brewKettleType, mashTunType, accessoryType, additionalAccessory, thirdAccessory } = this.props.brew;
    return (
      <Default>
      <div>
        <h1>Edit Page</h1>
        <form action={`/brew/${_id}?_method=PUT`} method="POST">
          
          brand: <input type="text" name="brand" defaultValue={brand} /> <br />
          <label for  ="batchSize"> batch size</label>
         <input type="text" name="batchSize" defaultValue={batchSize} /> <br />
          material: <input type="text" name="material" defaultValue={material} /> <br />
          price: <input type="text" name="price" defaultValue={price} /> <br />
          fermenterType: <input type= "text" name="fermenterType" defaultValue={fermenterType} />
          brewKettleType: <input type= "text" name="brewKettleType" defaultValue={brewKettleType}/>
          mashTunType: <input type= "text" name= "mashTunType" defaultValue={mashTunType}/>
          accessoryType: <input type= "text" name= "accessoryType" defaultValue={accessoryType} />
          additionalAccessory: <input type= "text" name= "additionalAccessory" defaultValue={additionalAccessory}/>
          thirdAccessory: <input type= "text" name="thirdAccessory" defaultValue={thirdAccessory} />
          <input type="submit" name="" value="Submit Changes" />
        </form>
      </div>
      </Default>
    );
  }
}

module.exports = Edit;