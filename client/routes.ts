/*
 * Um array de rotas públicas que podem ser acessados por qualquer um
 * Essas rotas não precisam de autenticacao
 * @type {string[]}
 */

export const publicRoutes = ['/', '/site']

/*
 * Um array de rotas que são usadas para autenticação
 * Essas rotas farão o redirecionamento para o dashboard
 * @type {string[]}
 */
export const authRoutes = ['/autenticacao/login', '/autenticacao/cadastro']

/*
 * Rota principal para a autenticação da aplicação
 * Rotas que começam com esse prefixo são utilizadas para a autenticação da api
 * @type {string}
*/
export const apiAuthPrefix = '/api/auth'

/**
 * A rota padrão de redirecionamento após a autenticação
 */

export const DEFAULT_LOGIN_REDIRECT = '/plataforma/dashboard'