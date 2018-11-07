import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import wxUserCtrl from '../controllers/wxuser.controller';

const router = express.Router();

router.post('/login-wxgame', passport.authenticate("localWxGame"), wxUserCtrl.loginWxGame);

router.post('/login-native', passport.authenticate("localNative"), wxUserCtrl.loginNative);

router.get('/photon-login', (req: Request, res: Response, next: NextFunction) => {

    const unionId: string = req.query.unionId;

    if (!unionId || unionId == "undefined") {
        //Anonymous user login via photon custom auth.
        //Return a new random userId.
        return res.json({
            ResultCode: 1,
            UserId: (Math.random() * 100000).toFixed()
        });
    }
    else if (unionId.startsWith("debug")) {
        return res.json({
            ResultCode: 1,
            UserId: unionId
        });
    }

    wxUserCtrl.load(req.query).then((user) => {
        return res.json({
            ResultCode: user ? 1 : 2,
            UserId: user && user.unionId
        });
    });
});

export default router;
