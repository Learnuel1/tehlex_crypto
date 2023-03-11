 const config = {
    API: () => "https://tehlex.onrender.com/api/v1",
    LOCAL_API: () => "http://localhost:4000/api/v1"
}

export const getConfig = () => {    
    return config.API();   // comment when you are working with local server
    // return config.LOCAL_API(); // commet when you want to push your code to the repo
}

