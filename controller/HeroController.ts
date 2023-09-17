import { Request, Response } from "express";
import Hero from "../model/Hero";
import { successResponse, errorResponse } from "../utils/response";

class HeroController {
  async index(req: Request, res: Response) {
    try {
      const results = await Hero.find();

      if (!results) {
        return res.status(404).json(errorResponse("No Data Found"));
      }

      res.status(200).json(successResponse("Successfully Get Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { id, name, role, special, avatar, abilities, price, _storyId } =
        req.body;

      const results = await Hero.create({
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
        .status(201)
        .json(successResponse("Successfully Create Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Create Data Error"));
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const results = await Hero.findOne({ id: parseInt(id) });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Get Data by Id", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data By Id Error"));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updatedHero = await Hero.findOneAndUpdate(
        { id: id },
        { $set: updateData },
        { new: true }
      );

      if (!updatedHero) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Updated Data", updatedHero));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Update Data Error"));
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const results = await Hero.findOneAndDelete({ id: id });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Deleted Data", results));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Delete Data Error"));
    }
  }

  async findByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const decodedName = decodeURIComponent(name.replace(/\+/g, " "));

      const results = await Hero.find({
        name: { $regex: decodedName, $options: "i" },
      });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Name"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Get Data by Name", results));
    } catch (error) {
      res.status(500).json(errorResponse("Get Data Error"));
    }
  }

  async findByRole(req: Request, res: Response) {
    try {
      const { role } = req.params;
      const results = await Hero.find({
        role: { $regex: `\\b${role}\\b`, $options: "i" },
      });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Role"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Get Data by Role", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
    }
  }
}

export default new HeroController();
