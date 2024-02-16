import express, {NextFunction, Request, Response} from "express";
import { SuperHeroController } from "./controllers/superHeroController";
import { errorHandler } from "./midllewares/errorHandler";
import { API_KEY } from "./constantes/config";
import dotenv from "dotenv";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
dotenv.config();
const app = express();

const superHeroController = new SuperHeroController(API_KEY) ;

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;




// Route for getting a super hero by id
app.get('/superHero/:id', async(req: Request, res: Response, next: NextFunction) => {
   await superHeroController.getSuperHeroByid(req, res, next);
})

// Route for getting a super hero image by id
app.get('/superHero/:id/image', async(req: Request, res: Response, next: NextFunction) => {
    await superHeroController.getSuperHeroImage(req, res, next);
 })

// Route for getting a super hero stats by id
 app.get('/superHero/:id/powerstats', async(req: Request, res: Response, next: NextFunction) => {
    await superHeroController.getSuperHeroStats(req, res, next);
 })

//  app.get('/superHero/search/:name', async(req: Request, res: Response, next: NextFunction) => {
//     await superHeroController.getSuperHeroBySearch(req, res, next);
//  })

// Route to serve index.html
app.get('/', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'Public' });
});

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Le server est en cours d'execution sur le port ${PORT}`);
})

