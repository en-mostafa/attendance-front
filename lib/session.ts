'use server'

import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { decrypt, encrypt } from './hash-alg';

export async function setSession(token: string) {
    const user = { token, name: 'jhon' };
    const expires = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);
    const session = await encrypt({ user, expires });

    //Save the session in a cookie
    (await cookies()).set('user_token', session, { expires, httpOnly: true })
}

export async function removeSession() {
    (await cookies()).delete('user_token')
}

export async function getSession() {
    const session = (await cookies()).get("user_token")?.value;
    if (!session) return null;
    return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("user_token")?.value;
    if (!session) return;

    //Refresh the session so it doesn't expire
    const parse = await decrypt(session);
    parse.expires = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: 'user_token',
        value: await encrypt(parse),
        httpOnly: true,
        expires: parse.expires
    });
    return res;
}