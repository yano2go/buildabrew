const React = require("react");
const Default = require('./Default');
class Blog extends React.Component {
    render() {
        return (
            <Default>
            <div>
                    <h1>HERE IS MY SETUP AND DESCRIPTION!</h1>
                    <img id="myferment" src="https://i.imgur.com/SXV8SUp.jpg" alt="fermenter"/>

                    <img id="mybrew" src="https://i.imgur.com/ZIhNw4y.jpg" alt="grainfather"/>
               <h3> 
                    OK you're probably thinking, "the guy who makes this website probably likes to brew beer but what does his set up look like?" I currently have and all electric, bluetooth connected all in one brewing system called the grainfather. The grainfather is a very high end system that I highly reccomend to anyone that likes brewing enough to shell out $1,200 for it. As for the fermenter I am using an SS brewtech 7 gallon stainless steel unitank. this fermenter is nicer than most breweries fermenters just smaller. it has a glycol chiller coil inside and a heating system to keep tempurater set during fermentation. it also can carbonate beer in one day compared to other homebrew systems that take 2 weeks. I cannot emphasize enough though that you absolutely do not need a fermenter or a brewing system like this AT ALL and can make great beer with a kettle and a fermentation bucket or if you want something else thats nicer I would reccomend the catalyst fermenter which I also use. 
               </h3>
            </div>
            </Default>
        );
    }
}

module.exports = Blog;