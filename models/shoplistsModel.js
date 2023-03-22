const pool = require("../config/database");

class ShopList {
    constructor(id,idUser,name,dateCreated,dateDue) {
        this.id = id;
        this.idUser = idUser;
        this.name = name;
        this.dateCreated = dateCreated;
        this.dateDue = dateDue;
    }
    export(){
        let sl = new ShopList();
        sl.id = this.id;
        sl.name = this.name;
        sl.dateCreated = this.dateCreated;
        sl.dateDue = this.dateDue;
        return sl;        
    }

    // We consider that the user is authenticated
    static async getUserShoplists(userId) {
        try {
            let dbResult = await pool.query("Select * from shoplist where shl_usr_id = $1", [userId]);
            let dbShoplists = dbResult.rows;
            let shoplists = [];
            for (let dbsl of dbShoplists) {
                shoplists.push(new ShopList(dbsl.shl_id,dbsl.shl_usr_id,
                                dbsl.shl_name,dbsl.shl_created,dbsl.shl_due));
            }
            return {status:200, result: shoplists};

        } catch (err) {
            console.log(err);
            return {status: 500, result: {msg: "Something went wrong."}};
        }
    }
}

module.exports = ShopList;