const pages = require("gh-pages");

pages.publish(
  `${__dirname}/../build`,
  {
    branch: "pages",
  },
  (err) => console.log(err ?? "Successfully published to github pages")
);
