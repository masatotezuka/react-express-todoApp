const ValidationTodoItemForm = (req, res, next) => {
  const todoTitle = req.body[0].title;
  if (todoTitle === "") {
    return res.sendStatus(400);
  } else {
    next();
  }
};

module.exports = ValidationTodoItemForm;
