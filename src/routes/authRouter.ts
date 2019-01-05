import {Router,Request,Response,NextFunction} from 'express';
import passport from "passport";
import localStrategy from "../config/passport-local-strategy"

class authRouter {

    public router : Router;

    constructor() {

        this.router = Router();
        this.routes();

        passport.use(localStrategy);

        passport.serializeUser((user, done) => done(null,user));
        passport.deserializeUser((user, done) => done(null,user));
    }

    private signIn(req: Request, res:Response, next:NextFunction) {

        res.render('signIn', { title: 'auth page', message: 'AuthRouter'})

    }

    public routes() : void {
        this.router.get('/sign-in',this.signIn);
    }
}
const authRoutes = new authRouter();
authRoutes.routes();

export default authRoutes.router;