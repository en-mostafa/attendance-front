/* eslint-disable @typescript-eslint/no-explicit-any */

import { JWTPayload, jwtVerify, SignJWT } from "jose"

const key = new TextEncoder().encode(process.env.SECRET_KEY);
export async function encrypt(payload: JWTPayload | undefined) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .sign(key)
}
export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256']
    });
    return payload
};