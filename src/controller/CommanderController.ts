import { Request, Response } from "express";
import Commander from "../model/Commander";
import { errorResponse, successResponse } from "../utils/response";

class CommanderController {
  async index(req: Request, res: Response) {
    try {
      const results = await Commander.find();

      if (!results || results.length === 0) {
        return res.status(404).json(errorResponse("No Data Found"));
      }

      res.status(200).json(successResponse("Succesfully Get Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { id, name, category, avatar, abilities, price } = req.body;

      const results = await Commander.create({
        id,
        name,
        category,
        avatar,
        abilities,
        price,
      });

      res
        .status(201)
        .json(successResponse("Successfully Created Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Create Data Error"));
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const results = await Commander.findOne({ id: parseInt(id) });

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

      const results = await Commander.findOneAndUpdate(
        { id: id },
        { $set: updateData },
        { new: true }
      );

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Updated Data", results));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Update Data Error"));
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const results = await Commander.findOneAndDelete({ id: id });

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

      const results = await Commander.find({
        name: { $regex: decodedName, $options: "i" },
      });

      if (!results || results.length === 0) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Name"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Get Data by Name", results));
    } catch (error) {
      res.status(500).json(errorResponse("Get Data By Name Error"));
    }
  }

  async findByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const results = await Commander.find({
        category: { $regex: `\\b${category}\\b`, $options: "i" },
      });

      if (!results || results.length === 0) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Category"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Get Data by Category", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data By Category Error"));
    }
  }
}

export default new CommanderController();
