const ValidationTodoItemForm = (req, res, next) => {
  const todoTitle = req.body[0].title;
  if (todoTitle === "") {
    return res.sendStatus(400);
  } else {
    console.log("validation OK!");
    next();
  }
};

module.exports = ValidationTodoItemForm;
