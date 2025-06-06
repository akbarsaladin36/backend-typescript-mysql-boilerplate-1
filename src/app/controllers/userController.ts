import { Request, Response } from "express";
import userService from "../services/userService";
import Helper from "../../helper";

class UserController {
    async findAllController(req: Request, res: Response): Promise<void> {
        try {
            const result = await userService.findAllService()
            if(result) {
                Helper.GetResponse(res, 200, 'All users data is succesfully appeared!', result)
            } else {
                Helper.GetResponse(res, 400, 'All users data are empty!', null)
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }

    async findOneController(req: Request, res: Response): Promise<void> {
        try {
            const { username } = req.params
            const result = await userService.findOneService(username)
            if(result) {
                Helper.GetResponse(res, 200, `A username ${username} data is succesfully appeared!`, result)
            } else {
                Helper.GetResponse(res, 400, `A username ${username} data are not found!`, null)
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }

    async createUserController(req: Request, res: Response): Promise<void> {
        try {
            const { username, email, password, role } = req.body
            const result = await userService.findOneService(username)
            if(result) {
                Helper.GetResponse(res, 400, `A username ${username} data is registered! Please try find a new username!`, null)
            } else {
                const userUUID = Helper.GenerateUUID()
                const hashedPassword = Helper.HashPassword(password)
                const setData = {
                    user_uuid: userUUID,
                    user_username: username,
                    user_email: email,
                    user_password: hashedPassword,
                    user_status_cd: 'active',
                    user_role: role,
                    user_created_date: new Date(Date.now()),
                    user_created_user_uuid: userUUID,
                    user_created_user_username: username
                }
                await userService.createService(setData)
                Helper.GetResponse(res, 200, 'A new user is succesfully created!', setData)
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }

    async updateUserController(req: Request, res: Response): Promise<void> {
        try {
            const { username } = req.params
            const { firstName, lastName, address, phoneNumber, status, role } = req.body
            const result = await userService.findOneService(username)
            if(result) {
                const currentUser = Helper.CurrentUser(req)
                const setData = {
                    user_first_name: firstName,
                    user_last_name: lastName,
                    user_address: address,
                    user_phone_number: phoneNumber,
                    user_status_cd: status,
                    user_role: role,
                    user_updated_date: new Date(Date.now()),
                    user_updated_user_uuid: currentUser.userUUID,
                    user_updated_user_username: currentUser.username
                }
                await userService.updateService(username, setData)
                Helper.GetResponse(res, 200, `A username ${username} data is succesfully updated!`, setData)
            } else {
                Helper.GetResponse(res, 400, `A username ${username} data is not found! Please try again!`, null)
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }

    async deleteUserController(req: Request, res: Response): Promise<void> {
        try {
            const { username } = req.params
            const result = await userService.findOneService(username)
            if(result) {
                await userService.deleteService(username)
                Helper.GetResponse(res, 200, `A username ${username} data is succesfully deleted!`, null)
            } else {
                Helper.GetResponse(res, 400, `A username ${username} data is not found! Please try again!`, null)
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }
}

export default new UserController()