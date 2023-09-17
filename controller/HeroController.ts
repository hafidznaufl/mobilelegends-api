import { Request, Response } from "express";
import Hero from "../model/Hero";
import { successResponse, errorResponse } from "../utils/response";

class HeroController {
  async index(req: Request, res: Response) {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      const results = await Hero.find();

      if (!results) {
        return res.status(404).json(errorResponse("No Data Found"));
      }
<<<<<<< HEAD

      res
        .status(200)
        .json(successResponse("Successfully Get Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
=======
      const hero = await Hero.find();
=======
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)

      res
        .status(200)
        .json(successResponse("Successfully Get Data", results));
    } catch (error) {
      console.log(error);
<<<<<<< HEAD
      res.status(500).json(errorResponse(false, "Get Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
      res.status(500).json(errorResponse("Get Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { id, name, role, special, avatar, abilities, price, _storyId } =
        req.body;
<<<<<<< HEAD
<<<<<<< HEAD
        
      const results = await Hero.create({
=======
      const hero = await Hero.create({
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        
      const results = await Hero.create({
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
        id,
        name,
        role,
        special,
        avatar,
        abilities,
        price,
        _storyId,
      });

      res
<<<<<<< HEAD
<<<<<<< HEAD
        .status(201)
        .json(successResponse("Successfully Create Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Create Data Error"));
=======
        .status(200)
        .json(successResponse(true, "Successfully Create Data", hero));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse(false, "Create Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .status(201)
        .json(successResponse("Successfully Create Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Create Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Hero.findOne({ id: parseInt(id) });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
=======
      const hero = await Hero.findOne({ id: parseInt(id) });
=======
      const results = await Hero.findOne({ id: parseInt(id) });
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)

      if (!results) {
        return res
          .status(404)
<<<<<<< HEAD
          .json(errorResponse(false, "No Data Found For The Given Id"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
          .json(errorResponse("No Data Found For The Given Id"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      }

      res
        .status(200)
<<<<<<< HEAD
<<<<<<< HEAD
        .json(successResponse("Successfully Get Data by Id", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data By Id Error"));
=======
        .json(successResponse(true, "Successfully Get Data by Id", hero));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse(false, "Get Data By Id Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Get Data by Id", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data By Id Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData = req.body;

<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Hero.findOneAndUpdate(
=======
      const updatedHero = await Hero.findOneAndUpdate(
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
      const results = await Hero.findOneAndUpdate(
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
        { id: id },
        { $set: updateData },
        { new: true }
      );

<<<<<<< HEAD
<<<<<<< HEAD
      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
=======
      if (!updatedHero) {
        return res
          .status(404)
          .json(errorResponse(false, "No Data Found For The Given Id"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      }

      res
        .status(200)
<<<<<<< HEAD
<<<<<<< HEAD
        .json(successResponse("Successfully Updated Data", results));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Update Data Error"));
=======
        .json(successResponse(true, "Successfully Updated Data", updatedHero));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse(false, "Update Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Updated Data", results));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Update Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedHero = await Hero.findOneAndDelete({ id: id });

      if (!deletedHero) {
        return res
          .status(404)
<<<<<<< HEAD
<<<<<<< HEAD
          .json(errorResponse("No Data Found For The Given Id"));
=======
          .json(errorResponse(false, "No Data Found For The Given Id"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
          .json(errorResponse("No Data Found For The Given Id"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      }

      res
        .status(200)
<<<<<<< HEAD
<<<<<<< HEAD
        .json(successResponse("Successfully Deleted Data", deletedHero));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Delete Data Error"));
=======
        .json(successResponse(true, "Successfully Deleted Data", deletedHero));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse(false, "Delete Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Deleted Data", deletedHero));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Delete Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async findByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const decodedName = decodeURIComponent(name.replace(/\+/g, " "));

<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Hero.find({
        name: { $regex: decodedName, $options: "i" },
      });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Name"));
=======
      const hero = await Hero.find({
=======
      const results = await Hero.find({
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
        name: { $regex: decodedName, $options: "i" },
      });

      if (!results) {
        return res
          .status(404)
<<<<<<< HEAD
          .json(errorResponse(false, "No Data Found For The Given Name"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
          .json(errorResponse("No Data Found For The Given Name"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      }

      res
        .status(200)
<<<<<<< HEAD
<<<<<<< HEAD
        .json(successResponse("Successfully Get Data by Name", results));
    } catch (error) {
      res.status(500).json(errorResponse("Get Data Error"));
=======
        .json(successResponse(true, "Successfully Get Data by Name", hero));
    } catch (error) {
      res.status(500).json(errorResponse(false, "Get Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Get Data by Name", results));
    } catch (error) {
      res.status(500).json(errorResponse("Get Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async findByRole(req: Request, res: Response) {
    try {
      const { role } = req.params;
<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Hero.find({
        role: { $regex: `\\b${role}\\b`, $options: "i" },
      });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Role"));
=======
      const hero = await Hero.find({
=======
      const results = await Hero.find({
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
        role: { $regex: `\\b${role}\\b`, $options: "i" },
      });

      if (!results) {
        return res
          .status(404)
<<<<<<< HEAD
          .json(errorResponse(false, "No Data Found For The Given Role"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
          .json(errorResponse("No Data Found For The Given Role"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      }

      res
        .status(200)
<<<<<<< HEAD
<<<<<<< HEAD
        .json(successResponse("Successfully Get Data by Role", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
=======
        .json(successResponse(true, "Successfully Get Data by Role", hero));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse(false, "Get Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Get Data by Role", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }
}

export default new HeroController();
