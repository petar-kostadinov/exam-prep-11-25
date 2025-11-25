import { Router } from "express";

const homeController = Router();

homeController.get('/', (rec, res) => {
    res.render('home', { layout: false });
});

export default homeController;