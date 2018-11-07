import RecordModel, { Record } from '../models/record.model';
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';

export let list = (params: { openId: string }) => {
    return RecordModel.find({ openId: params.openId });
};

export let load = (recordId: string) => {
    return RecordModel.findOne({ recordId: recordId });
}

export let create = async (body: any) => {
    let existingRecord = await RecordModel.findOne({ roomName: body.roomName, openId: body.openId });
    if (existingRecord) {
        return;
    }

    const record = new RecordModel(body);

    return record.save();
}

export let remove = (params: any) => {
    return load(params).then((record) => record.remove());
}

