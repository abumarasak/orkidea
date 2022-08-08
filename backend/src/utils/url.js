const generateUrl = (url) => {
  return url.replace(/ /g, "-");
};
module.exports = generateUrl;
