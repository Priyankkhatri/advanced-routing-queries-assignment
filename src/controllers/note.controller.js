const Note = require("../models/note.model");

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    const note = await Note.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

const createBulkNotes = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "notes array is required and cannot be empty",
        data: null,
      });
    }

    const createdNotes = await Note.insertMany(notes);

    return res.status(201).json({
      success: true,
      message: `${createdNotes.length} notes created successfully`,
      data: createdNotes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = {
  createNote,
  createBulkNotes,
};
