NEWSCHEMA('Subscribers',function (schema) {
    schema.action('subscribe', {
        name: 'Subcribe to newsletters',
        input: '*email:String',
        action: function($, model) {
            model.dtcreated = NOW;
            DATA.find('nosql/subscirb').where('email', model.email).callback(function(err, res) {
                if (res.length) {
                    $.invalid('@(This email is already exist)');
                } else {
                    DATA.insert('nosql/subscrib',{email: model.email}).callback(function() {
                        console.log(`New subscription:${model.email}`);
                        $.success('@(Subscription successful)');
                    });
                }
            });
        }
    });
    schema.action('unsubcribe', {
        name: 'Unsubcribe for Newsletters',
        input: '*email:String',
        action: function($, model) {
            DATA.remove('nosql/subscrib').where('email', model.email).callback(function(err, count) {
                if (count) {
                    console.log(`Unsubscribed: ${model.email}`);
                    $.success('@(You have been unsubscribed)');
                } else{
                    $.invalid('@(Email not found)');
                }
            });
        }
    });
    schema.action('List', {
        name: 'List subscribers',
        action: function($) {
            DATA.find('nosql/subscrib').callback(function(err, res) {
                console.log('Listing all subscibers');
                $.callback(res);
            });
        }
    })
})