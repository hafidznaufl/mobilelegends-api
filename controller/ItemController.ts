import { Request, Response } from "express";
import Item from "../model/Item";
import { successResponse, errorResponse } from "../utils/response";

class ItemController {
  async index(req: Request, res: Response) {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Item.find();

      res
        .status(200)
        .json(successResponse("Successfully Get Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
=======
      const item = await Item.find();
=======
      const results = await Item.find();
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

<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Item.create({
=======
      const item = await Item.create({
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
      const results = await Item.create({
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
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
<<<<<<< HEAD
<<<<<<< HEAD
        .status(201)
        .json(successResponse("Successfully Create Data", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Create Data Error"));
=======
        .status(200)
        .json(successResponse(true, "Successfully Create Data", item));
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
      const results = await Item.findOne({ id: parseInt(id) });

      if (!results) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Id"));
=======
      const item = await Item.findOne({ id: parseInt(id) });
=======
      const results = await Item.findOne({ id: parseInt(id) });
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
        .json(successResponse(true, "Successfully Get Data by Id", item));
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

      const updatedItem = await Item.findOneAndUpdate(
        { id: id },
        { $set: updateData },
        { new: true }
      );

      if (!updatedItem) {
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
        .json(successResponse("Successfully Updated Data", updatedItem));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Update Data Error"));
=======
        .json(successResponse(true, "Successfully Updated Data", updatedItem));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse(false, "Update Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Updated Data", updatedItem));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Update Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedItem = await Item.findOneAndDelete({ id: id });

      if (!deletedItem) {
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
        .json(successResponse("Successfully Deleted Data", deletedItem));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Delete Data Error"));
=======
        .json(successResponse(true, "Successfully Deleted Data", deletedItem));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse(false, "Delete Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Deleted Data", deletedItem));
    } catch (error) {
      console.error(error);
      res.status(500).json(errorResponse("Delete Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }

  async findByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const decodedName = decodeURIComponent(name.replace(/-/g, " "));

<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Item.find({
        name: { $regex: decodedName, $options: "i" },
      });

      if (!results || results.length === 0) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Name"));
=======
      const item = await Item.find({
=======
      const results = await Item.find({
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
        name: { $regex: decodedName, $options: "i" },
      });

      if (!results || results.length === 0) {
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
        .json(successResponse(true, "Successfully Get Data by Name", item));
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

  async findByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
<<<<<<< HEAD
<<<<<<< HEAD
      const results = await Item.find({
        category: { $regex: category, $options: "i" },
      });

      if (!results || results.length === 0) {
        return res
          .status(404)
          .json(errorResponse("No Data Found For The Given Category"));
=======
      const item = await Item.find({
=======
      const results = await Item.find({
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
        category: { $regex: category, $options: "i" },
      });

      if (!results || results.length === 0) {
        return res
          .status(404)
<<<<<<< HEAD
          .json(errorResponse(false, "No Data Found For The Given Category"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
          .json(errorResponse("No Data Found For The Given Category"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      }

      res
        .status(200)
<<<<<<< HEAD
<<<<<<< HEAD
        .json(successResponse("Successfully Get Data by Category", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
=======
        .json(successResponse(true, "Successfully Get Data by Category", item));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse(false, "Get Data Error"));
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
        .json(successResponse("Successfully Get Data by Category", results));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Get Data Error"));
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
    }
  }
}

export default new ItemController();
