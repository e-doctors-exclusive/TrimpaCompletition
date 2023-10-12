module.exports = (connection , DataTypes)=>{
    const User = connection.define("User",{
        name:{
            type : DataTypes.STRING,
        },
        email : {
            type : DataTypes.STRING,
            required : true,
            validate :{
                isEmail : true,
            },
            unique : true,
        },
        password : {
            type : DataTypes.STRING,
            required : true
        },
        phone :{
            type : DataTypes.INTEGER,
            unique : true,
        }
    })
    return User
}