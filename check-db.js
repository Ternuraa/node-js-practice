import pg from 'pg';

const pool = new pg.Pool({
    connectionTimeoutMillis: 3000,
    query_timeout: 5000
})

try {
    const { rows } = await pool.query('SELECT * FROM rooms LIMIT 10;');
    console.log(rows);
} catch (err) {
    console.error('Нет подключения', err.message);
} finally {
    await pool.end();
}