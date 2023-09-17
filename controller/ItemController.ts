import { Request, Response } from "express";
import Item from "../model/Item";
import { successResponse, errorResponse } from "../utils/response";

class ItemController {
  async index(req: Request, res: Response) {
    try {
      const results = await Item.find();

      res.status(200).json(successResponse("Successfully Get Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
    }
  }

  async store(req: Request, res: Response) {
    try {
      const {
        id,
        name,
        category,
        effect,
        picture,
        unique_passive,
        unique_attribute,
        active_skill,
        price,
        _storyId,
      } = req.body;

      const results = await Item.create({
        id,
        name,
        category,
        effect,
        picture,
        unique_passive,
        unique_attribute,
        active_skill,
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
      const results = await Item.findOne({ id: parseInt(id) });

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

      const updatedItem = await Item.findOneAndUpdate(
        { id: id },
        { $set: updateData },
        { new: true }
      );

      if (!updatedItem) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
      }

      res
        .status(200)
        .json(successResponse("Successfully Updated Data", updatedItem));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Update Data Error"));
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const results = await Item.findOneAndDelete({ id: id });

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
      const decodedName = decodeURIComponent(name.replace(/-/g, " "));

      const results = await Item.find({
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
      res.status(500).json(errorResponse("Get Data Error"));
    }
  }

  async findByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const results = await Item.find({
        category: { $regex: category, $options: "i" },
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
      res.status(500).json(errorResponse("Get Data Error"));
    }
  }
}

export default new ItemController();
