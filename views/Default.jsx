const React = require('react');
class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    
                    <meta charset="utf-8"></meta>  
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
 
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
                    <link rel="stylesheet" type="text/css" href="styles.css"></link>
                    <title>Yanks Home Brew Guide</title>
                </head>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Home</a>
  <a class="navbar-brand" href="/new">Build Your First System</a>
  <a class="navbar-brand" href="/learn/kettles">Kettles</a>
  <a class="navbar-brand" href="/learn/mashtuns">Mash Tuns</a>
  <a class="navbar-brand" href="/learn/fermenters">Fermenters</a>
  <a class="navbar-brand" href="/learn/accessories">Accesssories</a>
  <a class="navbar-brand" href="/learn/brewingprocess">Brewing Process</a>
  <a class="navbar-brand" href="/learn/blog">Blog</a>
  



  
 
    
</nav>
                <body> 
                    
                    <img id= "banner" src="https://www.cohoferry.com/img/pages/FWBF-banner.jpg" class="img-fluid" alt="Responsive image"></img>
                    
                    {this.props.children}
                    <footer>
                        <h4>Created By Yankable designs</h4>
                    </footer>
                </body>
            </html>
        )
    }
}
module.exports = Default;