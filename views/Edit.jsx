const React = require("react");

class Edit extends React.Component {
  render() {
    const { _id, Brand, batchSize, Material, Price } = this.props.brews;
    return (
      <div>
        <h1>Edit Page</h1>
        <form action={`/brew/${_id}?_method=PUT`} method="POST">
          Brand: <input type="text" name="Brand" defaultValue={Brand} /> <br />
          Batch size: <input type="text" name="batch size" defaultValue={batchSize} /> <br />
          Material: <input type="text" name="Material" defaultValue={Material} /> <br />
          Price: <input type="text" name="Price" defaultValue={Price} /> <br />
          
          <input type="submit" name="" value="Submit Changes" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;