const validEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
const validVideo = (video) => {
  const isValidVideo = video.mimetype.startsWith("video/");
  if (!isValidVideo) {
    return false;
  }
  return true;
};

const validImage = (image) => {
  const isValidImage = image.mimetype.startsWith("image/");
  if (!isValidImage) {
    return false;
  }
  return true;
};
const validPassword = (password) => {};

module.exports = { validEmail, validImage, validPassword, validVideo };
