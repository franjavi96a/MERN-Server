import app from './app.js';
import config from './config.js';


const main = () => {
    app.listen(config.PORT, () => {
        console.log(`Server is running on port ${config.PORT}`);
    });
}

main();
