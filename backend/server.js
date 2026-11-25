import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
