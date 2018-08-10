import GameModel, { Game } from '../models/Game.model';
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';

export let load = async (params: any) => {
    return GameModel.findOne({ GameId: params.body.GameId });
}

export let create = async (body: any) => {
    const game = new GameModel(body);

    await game.save();
    return GameModel.findOne();
}

export let update = (gameId, body: Game) => {
    return load({ GameId: gameId }).then(async (game) => {
        if(game) {
            const tmp = game;
            game.ActorCount = body.ActorCount;

            game.State = body.State;
        }
        else {
            game = new GameModel(body);
        }
        return await game.save();
    });
}

export let remove = (params: any) => {
    return load(params).then((Game) => Game.remove());
}

