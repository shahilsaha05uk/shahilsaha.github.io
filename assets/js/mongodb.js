const {MongoClient} = require('mongodb');

async function main()
{
    const uri = "mongodb+srv://shahilsaha05uk:<Staffs-05>@codicide.gmtvxiz.mongodb.net/?retryWrites=true&w=majority&appName=Codicide";
    
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
    }
    catch (e){
        console.error(e);
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);