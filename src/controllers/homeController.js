import { Router } from "express";

const homeController = Router();

homeController.get('/', (rec, res) => {
    res.send('It Works | Home Controller')
});

export default homeController;