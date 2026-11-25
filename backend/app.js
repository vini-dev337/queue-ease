import express from 'express'
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import verifyToken from './middlewares/verifyToken.js';
import authorizeUser from './middlewares/authorizeUser.js';

const app = express();

app.use(express.json());
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("server is running");
})

app.get(
    "/api/test",
    verifyToken,
    authorizeUser("patient"),
    (req, res) => {
        res.json({
            success: true,
            message: "Access granted"
        });
    }
);

app.use("/api/auth",authRoutes);

export default app;