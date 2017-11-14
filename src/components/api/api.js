import axios from 'axios'

const route = route => `/api/${route}`

class Api {
  simpleGet (route) {
    return new Promise((resolve, reject) => {
      axios.get(route).then(response => {
        resolve(response.data)
      }, () => {
        reject()
      })
    })
  }
  simplePost (route, body) {
    return new Promise((resolve, reject) => {
      axios.post(route, body).then(response => {
        resolve(response.data)
      }, () => {
        reject()
      })
    })
  }

  addDocument (doc) { return this.simplePost(route('document/add'), doc) }
  deleteDocument (doc) { return this.simplePost(route('document/delete'), doc) }
  getDocuments () {
    return this.simpleGet(route('documents')).then(documents => {
      return documents.map(doc => {
        doc.id = doc.guid
        return doc
      })
    })
  }
  updateDocument (doc) { return this.simplePost(route('document/update'), doc) }

  arrangeChapters (data) { return this.simplePost(route('chapter/arrange'), data) }
  deleteChapter (data) { return this.simplePost(route('chapter/delete'), data) }
  getChapters (fileId) {
    return this.simpleGet(route(`chapters/${fileId}`)).then(chapters => {
      return chapters.map(chapter => {
        chapter.id = chapter.guid
        Object.keys(chapter.topics).forEach(id => {
          const topic = chapter.topics[id]
          topic.id = topic.guid
        })
        return chapter
      })
    })
  }
  updateChapter (data) { return this.simplePost(route('chapter/update'), data) }

  arrangeTopics (data) { return this.simplePost(route('topic/arrange'), data) }
  deleteTopic (data) { return this.simplePost(route('topic/delete'), data) }
  getTopics (fileId) {
    return this.simpleGet(route(`topics/${fileId}`)).then(topics => {
      return topics.map(topic => {
        topic.id = topic.guid
        return topic
      })
    })
  }
  updateTopic (data) { return this.simplePost(route('topic/update'), data) }
}

export default new Api()