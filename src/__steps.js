// 1. Visit console.firebase.google.com
// 2. Create project (skip google analytics)
// 3. Register app(create config)
// 4. Install firebase
// 5. Add config file to your project
// 6. Danger: Do not public or make firebase config to public by pushing github
// 7. visit: Go to docs> Build> Authentication> Web> Get Started> Web and use it
// 8. export app from firebase.config.js file : export default app
// 9. Login.jsx : import getAuth from firebase/auth
// 10. crate const auth = getAuth(app)
// 11. import google authProvider and create new provider: const provider = new GoogleAuthProvider();
// 12. Use signInWithPopup and pass auth and provider  
// 13. Activate SignIn method in firebase project (Google, Facebook, github,...)
// 14. Settings> Authorized Domain> add localhost or run in google start with localhost not ip address(127.0.0.1)
