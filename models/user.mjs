import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  accountnumber: {
    type: Number,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

//signup method

userSchema.statics.signup = async function (userName, email, password,phonenumber,accountnumber,type) {
  const exists = await this.findOne({ userName });
  if (exists) {
    throw Error("User Name already in use.");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    userName,
    type,
    phonenumber,
    accountnumber,
    email,
    password: hash,
  });
  return user;
};

//login method

userSchema.statics.login = async function (userName, password) {
  if ((!userName, !password)) {
    throw Error("User Name and Password is Required");
  }

  //finding user in database
  const user = await this.findOne({ userName });
  if (!user) {
    throw Error("Incorrect user name");
  }

  //compairing password

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return Error("Incorrect password");
  }
  return user;
};

const User = mongoose.model("Users", userSchema);

export default User;
