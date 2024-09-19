NEWSCHEMA('Mail', function (schema) {
    schema.action('send', {
        name: 'Send mail',
        params: 'id:String, username:String',
        input: '*to:String, *subject:String, *body:String',
        action: function ($, model) {
            var id = $.params.id;
            var username = $.params.username;
            model.dtcreated = NOW;
            if (!model.to || !model.subject || !model.body) {
                $.invalid('@(All fields are required)');
                return;
            }
            console.log(`Simulated email sent by Id: ${id}, Username: ${username}`);
            console.log('Simulated email sent to:', model.to);
            console.log('Subject:', model.subject)
            console.log('Body:', model.body);
            console.log('Date sent:', model.dtcreated);

            $.success('@(Email sent successfully)');
        }
    });
});