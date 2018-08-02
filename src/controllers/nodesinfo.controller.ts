import NodesInfoModel, { NodesInfo } from '../models/nodesinfo.model';
import { Request, Response } from "express";
import { IncomingMessage } from 'http';

export let load = async (params: any) => {
    return NodesInfoModel.findOne({ openId: params.openId });
}

export let list = async (params: { limit?: number, skip?: number }) => {
    const { limit = 50, skip = 0 } = params;
    return await NodesInfoModel.find()
        .skip(+skip)
        .limit(+limit)
        .exec();
}

export let get = (req: Request, res: Response) => {
    return res.json(req.params.nodesInfo);
}

export let create = async (body: any) => {
    if(!body || !body.openId) {
        return;
    }
    let existsItem = await NodesInfoModel.findOne({ openId: body.openId });
    if (existsItem) {
        return existsItem;
    }
    const nodesInfo = new NodesInfoModel(body);
    await nodesInfo.save();
    return NodesInfoModel.findOne();
}

export let update = (openId, body: NodesInfo) => {
    return load({ openId: openId }).then((nodesInfo) => {
        const tmp = nodesInfo;
        nodesInfo.events = body.events;
        return nodesInfo.save();
    });
}

export let remove = (params: any) => {
    return load(params).then((nodesInfo) => nodesInfo.remove());
}

