import { ResultSetHeader, RowDataPacket } from 'mysql2'
import connection from '../config/database'

class UserRepository {
    async findAll() {
        const queryString = "SELECT * FROM users WHERE user_status_cd = 'active'"
        const [rows] = await connection.query<RowDataPacket[]>(queryString)
        return rows
    }

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

    async update(username: string, setData: any) {
        const queryString = "UPDATE users SET ? WHERE user_username = ?"
        const params = [setData, username]
        const [result] = await connection.query<ResultSetHeader>(queryString, params)
        if(result.affectedRows == 0) return null
        return this.findOne(username)
    }

    async delete(username: string) {
        const queryString = "DELETE FROM users WHERE user_username = ?"
        const params = [username]
        const [result] = await connection.query<ResultSetHeader>(queryString, params)
        return result.affectedRows > 0
    }
}

export default new UserRepository()