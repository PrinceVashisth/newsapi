const Scheme = require('../models/Schemes');
const router = require('express').Router();

router.post('/create', async(req, res) => {
  const newDocument =await new Scheme({
    state:req.body.state,
    SchemeLink:req.body.SchemeLink,
    district:req.body.district,
    Crop:req.body.crop,
    income:req.body.income,
    CentralScheme:req.body.CentralScheme,
  });

    await newDocument.save();
  res.send("Data insert Sucessfully");
});

// fetch all schemes that are related to them
router.get('/:state/:district/:crop/:area/:income', async (req, res) => {
  try {
    const { state, district, crop, area, income } = req.params;

    // Build the query object
    const query = {
      state: state,
      district: { $in: [district] },
      Crop: { $in: [crop] },
      $and: [{ Area: { $lte: area } }],
      $and: [{ income: { $gte: income } }]
    };
    // Find all matching documents
    const documents = await Scheme.find(query);
    
    res.status(200).json(documents);
  } catch (err) {
    // Handle error
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;