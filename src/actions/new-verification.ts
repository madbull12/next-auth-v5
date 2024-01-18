"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/users";
import { getVerificationTokenByToken } from "@/data/verification-token";


export const newVerification = async(token:string) => {
    const existingToken = await getVerificationTokenByToken(token);
    if(!existingToken) {
        return {
            error:"Token doesn't exist!"
        }
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return {
            error:"Token has expired"
        }
    }
}