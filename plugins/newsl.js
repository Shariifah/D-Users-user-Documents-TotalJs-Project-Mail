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
            
        }
    })
})