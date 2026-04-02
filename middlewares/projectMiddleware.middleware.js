import { body, validationResult } from "express-validator";


export const createProjectValidation = [
    body("title")
        .notEmpty()
        .withMessage("Title obligatoire"),
    body("description")
        .notEmpty()
        .withMessage("Description obligatoire"),
    body("capital")
        .isNumeric()
        .withMessage("Capital doit être un nombre")
        .custom(value => value > 0)
        .withMessage("Capital doit être supérieur à 0"),
    body("initialInvestment")
        .optional()
        .isNumeric()
        .withMessage("Initial investment doit être un nombre positif")
        .custom(value => value >= 0)
        .withMessage("Initial investment >= 0"),
 body("maxPercentPerInvestor")
        .optional()
        .isNumeric()
        .withMessage("Max percent doit être un nombre")
        .custom(value => value > 0 && value <= 50) 
        .withMessage("Max percent par investisseur doit être entre 1 et 50")
];


export const validateCreateProject = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};