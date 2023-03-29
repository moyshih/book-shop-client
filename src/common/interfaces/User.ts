interface User {
    id: string
    isAdmin?: boolean
    email: string,
    expirationTime: Date
    issuedAt: Date
}

export default User;