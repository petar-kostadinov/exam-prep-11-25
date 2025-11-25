import { Router } from "express";

const homeController = Router();

homeController.get('/', (rec, res) => {
    res.render('home');
});

export default homeController;