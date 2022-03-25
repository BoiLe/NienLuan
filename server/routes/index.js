import ProductRoute from "./product.route.js";
import AuthRoute from "./Auth.route.js";
import OrderRoute from "./Order.route.js";
import UserRoute from "./Admin.route.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
function route(app) {
  app.use(cookieParser());
  app.use(bodyParser.json());
  //support parsing of application/x-www-form-url encoded post data
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/product", ProductRoute);
  app.use("/order", OrderRoute);
  app.use("/auth", AuthRoute);
  app.use("/user", UserRoute);
  console.log("Route running");
}
export default route;
