 const config = {
    API: () => "https://hr-mgt.onrender.com",
    LOCAL_API: () => "http://localhost:5000/api/v1"
}

export const getConfig = () => {    
    return config.API();   // comment when you are working with local server
    // return config.LOCAL_API(); // commet when you want to push your code to the repo
}

