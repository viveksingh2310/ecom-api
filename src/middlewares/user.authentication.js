import jwt from 'jsonwebtoken'
export function jwtAuth(req, res, next) {
    const token = req.headers['authorization']
    if (!token) {
return res.status(400).send('user not registered frost register');
    }
    try {
        const payload = jwt.verify(token, 'QWERTYUIOP')
        console.log(payload)
    } catch (err) {
        return res.status(400).send('unauthenticated user')
    }
    next();
}