import jwt from 'jsonwebtoken'

export const signToken = (_id: string, email: string ) => {
  if( !process.env.JWT_SECRET_SEED ){
    throw new Error('No hay semilla de JWT - revisar variables de entorno')
  }

  return jwt.sign(
    // payload
    {_id, email},

    // seed
    process.env.JWT_SECRET_SEED,

    { expiresIn: '30d' }
  )
}


export const isValidToken = ( token: string ): Promise<string | undefined> => {

  if( !process.env.JWT_SECRET_SEED ){
    throw new Error('No hay semilla de JWT')
  }

  if( token.length <= 10 ){
    return Promise.reject(undefined)
  }


  return new Promise( (resolve, reject) => {

    try {
      jwt.verify( token, process.env.JWT_SECRET_SEED || '', (err, payload) => {

        if( err ) return reject(undefined)

        const { _id } = payload as { _id: string }

        resolve( _id )
      })
    } catch (error) {
      reject(undefined)
    }

  })
}