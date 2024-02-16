import express, {NextFunction, Request, Response} from "express";
import { WeatherController } from "./controllers/weatherController";
import { errorHandler } from "./midllewares/errorHandler";
import { API_KEY } from "./constantes/config";
import dotenv from "dotenv";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
dotenv.config();
const app = express();

const weatherController = new WeatherController(API_KEY) ;

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;


app.get("/testApi", (req: Request, res: Response) => {
    res.send("Coucou, l'api Meteo est active")
})

//Route pour récupérer les données météo
app.get('/weather/:city', async(req: Request, res: Response, next: NextFunction) => {
   await weatherController.getWeatherByCity(req, res, next);
})

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Le server est en cours d'execution sur le port ${PORT}`);
})

