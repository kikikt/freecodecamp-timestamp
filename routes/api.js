var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        unix: parseInt(new Date().getTime()),
        utc: new Date().toUTCString()
    })
})

router.get('/:date', function(req, res) {
    const dateReg = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
    const unixReg = new RegExp(/^\d{10}\d*$/);
    var date = req.params.date;

    if (dateReg.test(date)) {
        
        var dateFormatted = new Date (date).toUTCString();
        res.json({
            unix: parseInt(new Date(date).getTime()),
            utc: dateFormatted
        })

    } else if (unixReg.test(date)) {

        var unixTimestamp = req.params.date;
        var dateU = new Date (parseInt(unixTimestamp)).toUTCString();

        res.json({
            unix: parseInt(unixTimestamp), 
            utc: dateU
        });
    } else {
        let err = { error : "Invalid Date" };
        res.json(err)
    }

})
module.exports = router