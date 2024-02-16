import path from "path";

export const swaggerOptions = {
    swaggerDefinition : {
        openapi: '3.0.0',
        info: {
            title: 'API SuperHero',
            version: '1.0.0',
            description: 'Documentation de l\' API SuperHero',
        },
        servers :[
            {
                url: 'http://localhost:3001',
                description: 'server local'
            }
        ]
    },
    apis: [path.resolve(__dirname, './controllers/*.ts')]
}