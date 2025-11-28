import { Router } from "express";

const homeController = Router();

homeController.get('/', (rec, res) => {
    res.render('home', { pageTitle: 'Home' });
});

export default homeController;