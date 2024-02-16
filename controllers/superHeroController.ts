import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import { MinimalSuperHeroData } from "../interfaces/MinimalSuperHeroData";
import { ImageSuperHeroData } from "../interfaces/ImageSuperHeroData";
import { PowerstatsSuperHeroData } from "../interfaces/PowerstatsSuperHeroData";



export class SuperHeroController {
    private API_KEY: string;

    constructor(key: string) {
        this.API_KEY = key;
    }

    public async getSuperHeroByid(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://www.superheroapi.com/api.php/${this.API_KEY}/${id}`
            );
            const minimalData: MinimalSuperHeroData = {
                biography: response.data.biography,
                name: response.data.name,
                image: response.data.image.url,
                powerstats: response.data.powerstats,
                appearance: response.data.appearance,
                work: response.data.work,
                connections: response.data.connections
            }

            res.json(minimalData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données de l'hero"));
        }
    }

    public async getSuperHeroImage(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://www.superheroapi.com/api.php/${this.API_KEY}/${id}`
            );
            const imageData: ImageSuperHeroData = {
                image: response.data.image.url,
            }

            res.json(imageData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données de l'hero"));
        }
    }

    public async getSuperHeroStats(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://www.superheroapi.com/api.php/${this.API_KEY}/${id}`
            );
            const StatsData: PowerstatsSuperHeroData = {
                name: response.data.name,
                intelligence: response.data.powerstats.intelligence,
                strength: response.data.powerstats.strength,
                speed: response.data.powerstats.speed,
                durability: response.data.powerstats.durability,
                power: response.data.powerstats.power,
                combat: response.data.powerstats.combat
            }

            res.json(StatsData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données de l'hero"));
        }
    }


}