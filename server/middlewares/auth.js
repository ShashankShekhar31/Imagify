import jwt  from 'jsonwebtoken'


const userAuth = async (req, res, next)=>{
    const {token} = req.headers;

    if(!token){
        return res.json({sucess: false, messege: 'No Authorization. Login Again'})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.userId = tokenDecode.id;
        }else {
            return res.json({
                success: false,
                message: "No Authorization. Login Again",
            });
        }

        next();

    } catch (error) {
        res.json({success: false, messege: error.messege})
    }
};

export default userAuth;