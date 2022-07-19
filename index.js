// imports
 const express =  require("express") ;
 const path = require("path") ;
 const renderFile = require("ejs")  

// api config
app = express()
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.engine("html",renderFile.renderFile)
app.use( express.static( __dirname + '/views' ));
let port = process.env.PORT || 3000



// video share link previewer
app.get("/preview",(req,res)=>{
    res.render("index.html",{cid : req.query.cid})
})

// listens to requests on the given port
app.listen(port,()=>{
    console.log(`listening on port ${port} !!`);
})
