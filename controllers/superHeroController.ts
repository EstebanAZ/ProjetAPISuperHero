import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import { MinimalSuperHeroData } from "../interfaces/MinimalSuperHeroData";
import { ImageSuperHeroData } from "../interfaces/ImageSuperHeroData";

export class SuperHeroController {
    private API_KEY: string;

    constructor(key: string) {
        this.API_KEY = key;
    }


    // public async getResultLastMatch(
    //     req: Request, res: Response, next: NextFunction): Promise<void> {
    //     const id: string = req.params.id;

    //     try {
    //         const response: AxiosResponse = await axios.get(
    //             `https://superheroapi.com/api/current.json?key=${this.API_KEY}&q=${id}&lang=fr`
    //         );
    //         const minimalData: MinimalSuperHeroData = {
    //             powerstats: response.data.location.powerstats,
    //             name:  response.data.current.work,
    //             image: response.data.current.image
    //         }

    //         res.json(minimalData);
    //     } catch (error) {
    //         next(new ApiError("Erreur lors de la récupération des données météo"));
    //     }
    // }

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


}