var express = require('express');
var router = express.Router();

router.get('/:date', function(req, res) {
    const dateReg = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
    const unixReg = new RegExp(/^\d{10}\d*$/);
    var date = req.params.date;

    if (dateReg.test(date)) {
        
        var dateFormatted = new Date (date).toUTCString();
        res.send({
            unix: new Date(date).getTime(),
            utc: dateFormatted
        })

    } else if (unixReg.test(date)) {

        var unixTimestamp = req.params.date;
        var dateU = new Date (parseInt(unixTimestamp)).toUTCString();

        res.send({
            unix: unixTimestamp, 
            utc: dateU
        });
    } else {
        let err = { error : "Invalid Date" };
        res.send(JSON.stringify(err))
    }

})
module.exports = router