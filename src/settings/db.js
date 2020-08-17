const mongoose = require("mongoose");

 mongoose.connect("mongodb+srv://islam:nscspa7217@cluster0.ldxvq.azure.mongodb.net/db_app?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(data => console.log("DB is connected"))
.then(err => console.error(err));

    



