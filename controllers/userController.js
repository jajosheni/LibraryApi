const User = require('../models/user');

module.exports = {
    //list Users
    list_users : async function(req, res, next) {
        let users = await User.find(req.query, function(err, users) {
            if (err) {
                res.send(err);
                console.log(err);
            } else
                return users;
        }).sort({username:-1});

        res.send(users);
    },

    //list user
    get_user : async function(req, res, next) {
        let username = req.params.username;

        let user = await User.findOne({username: username}, function (err, usr){
            if (err){
                res.send(err);
                console.log(err);
            } else
                return usr;
        });

        res.send(user);
    },

    login_user : async function(req, res, next) {
        let username = req.body.username;
        let password = req.body.password;

        let user = await User.findOne({username: username, password: password}, function (err, usr){
            if (err){
                res.send(err);
                console.log(err);
            } else
                return usr;
        });

        if(user===null)
            res.send('incorrect');
        else
            res.send(user);
    },

    //create new user
    create_user : async function(req, res, next) {
        let newUser;

        try{
            // user model
            newUser = User({
                username: req.body.username,
                password: req.body.password,
                fullname: req.body.fullname,
                birthday: req.body.birthday,
                bio: req.body.bio,
                telephone: req.body.telephone,
                email: req.body.email
            });
        }catch (e) {
            res.send(e);
        }

        newUser.save(function(err) {
            if (err)
                res.send(err);
            else
                res.send('true');
        });
    },

    //update user info
    update_user : async function(req, res, next) {
        User.findOneAndUpdate(
            {username: req.params.username},
            req.body,
            function(err, usr) {

                if (err)
                    res.send(err);
                else if (usr === null)
                    res.send('User doesn\'t exist');
                else
                    res.send('User Updated');

                console.log('User Updated');
            });
    },

    //delete user
    delete_user : async function(req, res, next) {
        User.deleteOne({username: req.params.username}, function (err){
            if (err)
                res.send(err);
            else
                res.send('User: ' + req.params.username + ' was deleted.');
        });
    }
};
