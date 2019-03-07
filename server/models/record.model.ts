
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';

import RankModel from './rank.model';

import * as _ from 'lodash';

/**
 * Record Schema
 */
//todo: Note: we should not use async function here. Instead, use callback-style calls.
@pre<Record>('insertMany', async function (next, docs?: InstanceType<Record>[]) { // or @pre(this: Record, 'save', ...

    let existingRanks = await RankModel.find({
        userId: { $in: docs.map(record => record.userId) }
    });

    let updates = _(docs).flatMap(record => {
        let rank00 = existingRanks.find(er => er.mode == 0 && er.role == 0) || { countWin: 0, countTotal: 0 };
        let winRate00 = (+rank00.countWin + (record.isWin ? 1 : 0)) / (+rank00.countTotal + 1);

        let rank0r = existingRanks.find(er => er.mode == 0 && er.role == record.roleId) || { countWin: 0, countTotal: 0 };
        let winRate0r = (+rank0r.countWin + (record.isWin ? 1 : 0)) / (+rank0r.countTotal + 1);

        let rankm0 = existingRanks.find(er => er.mode == record.gameType && er.role == 0) || { countWin: 0, countTotal: 0 };
        let winRatem0 = (+rankm0.countWin + (record.isWin ? 1 : 0)) / (+rankm0.countTotal + 1);

        let rankmr = existingRanks.find(er => er.mode == record.gameType && er.role == record.roleId) || { countWin: 0, countTotal: 0 };
        let winRatemr = (+rankmr.countWin + (record.isWin ? 1 : 0)) / (+rankmr.countTotal + 1);
        return [
            {
                updateOne: {
                    filter: { userId: record.userId, mode: 0, role: 0 },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1 }, $set: { winRate: Math.round(winRate00 * 100) } },
                    upsert: true
                }
            },
            {
                updateOne: {
                    filter: { userId: record.userId, mode: record.gameType, role: 0 },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1 }, $set: { winRate: Math.round(winRate0r * 100) } },
                    upsert: true
                }
            },
            {
                updateOne: {
                    filter: { userId: record.userId, mode: 0, role: record.roleId },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1 }, $set: { winRate: Math.round(winRatem0 * 100) } },
                    upsert: true
                }
            },
            {
                updateOne: {
                    filter: { userId: record.userId, mode: record.gameType, role: record.roleId },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1 }, $set: { winRate: Math.round(winRatemr * 100) } },
                    upsert: true
                }
            }
        ]
    }).value();

    let bulkWriteResult = await RankModel.collection.bulkWrite(updates);

    console.log(bulkWriteResult);

    return next();
})
// @pre<Record>("findOneAndUpdate", function (next) {

//     if (!this.isNew) {
//         return next();
//     }

//     let result;

//     // mode: 0, role: 0
//     RankModel.findOneAndUpdate(
//         { $and: [{ mode: 0 }, { role: 0 }, { userId: this.userId }] },
//         { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: 0, role: 0 } },
//         { upsert: true, new: true },
//         (error, doc) => {
//             if (error) {
//                 return next(error);
//             }
//             doc.winRate = +doc.countWin / +doc.countTotal;
//             doc.save();
//         }
//     );

//     // if (!result) {
//     //     return next(new Error(`update rank error, mode: 0, role: 0`));
//     // }

//     // mode: ${this.gameType}, role: 0
//     RankModel.findOneAndUpdate(
//         { $and: [{ mode: this.gameType }, { role: 0 }, { userId: this.userId }] },
//         { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: this.gameType, role: 0 } },
//         { upsert: true, new: true },
//         (error, doc) => {
//             if (error) {
//                 return next(error);
//             }
//             doc.winRate = +doc.countWin / +doc.countTotal;
//             doc.save();
//         }
//     );

//     // if (!result) {
//     //     return next(new Error(`update rank error, mode: ${this.gameType}, role: 0`));
//     // }

//     // mode: 0, role: ${this.roleId}
//     RankModel.findOneAndUpdate(
//         { $and: [{ mode: 0 }, { role: this.roleId }, { userId: this.userId }] },
//         { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: 0, role: this.roleId } },
//         { upsert: true, new: true },
//         (error, doc) => {
//             if (error) {
//                 return next(error);
//             }
//             doc.winRate = +doc.countWin / +doc.countTotal;
//             doc.save();
//         }
//     );

//     // if (!result) {
//     //     return next(new Error(`update rank error, mode: 0, role: ${this.roleId}`));
//     // }

//     // mode: ${this.gameType}, role: ${this.roleId}
//     RankModel.findOneAndUpdate(
//         { $and: [{ mode: this.gameType }, { role: this.roleId }, { userId: this.userId }] },
//         { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: this.gameType, role: this.roleId } },
//         { upsert: true, new: true },
//         (error, doc) => {
//             if (error) {
//                 return next(error);
//             }
//             doc.winRate = +doc.countWin / +doc.countTotal;
//             doc.save();
//         }
//     );

//     // if (!result) {
//     //     return next(new Error(`update rank error, mode: ${this.gameType}, role: ${this.roleId}`));
//     // }

//     return next();
// })
export class Record extends Typegoose {
    @prop({ index: true })
    userId: Number;
    @prop()
    roomName: String;
    @prop()
    roleId: Number;
    @prop()
    camp: Number;
    @prop()
    gameType: Number;
    @prop()
    isWin: Boolean;
}

const RecordModel = new Record().getModelForClass(Record, {
    schemaOptions: {
        timestamps: true
    }
});

export default RecordModel;