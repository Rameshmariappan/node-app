exports.errorPage = (req, res, next) => {
    res
      .status(404)
      .render("404", { title: "404", PageTitle: "No contennt available" });
  }