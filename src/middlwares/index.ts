import { VerifyToken } from "./VerifyToken.middlware";
import { Validation } from "./DataValidation";
const Verify = new VerifyToken();
const Validate = new Validation()
export { Verify ,Validate};
