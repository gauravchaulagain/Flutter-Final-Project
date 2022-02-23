const jwt = require('jsonwebtoken');



const generarJsonWebToken = ( uidPerson ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = { uidPerson };

        jwt.sign( payload, process.env.KEY_JWTOKEN, { 
            expiresIn: '24h'
        }, ( err, token ) => {

            if( !err ){ resolve( token ); }
            else { reject( "You can't generate the Token" ); }

        });

    });   
}

module.exports = {
    generarJsonWebToken,
}