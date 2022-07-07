export const ifAuthenticated = () => {
    const canAccess = localStorage.getItem('token');
    if(!canAccess) return ('/')
}