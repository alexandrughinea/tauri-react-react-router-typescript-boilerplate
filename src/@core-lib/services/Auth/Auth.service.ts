import { LoginData } from './Auth.service.types.ts'

export class AuthService {
    get url() {
        return '/v1/auth'
    }

    async login(data: LoginData) {
        console.log('Login data', data)
        return true
    }

    async logout() {
        return false
    }
}
