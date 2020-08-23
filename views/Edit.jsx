const React = require("react");
const Default = require("./Default");

class Edit extends React.Component {
  render() {
    const { _id, brand, batchSize, material, price, equipmentType } = this.props.brew;
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
          <label for  ="equpiment type">equipment type</label>
          <input type="text" name="equipmentType" defaultValue={equipmentType} /> <br />
          <input type="submit" name="" value="Submit Changes" />
        </form>
      </div>
      </Default>
    );
  }
}

module.exports = Edit;