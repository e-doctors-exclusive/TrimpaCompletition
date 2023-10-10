module.exports = (connection , DataTypes)=>{
    const User = connection.define("User",{
        name:{
            type : DataTypes.STRING,
            required : true,
        },
        email : {
            type : DataTypes.STRING,
            required : true,
            validate :{
                isEmail : true,
            },
            uniqure : true,
        },
        password : {
            type : DataTypes.STRING,
            required : true,
        }
    })
    return User
}