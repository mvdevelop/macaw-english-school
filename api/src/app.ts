
import express from "express";
import lessonRoutes from "./routes/lesson.routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";

const app = express();

app.use(express.json());

app.use("/api/lessons", lessonRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
