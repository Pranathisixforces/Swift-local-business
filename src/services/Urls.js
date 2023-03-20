
export const LOCAL_HOST="https://prod.swiftbel.com";

export const ServiceEnum={
    register:"user/notify/signup",
    loginUser:'user/notify/login',
}

export const urlFor =(services)=>{
        return `${LOCAL_HOST}/${services}`
}