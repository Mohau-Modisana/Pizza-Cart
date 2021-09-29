let express = require('express');
let app = express();
const exphbs  = require('express-handlebars');

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.get("/", function(req, res){
    res.render('home');
  });
  
  let PORT = process.env.PORT || 3007;
  
  app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });