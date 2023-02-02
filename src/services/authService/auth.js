import auth, { firebase } from '@react-native-firebase/auth';

class AuthService{
    constructor(){
        this.auth = auth();
    }

    static async login(email, password){
       return await firebase.auth().signInWithEmailAndPassword(email, password);
    }
}

export default AuthService;