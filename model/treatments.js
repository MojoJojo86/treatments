var mongoose = require('mongoose');
var treatmentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    hosp_num: String,
    consultant: String,
    treat_site: String,
    treat_num: Number
});

mongoose.model('Treatment', treatmentSchema);
