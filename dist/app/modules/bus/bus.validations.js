"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        busNumber: zod_1.z.string({
            required_error: 'Bus Number is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        totalSit: zod_1.z.number().optional(),
        busNumber: zod_1.z.string().optional(),
    }),
});
exports.BusValidation = {
    create,
    update,
};
