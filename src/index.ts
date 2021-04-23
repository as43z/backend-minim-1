// MAIN
// start imports
import { startConnection } from './database';
import app from './app';
// end imports

async function main() {
    // base de datos:
    startConnection();

    // PORT and BASE URI
    const PORT = app.get('PORT');
    const apiPath = app.get('apiPath');
    const baseAPI = `http://localhost:${PORT}${apiPath}`;

    // listen
    app.listen(PORT);

    console.log(`[ SERVER STARTED ] server started @ ${baseAPI}`);
}

main()