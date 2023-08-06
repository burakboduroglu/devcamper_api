const Bootcamp = require("../models/Bootcamp");

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, msg: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

// @desc Get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Private
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    res.status(200).json({
      success: true,
      msg: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err,
    });
  }
};

// @desc Create a bootcamp
// @route POST /api/v1/bootcamps/
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      msg: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error,
    });
  }
};

// @desc Update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the new data
      runValidators: true, // run the validators
    });
    res.status(200).json({ success: true, msg: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

// @desc Delete a bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};
