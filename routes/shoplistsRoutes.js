const express = require('express');
const router = express.Router();
const ShopList = require("../models/shoplistsModel");
const auth = require("../middleware/auth");

// Get shoplists of the authenticated user
router.get('/auth',auth.verifyAuth,  async function (req, res, next) {
    try {
        console.log("Get shoplists of the authenticated user");
        let result = await ShopList.getUserShoplists(req.user.id);
        if (result.status != 200)
            res.status(result.status).send(result.result);
        else {
            let shoplists = result.result.map((sl)=> sl.export());
            res.status(200).send(shoplists);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});




module.exports = router;