const mongoose = require('mongoose');
function dbserver(){
    mongoose.connect(
        "mongodb://localhost:27017/FlipkartClone",   
    ).then((db) => {console.log("Database Connected..");
    });
}
dbserver();
