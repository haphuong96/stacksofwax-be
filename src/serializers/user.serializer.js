function transformUser(data) {
    const { password, ...rest} = data;
    return {...rest}; 
}

module.exports = { transformUser };