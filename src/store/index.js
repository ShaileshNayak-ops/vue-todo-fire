import { createStore } from "vuex"
import firebase from "firebase"
import db from "../firebase"
export default createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, newTodo) {
      if (newTodo != "") {
        db.collection("todos").add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          content: newTodo
        })
      } else {
        alert("You Must Specify A Todo")
      }
    },
    deleteTodo(state, id) {
      db.collection("todos")
        .doc(id)
        .delete()
    },
    updateTodo(state, todo) {
      db.collection("todos")
        .doc(todo.id)
        .update({
          content: todo.content
        })
    }
  },
  actions: {
    fetchTodos({ state }) {
      db.collection("todos").onSnapshot(snap => {
        state.todos = snap.docs.map(doc => ({
          id: doc.id,
          content: doc.data().content
        }))
      })
    }
  }
})