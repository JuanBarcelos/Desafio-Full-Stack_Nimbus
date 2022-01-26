const config = {
    type: 'postgres',
    url: 'postgres://xjxbcfqcacazge:16d903047a3b022280caa6b0d1605c294aba09122c08f35b2f9b3241f56c706e@ec2-34-205-46-149.compute-1.amazonaws.com:5432/db6t79p34o01gb',
    synchronize: false,
    logging: false,
    entities: [
       './dist/entities/*.js',
    ],
    migrations:[
     "./dist/database/migrations/*.ts"
    ],
    cli:{
      migrationsDir: "./dist/database/migrations"
    },
    ssl: true,
    extra: {
       ssl: {
          'rejectUnauthorized': false,
       },
    },
 };
 
 module.exports = config;