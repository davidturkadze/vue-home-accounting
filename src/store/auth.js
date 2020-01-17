/* eslint-disable */
import firebase, { registerVersion } from 'firebase/app'
/* eslint-disable */
export default {
    actions: {
        async login({ dispatch, commit }, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async register({ dispatch, commit }, { email, password, name }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                // get user Id after writing (bill, name) in the database
                //calls action getUid(), dispatch to call action
                const uid = await dispatch('getUid')
                //write in the database (path: users->userId->info(bill, name))
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 100000,
                    name: name
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut()
            commit('clearInfo')
        }
    }
}