import express from "express";
import { Router } from "express"; 
import HeroController from "../controller/HeroController"; 
import ItemController from "../controller/ItemController"; 
<<<<<<< HEAD
<<<<<<< HEAD
import CommanderController from "../controller/CommanderController";
=======
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
import CommanderController from "../controller/CommanderController";
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)

const router: Router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Mobile Legends API");
});

/**
 * Hero Endpoints
 */
router.get("/hero", HeroController.index);
router.post("/hero", HeroController.store);
router.get("/hero/:id", HeroController.show);
router.patch("/hero/:id", HeroController.update);
<<<<<<< HEAD
<<<<<<< HEAD
router.put("/hero/:id", HeroController.update);
=======
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
router.put("/hero/:id", HeroController.update);
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
router.delete("/hero/:id", HeroController.destroy);
router.get("/hero/name/:name", HeroController.findByName);
router.get("/hero/role/:role", HeroController.findByRole);

/**
 * Item Endpoints
 */
router.get("/item", ItemController.index);
router.post("/item", ItemController.store);
router.get("/item/:id", ItemController.show);
router.patch("/item/:id", ItemController.update);
router.delete("/item/:id", ItemController.destroy);
router.get("/item/name/:name", ItemController.findByName);
router.get("/item/category/:category", ItemController.findByCategory);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
/**
 * Commander Endpoints 
 */ 
router.get("/commander", CommanderController.index);
router.post("/commander", CommanderController.store);
router.get("/commander/:id", CommanderController.show);
router.patch("/commander/:id", CommanderController.update);
router.delete("/commander/:id", CommanderController.destroy);
router.get("/commander/name/:name", CommanderController.findByName);
router.get("/commander/category/:category", CommanderController.findByCategory);

<<<<<<< HEAD
=======
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
export default router;
