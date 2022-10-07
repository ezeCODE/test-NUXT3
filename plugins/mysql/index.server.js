import mysql from "mysql"


export default defineNuxtPlugin(nuxtApp => {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: '',
        password: '',
        database: '',

    })

    connection.connect()


    connection.on('error', function(err) {
        console.alert("[mysql error]", err);
    })

    console.log("MYSQL PLUGINS");

    const sql = `select * from products`
    connection.query(sql, (error, result) => {

        // check the connection 
        // console.log(result);

        // REMEMBER, this mode is server side   
        //  connecting to mysql database

    })


})