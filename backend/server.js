import "dotenv/config";
console.log(process.env.MONGODB_URI);
import app from "./app.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

connectDB();