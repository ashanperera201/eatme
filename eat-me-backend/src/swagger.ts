import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'EAT ME BACKEND',
            version: '1.0.0',
            description: 'Eat me docs',
        },
    },
    apis: ['./api/routes/*.ts'], 
};


export const specs = swaggerJsdoc(options);