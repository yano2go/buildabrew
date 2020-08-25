const React = require('react');
const Default = require('./Default');

class MashTuns extends React.Component {
  render() {
    return (
      <Default>

        <div>
          <h1>What You Need To Know About Mash Tuns</h1>
          </div>
          <div>
       
        <h6>the following information is from brewwiki.com</h6>
        <h5>

          A mash tun (pronounced as mash ton)is a vessel used in the mashing process to convert the starches in crushed grains into sugars for fermentation. Most mash tuns are insulated to maintain a constant temperature and most have a false bottom and spigot so that the sparging process can be done in the same vessel. <br />
          <br />
          <br />
The Gott Beverage Mash Tun
False bottom inside a mash cooler
Arguably the most popular mash tun in use by homebrewers is a converted 5 gallon or 10 gallon Gott-style' drink cooler. Gott is the Rubbermaid brand name, but there are many others who make the same style of drink cooler. This is a cylindrical, insulated drink cooler of the style you often see poured over the heads of coaches at the end of US football games. The original cooler has a valve at the bottom for pouring the drinks out. This type of cooler is ideal for infusion mashing where hot water is added to the grains, and the cooler is then sealed to maintain a constant temperature during the conversion process. A cooler will typically only lose a degree or two (F) during the hour long mashing process. The simplicity of infusion mashing in a Gott cooler makes it a favorite with brewers. <br />
          <br />

To convert a cooler for use in brewing, one removes the valve at the bottom by unscrewing it. Next you will need a false bottom, which is nothing more than some kind of screen to hold the grains in place and still allow liquid to flow out during sparging. A popular item is Phil's Phalse Bottom - available from most homebrew shops in various sizes- which is a plastic circular screen that is slightly domed with a threaded elbow in the middle to allow the sweet liquid to flow. Run some appropriately sized hose from the false bottom, through a stopper sized for the hole made by your old valve, and out the bottom of the cooler. As long as everything is tightly sealed, you should be done. <br />
          <br />
Rectangular Coolers
Rectangular picnic coolers can also be used for infusion mashing, though making a false bottom can be a little more complex as you want a false bottom just about as large as the cooler. In addition their flat layout creates a shallower grain bed which can result in some loss of sparging efficiency. Some people have successfully made false bottoms by fitting together lengths of copper tubing to make a lattice at the bottom of the cooler and then cutting the tube about halfway through with a hacksaw every 1/2" or so. This lets the sweet wort flow into the tube while preventing large grain pieces from flowing into it.<br />
          <br />
Converted Kegs
Another category of mash tun in use by the homebrewer is the converted keg. Typically the top is cut off a large stainless steel keg producing a mash tun that is 15 gallons or more in size. The mash tun is then often insulated with foam, fitted with a metal false bottom and spigot, and then either a burner is used to maintain temperature or the whole tun is covered and insulated to make a very large cooler. Given the volume of these kegs, typically more advanced brewers use these systems.
<br />
          <br />

Pots and Heated Mash Tuns
If you have a controlled heat source, you can also make a mash tun from any pot large enough to hold the mash. In this case you just raise the heat on the pot, stirring as you go, until you reach your target temperature. Now you turn the heat down to maintain that temperature. The challenge is that it is difficult to maintain a steady temperature for a long time with a pot on a stove. However, commercial brewers who have temperature control systems do successfully use heated mash tuns. </h5>


          <h1>enter build equipment here</h1>
          <form action="/" method="POST">
            brand: <input type="text" name="brand" />
            <br />
             batchSize: <input type="text" name="batchSize" />
            <br />
             material: <input type="text" name="material" />
             price: <input type="text" name="price" />
             mashTunType: <input type="text" name="mashTunType" />
            <br />
            <input type="submit" name="" value="add to build" />

          </form>
       

          </div>
      </Default>

    )
  }
}

module.exports = MashTuns;