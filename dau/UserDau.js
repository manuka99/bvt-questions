const User = require("../schemas/UserSchema");

exports.SaveData = async (data) => {
  const result = await User.create(data);
  return result;
};

exports.FetchAll = async () => {
  const result = await User.find();
  return result;
};
