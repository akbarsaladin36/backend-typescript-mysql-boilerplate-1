import { RowDataPacket, ResultSetHeader } from 'mysql2'
import connection from '../config/database'

class AuthRepository {

    async findOne(username: string) {
        const queryString = "SELECT * FROM users WHERE user_username = ?"
        const params = [username]
        const [rows] = await connection.query<RowDataPacket[]>(queryString, params)
        return rows[0]
    }

    async create(setData: any) {
        const queryString = "INSERT INTO users SET ?"
        const params = [setData]
        const [result] = await connection.query<ResultSetHeader>(queryString, params)
        return { id: result.insertId, ...setData }
    }

}

export default new AuthRepository()