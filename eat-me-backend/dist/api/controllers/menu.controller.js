"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDishItemCategoryAsync = exports.getDishItemCategoryAsync = exports.getAllDishItemCategoriesAsync = exports.updateDishItemCategoryAsync = exports.createDishItemCategoryAsync = void 0;
const querystring_1 = __importDefault(require("querystring"));
const whatwg_url_1 = require("whatwg-url");
const dish_item_category_service_1 = require("../../application/services/dish-item-category.service");
const createDishItemCategoryAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const response = yield dish_item_category_service_1.dishItemCategoryService.createDishItemCategoryAsync(payload);
    res.status(response.status).json(response);
});
exports.createDishItemCategoryAsync = createDishItemCategoryAsync;
const updateDishItemCategoryAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const response = yield dish_item_category_service_1.dishItemCategoryService.updateDishItemCategoryAsync(payload);
    res.status(response.status).json(response);
});
exports.updateDishItemCategoryAsync = updateDishItemCategoryAsync;
const getAllDishItemCategoriesAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedUrl = (0, whatwg_url_1.parseURL)(req.url);
    const queryParams = querystring_1.default.parse(parsedUrl.query);
    // const payload: DishItemCategoryDto = req.body.;
    // const response = await dishItemCategoryService.createDishItemCategoryAsync(payload);
    // res.status(response.status).json(response);
});
exports.getAllDishItemCategoriesAsync = getAllDishItemCategoriesAsync;
const getDishItemCategoryAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getDishItemCategoryAsync = getDishItemCategoryAsync;
const deleteDishItemCategoryAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteDishItemCategoryAsync = deleteDishItemCategoryAsync;
// export const createStoreAsync = async (req: Request, res: Response) => {
//     const payload: StoreDto = req.body;
//     const savedRes = await storeService.createStoreAsync(payload);
//     res.status(savedRes.status).json(savedRes);
// }
// export const updateStoreAsync = async (req: Request, res: Response) => {
//     const payload: StoreDto = req.body;
//     const savedRes = await storeService.updateStoreAsync(payload);
//     res.status(savedRes.status).json(savedRes);
// }
// export const getStoreByIdAsync = async (req: Request, res: Response) => {
//     const store = req.params.store;
//     const savedRes = await storeService.getStoreAsync(store);
//     res.status(savedRes.status).json(savedRes);
// }
// export const deleteStoreAsync = async (req: Request, res: Response) => {
//     const payload: StoreDto = req.body;
//     const response = await storeService.deleteStoreAsync(payload);
//     res.status(response.status).json(response);
// }
//# sourceMappingURL=menu.controller.js.map