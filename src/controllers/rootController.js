export const homeController = (req, res) => {
  console.log(req.session);
  res.status(200).render('index.ejs');
};
