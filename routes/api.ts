import express from "express";
import { Router } from "express";
import HeroController from "../controller/HeroController";
import ItemController from "../controller/ItemController";
import CommanderController from "../controller/CommanderController";

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
router.put("/hero/:id", HeroController.update);
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

export default router;
