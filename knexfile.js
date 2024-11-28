import knex from 'knex'

const pg = knex({
    client:'pg',
    connection: {
        host: 'localhost',
        user:'postgres1212',
        password:'12121212',
        port:5432,
        database:'users'
    },
    
})

export default pg