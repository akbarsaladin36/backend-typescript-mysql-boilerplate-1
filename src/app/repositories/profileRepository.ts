import { ResultSetHeader, RowDataPacket } from 'mysql2'
import connection from '../config/database'

class ProfileRepository {
    async findOne(username: string) {
        const queryString = "SELECT * FROM users WHERE user_username = ?"
        const params = [username]
        const [rows] = await connection.query<RowDataPacket[]>(queryString, params)
        return rows[0]
    }

    async update(username: string, setData: any) {
        const queryString = "UPDATE users SET ? WHERE user_username = ?"
        const params = [setData, username]
        const [result] = await connection.query<ResultSetHeader>(queryString, params)
        if(result.affectedRows == 0) return null
        return this.findOne(username) 
    }
}

export default new ProfileRepository()