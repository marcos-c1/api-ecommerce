"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.Request = void 0;
var Request = /** @class */ (function () {
    function Request(object, params) {
        this.body = object !== null && object !== void 0 ? object : {};
        this.params = params !== null && params !== void 0 ? params : {};
    }
    return Request;
}());
exports.Request = Request;
var Response = /** @class */ (function () {
    function Response() {
    }
    Response.prototype.status = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    Response.prototype.json = function (object, message) {
        var _a;
        this.message = (_a = object.message) !== null && _a !== void 0 ? _a : message;
        console.log(JSON.stringify(this.message));
    };
    Response.prototype.getMessage = function () {
        return this.message;
    };
    Response.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    return Response;
}());
exports.Response = Response;
