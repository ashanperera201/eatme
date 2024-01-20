import { Request, Response } from 'express';
import { OAuth2Client, GoogleAuth } from 'google-auth-library'

export const authJwtMiddleWare = async (req: Request, res: Response, next) => {

    ///  THIS IS THE WAY HOW GOOGLE AUTH HAS TO BE HAPPEN, BUT WE MUST ENABLE THEIR API'S, API'S ONLY AVAILABLE FOR SUBSCRIPTIONS/

    const accessToken = req.headers.authorization;
    const secret = process.env.APP_GOOGLE_SECRET;

    if (accessToken) {
        // const client = new OAuth2Client({
        //     clientId: secret,
        // });

        // try {
        //     const ticket = await client.verifyIdToken({ idToken: accessToken, })
        //     if (ticket) {
        //         const payload = ticket.getPayload();
        //         const userId = payload['sub'];
        return next();
        //     } else {
        //         return res.status(401).json({ error: 'Unauthorized - Invalid Access Token' });
        //     }
        // } catch (error) {
        //     console.log(error);
        //     return res.status(401).json({ error: 'Unauthorized - Invalid Access Token' });
        // }
    } else {
        return res.status(401).json({ error: 'Unauthorized - Invalid Access Token' });
    }
}
