
import validator from "validator";

const validateUser = (req, res, next) => {
    const { name, email, password } = req.body;

    if (
        typeof name !== "string" ||
        validator.isEmpty(name.trim())
    ) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    if (
        typeof email !== "string" ||
        validator.isEmpty(email.trim()) ||
        !validator.isEmail(email)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid email address"
        });
    }

    if (
        typeof password !== "string" ||
        !validator.isLength(password, { min: 8 })
    ) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 8 characters"
        });
    }

    next();
};

export default validateUser;
