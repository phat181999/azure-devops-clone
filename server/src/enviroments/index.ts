import * as dotenv from 'dotenv'
dotenv.config()

const SLAT: number = +process.env.HASH || 10;


export {
    SLAT
}