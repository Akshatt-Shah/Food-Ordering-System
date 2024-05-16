import { Usercontrollers } from "../controller";
import { Router } from "express";
import { Verify, Validate } from "../middlwares";

const Uroute = Router();
Uroute.post(
  "/users/createuser",
  Validate.UserDataValidate,
  Usercontrollers.CreaterUser
);
Uroute.post("/users/loginuser", Usercontrollers.LoginUser);
Uroute.get("/users/getuser", Usercontrollers.GetUser);
Uroute.put(
  "/users/updateuser",
  Validate.UserDataValidate,
  Usercontrollers.UpdateUser
);
Uroute.delete("/users/deleteuser", Usercontrollers.DeleteUser);
Uroute.delete("/users/deleteuser/:id", Usercontrollers.DeleteUserByAdmin);

Uroute.post(
  "/users/resetpassword",
  Verify.verifyToken,
  Usercontrollers.ResetPassword
);
export default Uroute;
