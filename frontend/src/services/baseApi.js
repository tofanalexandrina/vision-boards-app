import axios from 'axios';

//reusable axios instance
const apiClient=axios.create({
    //automatically starts request with backend address
    baseURL: 'http://localhost:5000/api',
    //sends data as json
    headers: {
        'Content-Type':'application/json'
    },
    //includes cookies for login sessions
    withCredentials: true //for backend to recognise the logged-in user - session based auth
});

//add token before each request if user is logged in
apiClient.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token');
    if (token) config.headers.Authorization=`Bearer ${token}`;
    return config;
}, (error)=>{
    return Promise.reject(error);
});

//handle all responses and errors
apiClient.interceptors.response.use(
    (response)=>response.data,
    (error)=>{
        const message=error.response?.data?.message||'Something went wrong';
        console.error('API error:', message);
        return Promise.reject(new Error(message));
    }
);

export default apiClient;