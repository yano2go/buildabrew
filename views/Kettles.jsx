const React = require('react');
const Default = require('./Default');

class Kettles extends React.Component {
    render() {
        return(
            <Default>
            
            <div>
                <h1>Let's Talk About Brew Kettles!</h1>
    
            </div>
            <div>
                <h6>the following information comes from brewcabin.com </h6>
           <h5> Brew Kettle Essentials
Like just about every other piece of homebrewing equipment you’ll own, brew kettles are available in a wide range of both prices and fanciness. Top of the line or nuts-and-bolts basic, every brew kettle worth considering features a few essential components. <br />

A Test of Mettle (and Metal)
The most easily recognized trait shared by all the best brew kettles is their material: metal. We’re not ruling out the possibility of futuristic space-age plastic taking the lead one day, but for now, stainless steel and aluminum are top of the heap.  <br />
<br />
Stainless steel, specifically food-grade 304 stainless steel, is durable, corrosion-resistant, and relatively lightweight. It’s basically inert, so it also keeps its good looks over the years. <br />
<br />
Aluminum is not quite as durable as stainless steel, but it weighs less and conducts heat more efficiently. The real drawback to aluminum brew kettles is the metal’s reactivity. <br />
<br />
Aluminum reacts with caustic cleaning products, both acids and alkalis, as well as plain old oxygen. It will discolor over time. It can pit, crack, or even produce potentially dangerous gases if it comes into contact with the wrong chemicals. It might also leach into the wort during boiling without proper precautions. <br />
<br />
You can create a patina inside an aluminum brew kettle by boiling a little water in it before use. A good pre-boil creates a compound known as alumina (aluminum oxide), which will keep the metal from reacting with the air. It will also help keep it out of your wort, since most recipes aren’t acidic enough to destroy the alumina layer and expose the raw aluminum. <br />
<br />
Replenishing your aluminum brew kettle’s patina every time you boil will not only give you peace of mind, but keep unwanted flavors out of your brew.
<br />
To conquer the weaknesses of stainless steel and aluminum while taking advantage of their strengths, choose a stainless steel brew kettle with a tri-clad bottom. The “tri” refers to the three layers used. A layer of aluminum is sandwiched between two layers of steel to boost durability, remove reactivity, and improve conductivity. <br />

Brew Kettle Size Matters <br />
If you’re devoted to extracts and small batch brewing, forking over the dough for a kettle the size of a water tower just doesn’t make sense. On the other hand, if you’re all about that brew in a bag (BIAB) life, then your ma’s old soup pot probably isn’t the best brew kettle for you. <br />
<br />
Think about the homebrewing adventures you’re likely to pursue, and size your brew kettle accordingly.
<br />
5-gallon (13-liter) Batch (Extract Brewing): An 8-gallon (30 L) kettle should give you plenty of room for a full boil, with enough space to minimize boil-overs. <br />
<br />
5-gallon (13-liter) Batch (All Grain Brewing): If you’re going all-grain, you need more space to accommodate your grain bill. All grain wort tends to foam more than extract wort, so a 10-gallon (38 L) brew kettle should do the trick. And if you decide you want to do a batch of extract brew every now and then, you’ll have more than enough room. <br />

<br /> 5-gallon (13-liter) Batch (BIAB method): Forget the teapot. Big brews need big kettles, and there’s not a mash tun in sight. Since you’ll be heating your grains with enough water to cover not only your boil but your mash and sparge, a 15-gallon (57 L) kettle is for you.
<br />
Ss BrewTech Stainless Steel 15-Gallon Brew Kettle
Ss BrewTech Stainless Steel 15-Gallon Brew Kettle
$239.00
These kettles by Ss Brewing are a premium lineup of feature-rich all Stainless Steel Brew Kettles.
<br />
<br />

Tall or Small?
Like giraffes or Paul Bunyan cosplayers, brew kettles work best when they’re tall. High sides reduce evaporation loss, and help prevent boil-overs. Brew kettles are generally designed with a height-to-diameter ratio of 1.2:1. <br />
<br />

A short kettle isn’t a death sentence for your beer. But a tall kettle that also has the capacity to handle your preferred brewing style will help you avoid messy boil-overs and keep your wort in your beer instead of the air.<br/>
<br />
Turn Up the Volume (Markings)
The final essential feature of the best brew kettles is built-in volume markings. Sure, you could measure how much wort you’ve got with a yardstick and some high school geometry. But why drag math into your brew day when you can get answers at a glance?<br />
<br />
Brew kettles generally have volume indicators etched into the metal, in both gallons and liters. Quart markings, while less common, are nice if your recipes are built around that unit.</h5>
                <h1>enter build equipment here</h1>

           <form action="/" method="POST">
             brand: <input type="text" name="brand" />
             <br />
             batch size: <input type="text" name="batchSize" />
             <br />
             material: <input type= "text" name= "material"/>
             price: <input type= "text" name="price" />
             brew kettle type: <input type= "text" name= "brewKettleType" />
             <br />
             <input type="submit" name="" value="add to build" />
             
           </form>
            
            </div>
            </Default>
           
        )
    }
}

module.exports = Kettles;