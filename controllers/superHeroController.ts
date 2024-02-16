import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import { MinimalSuperHeroData } from "../interfaces/MinimalSuperHeroData";

export class SuperHeroController {
    private API_KEY: string;

    constructor(key: string) {
        this.API_KEY = key;
    }


    public async getResultLastMatch(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://superheroapi.com/api/current.json?key=${this.API_KEY}&q=${id}&lang=fr`
            );
            const minimalData: MinimalSuperHeroData = {
                powerstats: response.data.location.powerstats,
                biography:  response.data.location.biography,
                appearance:  response.data.current.appearance,
                work:  response.data.current.work,
                connections : response.data.current.connections,
                image: response.data.current.image
            }

            res.json(minimalData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données météo"));
        }
    }

    public async getSuperHeroByid(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://superheroapi.com/api/current.json?key=${this.API_KEY}&q=${id}&lang=fr`
            );
            const minimalData: MinimalSuperHeroData = {
                powerstats: response.data.location.powerstats,
                biography:  response.data.location.biography,
                appearance:  response.data.current.appearance,
                work:  response.data.current.work,
                connections : response.data.current.connections,
                image: response.data.current.image
            }

            res.json(minimalData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données de l'hero"));
        }
    }


}