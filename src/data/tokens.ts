import { db } from '@/lib/db';
import { v4 as uuid } from 'uuid'
import { getVerificationTokenByEmail } from './verification-token';
import { getPasswordResetTokenByEmail } from './password-reset-token';
import  crypto  from 'crypto'
import { getTwoFactorTokenByEmail } from '@/actions/two-factor-token';
export const generateTwoFactorToken = async(email:string) => {
    const token = crypto.randomInt(100_000,1_000_000);
    const expires = new Date(new Date()).getTime() * 3600 * 1000;

    const existingToken = await getTwoFactorTokenByEmail(email);
}

export const generateVerificationToken = async(email:string)=>{
    const token = uuid();

    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const existingToken = await getVerificationTokenByEmail(email);

    if(existingToken) {
        await db.verificationToken.delete({
            where:{
                id:existingToken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data:{
            email,
            token,
            expires
        }
    });
    return verificationToken
}

export const generatePasswordResetToken = async(email:string) => {
    const token = uuid();

    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const existingToken = await getPasswordResetTokenByEmail(email);
    if(existingToken) {
        await db.passwordResetToken.delete({
            where:{
                id:existingToken.id
            }
        })
    }
    const passwordResetToken = await db.passwordResetToken.create({
        data:{
            email,
            token,
            expires
        }
    });
    return passwordResetToken
}