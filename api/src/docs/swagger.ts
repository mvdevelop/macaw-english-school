
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Plataforma de Ensino de Inglês",
      version: "1.0.0",
      description: "API para aulas, alunos e progresso"
    }
  },
  apis: ["./src/routes/*.ts"]
};

export default swaggerJsdoc(options);
