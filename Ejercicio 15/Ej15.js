const users = [ {
    username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
];
const premiumUsers = users.filter(function(user){
    return user.premium==true
})
for (const usuarios of premiumUsers){
    console.log("El usuario: "+usuarios.username+" es cliente premium")
}
const nopremiumUsers = users.filter(function(noUser){
    return noUser.premium==false
})
console.log(nopremiumUsers)
