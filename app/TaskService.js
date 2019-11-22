const db = {}
let sequence = 0

class TaskService {

  static save(task) {
    return new Promise((resolve) => {
      task.id = ++sequence
      db[task.id] = task
      resolve(task)
    })
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(db[id])
    })
  }

  static getAll() {
    const toArray = key => {
      return db[key]
    }

    return new Promise((resolve) => {
      const tasks = Object.keys(db).map(toArray)
      resolve(tasks)
    })
  }

  static delete(id) {
    return new Promise((resolve) => {
      let task = db[id]
      if(task) {
        delete db[id]
        resolve(true)
      }
      resolve(false)
    })
  }
}

module.exports = TaskService