import {config} from 'dotenv';

config();

export default {
    PORT: process.env.PORT || 4000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/local' //conexion IPV4
}


