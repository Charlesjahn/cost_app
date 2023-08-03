// mongodb+srv://charlesjahn:Yugi2023@charlesprojects.c2meqws.mongodb.net/

const { MongoClient } = require('mongodb')

async function main() {

    const uri = "mongodb+srv://charlesjahn:Yugi2023@charlesprojects.c2meqws.mongodb.net/"
    const client = new MongoClient(uri);
    try{

        await client.connect()
        await listDatabases(client)
    }catch(e){
        console.log(e)
    }finally{
        await client.close();
    }

}
main().catch(console.log)

async function  listDatabases(client){
    const listDatabases = await client.db().admin().listDatabases()

    console.log("DataBase: ")
    listDatabases.databases.forEach(db => {
        console.log(`- ${db.name}`)
        
    });

}