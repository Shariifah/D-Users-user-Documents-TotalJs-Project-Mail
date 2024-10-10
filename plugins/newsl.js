NEWSCHEMA('Newsletters',function(schema) {
    schema.action('send', {
        name: 'Send Newsletters',
        input: '*subject:String, *body:String',
        action: async function($, model) {
            const subscribers = await Data.find('nosql/subscirb').promise();
            if (!subscribers.length) {
                $.invalid('@(No subscribers found)');
                return;
            }
            console.log(`Sending newsletters to ${subscribers.length} subscribers`);
            subscribers.forEach(subscriber=> {
                console.log(`Sending newsletters to ${subscriber.email}`);
                console.log('Subject:',model.subject);
                console.log('Body:', model.body);
            });
            console.log('Newsletters successfully sent to all subscribers');
            $.success('@(Newsletters sent successfully)');
            
        }
    });
});