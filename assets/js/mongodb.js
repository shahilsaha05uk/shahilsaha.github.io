const {MongoClient} = require('mongodb');

// setting up the connection
async function main()
{
    const uri = "mongodb+srv://shahilsaha05uk:Stoke-05@testcluster.yhjcfef.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";
    
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        
        await listDatabases(client);
    }
    catch (e){
        console.error(e);
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);

// getting the database
async function listDatabases(client){

}