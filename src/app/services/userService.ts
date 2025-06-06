import userRepository from "../repositories/userRepository";

class UserService {
    async findAllService() {
        return await userRepository.findAll()
    }

    async findOneService(username: string) {
        return await userRepository.findOne(username)
    }

    async createService(setData: any) {
        return await userRepository.create(setData)
    }

    async updateService(username: string, setData: any) {
        return await userRepository.update(username, setData)
    }

    async deleteService(username: string) {
        return await userRepository.delete(username)
    }
}

export default new UserService()