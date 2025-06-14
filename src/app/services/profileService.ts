import profileRepository from "../repositories/profileRepository";

class ProfileService {
    async findProfileService(username: string) {
        return await profileRepository.findOne(username)
    }

    async updateProfileService(username: string, setData: any) {
        return await profileRepository.update(username, setData)
    }
}

export default new ProfileService()