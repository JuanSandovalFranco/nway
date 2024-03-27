export const createDocument = (Model) => async (req, res) => {
  const objectModel = await Model.create(req.body);
  res.status(201).json({
    status: "success",
    data: { objectModel },
  });
};
