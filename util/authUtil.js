
export const getAuthToken = () => {

    if (typeof window !== 'undefined' && window.localStorage) {
        const token = localStorage.getItem("token");
        if (!token) {
            return null;
           }
        return token
      }
      

};