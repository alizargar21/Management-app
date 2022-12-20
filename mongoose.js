

const Trans = require("./models/Transactions");


const createTrans = async (req, res, next) => {
  const createTrans = new Trans({
    title: req.body.title,
    amount : req.body.amount,
    date : req.body.date,
    type : req.body.type,
    tags : req.body.tags,
    createdAt : req.body.createdAt,
    description : req.body.description
  });
  const result = await createTrans.save();
  res.json(result);
};
const getTrans =async (req , res , next ) => {
  const trans =  await Trans.find().exec();
res.json(trans)
}
exports.createTrans = createTrans;
exports.getTrans = getTrans;