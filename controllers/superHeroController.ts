import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import { MinimalSuperHeroData } from "../interfaces/MinimalSuperHeroData";
import { ImageSuperHeroData } from "../interfaces/ImageSuperHeroData";
import { PowerstatsSuperHeroData } from "../interfaces/PowerstatsSuperHeroData";

/**
 * @swagger
 * tags:
 *      name: SuperHero
 *      description: Opérations liés aux super héros.
 */

export class SuperHeroController {
    private API_KEY: string;

    constructor(key: string) {
        this.API_KEY = key;
    }

    /**
     * @swagger
     * /superHero/{id}:
     *  get: 
     *      summary: Obtient les informations du super hero.
     *      description: Recupérer les informations du super hero.
     *      tags: [SuperHero]
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: ID du Super Hero.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données du super hero.
     *          400:
     *            description: Erreur lors de la récupération des données du super hero.
     * 
     */

    public async getSuperHeroByid(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://www.superheroapi.com/api/${this.API_KEY}/${id}`
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

    /**
     * @swagger
     * /superHero/{id}/image:
     *  get: 
     *      summary: Obtient l'image liée au super hero.
     *      description: Recupérer l'url de l'image liée au super hero.
     *      tags: [SuperHero]
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: ID du Super Hero.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données météo.
     *          400:
     *            description: Erreur lors de la récupération des données météo.
     * 
     */

    public async getSuperHeroImage(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://www.superheroapi.com/api/${this.API_KEY}/${id}`
            );
            const imageData: ImageSuperHeroData = {
                image: response.data.image.url,
            }

            res.json(imageData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données de l'hero"));
        }
    }

    /**
     * @swagger
     * /superHero/{id}/powerstats:
     *  get: 
     *      summary: Obtient les stats du super hero.
     *      description: Recupérer les différent stats du super hero.
     *      tags: [SuperHero]
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *            description: ID du Super Hero.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données météo.
     *          400:
     *            description: Erreur lors de la récupération des données météo.
     * 
     */

    public async getSuperHeroStats(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;

        try {
            const response: AxiosResponse = await axios.get(
                `https://www.superheroapi.com/api/${this.API_KEY}/${id}`
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

    // public async getSuperHeroBySearch(
    //     req: Request, res: Response, next: NextFunction): Promise<void> {
    //     const name: string = req.params.name;
    //     try {
    //         const response: AxiosResponse = await axios.get(
    //             `https://www.superheroapi.com/api/${this.API_KEY}/search/${name}`
    //         );
    //         const minimalData: MinimalSuperHeroData = {
    //             biography: response.data.biography,
    //             name: response.data.name,
    //             image: response.data.image.url,
    //             powerstats: response.data.powerstats,
    //             appearance: response.data.appearance,
    //             work: response.data.work,
    //             connections: response.data.connections
    //         }

    //         res.json(minimalData);
    //     } catch (error) {
    //         next(new ApiError("Erreur lors de la récupération des données de l'hero"));
    //     }
    // }


}