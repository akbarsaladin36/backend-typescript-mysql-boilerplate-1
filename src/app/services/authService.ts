import authRepository from "../repositories/authRepository";

class AuthService {
    async findOneService(username: string) {
        return await authRepository.findOne(username)
    }

    async createService(setData: any) {
        return await authRepository.create(setData)
    }
}

export default new AuthService()