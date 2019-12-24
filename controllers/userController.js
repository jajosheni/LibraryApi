const User = require('../models/user');

module.exports = {
    //list all Users
    list_users : async function(req, res, next) {
        res.send("List users! GET");
    },

    //list user
    get_user : async function(req, res, next) {
        res.send("get user! GET " +  req.params.user_id);
    },

    //create new user
    create_user : async function(req, res, next) {
        res.send('Create User! POST');
    },

    //update user info
    update_user : async function(req, res, next) {
        res.send('Update User! PUT ' +  req.params.user_id);
    },

    //delete user
    delete_user : async function(req, res, next) {
        res.send('Delete User! DELETE ' +  req.params.user_id);
    }
};
