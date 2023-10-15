import express from "express";
import { Router } from "express";
import { authenticateToken } from "../middleware/auth";
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
router.get("/hero/:id", HeroController.show);
router.get("/hero/name/:name", HeroController.findByName);
router.get("/hero/role/:role", HeroController.findByRole);
router.post("/hero", authenticateToken, HeroController.store);
router.patch("/hero/:id", authenticateToken, HeroController.update);
router.delete("/hero/:id", authenticateToken, HeroController.destroy);

/**
 * Item Endpoints
 */
router.get("/item", ItemController.index);
router.get("/item/:id", ItemController.show);
router.get("/item/name/:name", ItemController.findByName);
router.get("/item/category/:category", ItemController.findByCategory);
router.post("/item", authenticateToken, ItemController.store);
router.patch("/item/:id", authenticateToken, ItemController.update);
router.delete("/item/:id", authenticateToken, ItemController.destroy);

/**
 * Commander Endpoints
 */
router.get("/commander", CommanderController.index);
router.get("/commander/:id", CommanderController.show);
router.get("/commander/name/:name", CommanderController.findByName);
router.get("/commander/category/:category", CommanderController.findByCategory);
router.post("/commander", authenticateToken, CommanderController.store);
router.patch("/commander/:id", authenticateToken, CommanderController.update);
router.delete("/commander/:id", authenticateToken, CommanderController.destroy);

export default router;
