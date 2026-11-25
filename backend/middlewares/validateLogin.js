import validator from "validator";

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (
        typeof email !== "string" ||
        !validator.isEmail(email)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid email address"
        });
    }

    if (
        typeof password !== "string" ||
        validator.isEmpty(password)
    ) {
        return res.status(400).json({
            success: false,
            message: "Password is required"
        });
    }

    next();
};

export default validateLogin;