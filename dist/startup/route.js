"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoRoutes_1 = require("./../routes/todoRoutes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({ "Success": "Server is running" });
        });
        app.use('/todo', todoRoutes_1.todoRoutes);
    };
    return Routes;
}());
exports.Routes = Routes;
