const React = require('react');
const Default = require('./Default');

class Fermenters extends React.Component {
    render() {
        return(
            <Default>
            
            <div>
                <h1>ITS ALIVE! The Basics of Fermentation</h1>
                <div>
                <h6>the following information came from byo.com</h6>
                <h5>As a homebrewer, the selection of different fermenters is pretty astounding. You can buy a fermenter for as little as $10, but a homebrewer can easily spend over $1,000 (USD) on a fermentation system. One thing to always remember for those getting into the hobby is that some homebrewers make award-winning beer using nothing more than a plastic bucket to ferment their beers. It’s all in knowing the strengths and limitations of each system and how to properly use them.<br />
                <br />
Bucket (Plastic or Stainless)
Most homebrewers begin with food-grade plastic buckets when they start out the hobby . . . and for good reasons. They are nearly an ideal primary fermenter: Easy to clean, graduated to measure volume, easy to modify (e.g. a spigot can easily be added for simple gravity racking), nesting allows them to be space-saver friendly, fermenter additions are easy (e.g. dry hopping), and most of all — they’re economical. But make sure you are purchasing food-grade plastic — don’t go down to the local big box hardware store for a plastic bucket. For just a few dollars more, get them from your homebrew shop. <br />

<br />
The downside to plastic buckets is just how much of your beer is exposed to air. This means you should not leave your beer in a bucket for long. If you keep your beer in a plastic bucket for an extended time, oxygen will diffuse into the bucket through both the lid’s seam and its walls. Four weeks in my experience would be the maximum I would ever think about keeping a beer in bucket (I’ve done it when life has gotten in my way with only minor hints of degradation), while 2–3 weeks is normally my max time, 1–2 weeks is ideal. <br />
<br />
Stainless steel buckets are an upgrade some homebrewers make, most notable for those who may be plastic-phobic or to lessen oxygen diffusion. If you want to step up to a stainless fermenter, a bucket would generally be more economical than a conical. Stainless buckets have the same benefits as plastic, but they do have a large air-to-beer contact area. Also, you do lose the ability to nest the buckets together if storage space is limited. Typically stainless buckets already come equipped with a spigot for easy racking. If you’re willing to spend some extra money on stainless, these are a great option. <br />

<br />
Carboy (Glass or Plastic)
Glass carboys used to be very popular in the homebrew world, but their popularity has declined for a number of reasons — safety sitting at the top of that list. For this reason alone, I don’t typically advise anyone purchasing new fermenters to buy glass with the exception being brewers who store their beer long-term, like 6 months+ long-term. If you are going to use glass carboys, a couple things to always keep in mind: Always handle empty glass carboys with two hands, always wear long (preferably thick) pants and closed-toe shoes (boots preferably) when handling, never pick a carboy up by the neck, and never handle while drinking alcohol.
I don’t typically advise anyone purchasing new fermenters to buy glass with the exception being brewers who store their beer long-term . . . <br />
<br />
For standard-length storage of beer, plastic carboys fit the bill. The only disadvantage compared to glass carboys would be some diffusion of oxygen through the plastic. This diffusion may be fine for a style like an imperial stout, barleywine, or wild fermented, funky beer, but could be detrimental in a style like a Märzen. Also of note, carboys, whether glass or plastic, filled to the neck, will minimize your beer’s exposure to air. When lagering say a Vienna lager or Pilsner, be sure the liquid level is into the carboy neck. One downside for carboys is cleaning, but a soak of the carboy inverted for 12–24 hours is the best way to remove caked-on residue after primary fermentation. There are wide-mouth plastic carboys available that are a nice compromise between carboys and buckets in this department (air exposure vs. ease of cleaning). <br />
<br />
Conical (Plastic or Stainless)
Generally, conicals are seen as the premier choice for discerning homebrewers, but there are some negatives to them as well . . . mainly they can be harder to clean and often require more space. Conicals come in a lot of different styles and material compositions depending on your budget and what your goals are. The ability to dump trub before fermentation starts and the ability to harvest yeast in a closed environment after fermentation is complete, are generally cited as the two big benefits of this style of fermenter. Also the ability to recirculate cleaner solution from the bottom to a spray valve on the top can be a nice feature for those with a pump. Some of the stainless steel conicals can be pressurized as well, allowing carbonation of the beer to occur in the fermenter. Add-ons such as a sample port, sanitary fittings, and glycol-ready jacketing can be added to higher-end models, but expect to pay a higher price tag for these features.<br />
<br />
<br />
Corny kegs (Stainless)
Some of the best features of all the previous fermenters can be replicated in a corny keg. The only modification typically required is adjusting the dip tube so as not to pick up the sediment when transferring and some form of pressure relief. I personally use a plastic bucket for primary then transfer to a corny keg for secondary for 90% of my brews. Corny kegs can be a homebrewer’s best friend, and I for one recommend them.

</h5>
            <h1>enter build equipment here</h1>
           <form action="/" method="POST">
             brand: <input type="text" name="brand" />
             <br />
             batch size: <input type="text" name="batchSize" />
             <br />
             material: <input type= "text" name= "material"/>
             price: <input type= "text" name="price" />
             fermenter type: <input type= "text" name= "fermenterType" />
             <br />
             <input type="submit" name="" value="add to build" />
             
           </form>
         </div>
                

                
            </div>
            </Default>
           
        )
    }
}

module.exports = Fermenters;