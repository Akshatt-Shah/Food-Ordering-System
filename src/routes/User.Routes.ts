import { Usercontrollers } from "../controller";
import { Router } from "express";
import { Verify } from "../middlwares";
const Uroute = Router();
Uroute.post("/users/createuser", Usercontrollers.CreaterUser);
Uroute.post("/users/loginuser", Usercontrollers.LoginUser);
Uroute.get("/users/getuser", Usercontrollers.GetUser);
Uroute.put("/users/updateuser", Usercontrollers.UpdateUser);
Uroute.delete("/users/deleteuser", Usercontrollers.DeleteUser);
Uroute.delete("/users/deleteuser/:id", Usercontrollers.DeleteUserByAdmin);

export default Uroute;
