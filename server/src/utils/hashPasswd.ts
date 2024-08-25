import * as crypto from 'crypto'
export function hashPasswd(login: string, password: string): string {
    try {
        const concatenatedString = login + password;
        const md5Hash = crypto
            .createHash('md5')
            .update(concatenatedString, 'binary')
            .digest('binary');
        const base64Encoded = Buffer.from(md5Hash, 'binary').toString('base64');
        return base64Encoded;
    } catch (error) {
        console.error('Erro ao processar:', error);
        throw new Error(`Erro ao processar, ${error}`);
    }
}