export default function authMiddleware(context: any): any {
    if (!context.store.getters['AuthModule/isAuth']) {
        return context.next({
           name: 'auth.login'
        })
    }
   
    return context.next()
}