import "reflect-metadata";
import express from "express";


const main = async () => {
    const app = express();

    app.listen(4000, () => console.log('server is started'));
}

main();
