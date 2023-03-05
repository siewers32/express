import { addNewContact, getContacts, getContactWithId, updateContactWithId, deleteContactWithId } from "../controllers/crmController";
import { login, loginRequired, register } from "../controllers/userController"

const routes = (app) => {
    app.route('/test').get((req, res) => res.send({ message: "Yep"}))
    
    app.route('/contact')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, loginRequired, getContacts)
    .post(loginRequired, addNewContact)

    app.route('/contact/:contactId')
    .get(loginRequired, getContactWithId)        
    .delete(loginRequired, deleteContactWithId)
    .put(loginRequired, updateContactWithId)
    
    app.route('/auth/register')
    .post(register);

    app.route('/login')
    .post(login)

}

export default routes