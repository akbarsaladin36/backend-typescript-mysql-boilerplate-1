import { Request, Response } from 'express'
import Helper from "../../helper";
import profileService from "../services/profileService";


class ProfileController {
    async findProfileController(req: Request, res: Response): Promise<void> {
        try {
            const currentUser = Helper.CurrentUser(req)
            const username = currentUser.username
            const result = await profileService.findProfileService(username)
            if(result) {
                Helper.GetResponse(res, 200, `A profile ${username} data is succesfully appeared!`, result)
            } else {
                Helper.GetResponse(res, 400, 'A profile data is not found!', null)    
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }

    async updateProfileController(req: Request, res: Response): Promise<void> {
        try {
            const currentUser = Helper.CurrentUser(req)
            const username = currentUser.username
            const { firstName, lastName, address, phoneNumber } = req.body
            const result = await profileService.findProfileService(username)
            if(result) {
                const setData = {
                    user_first_name: firstName,
                    user_last_name: lastName,
                    user_address: address,
                    user_phone_number: phoneNumber,
                    user_updated_date: new Date(Date.now()),
                    user_updated_user_uuid: currentUser.userUUID,
                    user_updated_user_username: currentUser.username
                }
                await profileService.updateProfileService(username, setData)
                Helper.GetResponse(res, 200, `A profile ${username} data is succesfully updated!`, setData)
            } else {
                Helper.GetResponse(res, 400, 'A profile data is not found!', null)    
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }
}

export default new ProfileController()