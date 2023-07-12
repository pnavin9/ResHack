import express from "express";
import { generatePDFs } from "../Controller/generateController.js";
import { templateGallery } from "../Controller/templateGallery.js";

const router = express.Router();

/**
 * Route for generating PDFs based on the request body.
 * POST /api/resume
 */
router.route("/resume").post(generatePDFs);

/**
 * Route for retrieving the template gallery.
 * GET /api/templateGallery
 */
router.route("/templateGallery").get(templateGallery);

export default router;
