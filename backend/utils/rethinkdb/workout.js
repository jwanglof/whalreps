const r = require('rethinkdb');

let connection = null;
const tableName = 'workout';

function getConnection() {
  if (!connection) {
    return r.connect({host: 'localhost', port: 28015, db: 'deepstream'})
      .then(conn => {
        connection = conn;
        return connection;
      })
  }
  return Promise.resolve(connection);
}

function closeConnection() {
  if (connection) {
    return connection.close();
  }
}

export default {
  getAllWorkouts() {
    return getConnection()
      .then(conn => {
        return r.table(tableName).run(conn);
      })
      .then(cursor => {
        return cursor.toArray();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        console.error('Rethink error:', err);
      });
  }
}