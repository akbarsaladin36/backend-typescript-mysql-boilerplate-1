import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

const testConnection = async () => {
    let conn
    try {
        conn = await connection.getConnection();
        await conn.ping();
        console.log('✅ Database connected successfully');
    } catch (err: unknown) {
        console.error('❌ Database connection failed:', err instanceof Error ? err.message : err);
        process.exit(1);
    } finally {
        if (conn) conn.release();
    }
}

testConnection()

export default connection