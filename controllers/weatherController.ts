import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import { MinimalWeatherData } from "../interfaces/MinimalWeatherData";


/**
 * @swagger
 * tags:
 *  name: Weather
 *  description: Opérations liés à la météo
 */

/**
 * @swagger
 * tags:
 *  name: Football
 *  description: Opérations liés au football
 */



export class WeatherController {
    private API_KEY: string;

    constructor(key: string) {
        this.API_KEY = key;
    }

    /**
     * @swagger
     * /football/{club}:
     *  post: 
     *      summary: Obtient les informations du match.
     *      description: Recupérer les informations du score final du match.
     *      tags: [Football]
     *      parameters:
     *          - in: path
     *            name: club
     *            required: true
     *            description: Nom du club.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données météo.
     *          400:
     *            description: Erreur lors de la récupération des données météo.
     * 
     */

    public async getResultLastMatch(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const city: string = req.params.city;

        try {
            const response: AxiosResponse = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
            );
            const minimalData: MinimalWeatherData = {
                city: response.data.location.name,
                country:  response.data.location.country,
                temperataure:  response.data.current.temp_c,
                condition:  response.data.current.condition.text,
                icon : response.data.current.condition.icon,
                temperatureF: response.data.current.temp_f
            }

            res.json(minimalData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données météo"));
        }
    }
    /**
     * @swagger
     * /weather/{city}:
     *  get: 
     *      summary: Obtient les informations météo.
     *      description: Recupérer les informations météo pour une ville donnée.
     *      tags: [Weather]
     *      parameters:
     *          - in: path
     *            name: city
     *            required: true
     *            description: Nom de la ville.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données météo.
     *          400:
     *            description: Erreur lors de la récupération des données météo.
     * 
     */

    public async getWeatherByCity(
        req: Request, res: Response, next: NextFunction): Promise<void> {
        const city: string = req.params.city;

        try {
            const response: AxiosResponse = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
            );
            const minimalData: MinimalWeatherData = {
                city: response.data.location.name,
                country:  response.data.location.country,
                temperataure:  response.data.current.temp_c,
                condition:  response.data.current.condition.text,
                icon : response.data.current.condition.icon,
                temperatureF: response.data.current.temp_f
            }

            res.json(minimalData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération des données météo"));
        }
    }


}