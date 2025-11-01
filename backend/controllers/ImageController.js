import Image from "../models/Image.js";
import BoardImage from "../models/BoardImage.js";
import { v4 as uuidv4 } from "uuid";

export const getImagesByBoard = async (req, res) => {
  try {
    const { boardId } = req.params;
    const links = await BoardImage.find({ boardId });
    const ids = links.map((l) => l.imageId);
    const images = await Image.find({ imageId: { $in: ids } });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//post
export const uploadImage = async (req, res) => {
  try {
    const { imageName, imageDescription, boardId, userId = "u1" } = req.body;
    //was file uploaded?
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    //was boardId provided?
    if (!boardId) {
      return res.status(400).json({ message: "boardId is required" });
    }

    //generate id for image
    const imageId = uuidv4();

    //url where file will be accessible
    const imageUrl = `/uploads/${req.file.filename}`;

    const imageDoc = new Image({
      imageId,
      imageName,
      imageUrl,
      imageDescription,
      userId,
    });
    const savedImage=await imageDoc.save();

    //link image to board
    const boardImageDoc=new BoardImage({
        boardImageId: uuidv4(),
        boardId, 
        imageId
    });

    await boardImageDoc.save();
    res.status(201).json(savedImage);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
