const axios = require('axios').default;
const castVote = async (vote, pollId, userId, done) => {
    // TODO: Add in auth before this request
    axios({
        method: 'post',
        url: '/cast',
        baseURL: 'http://localhost:8080',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
        },
        data: {
            pollId,
            userId,
            vote
        }
    }).then((response) => {
        if (response.status === 200){
            done();
        }
    }).catch((err) => {
        console.log(err);
        done();
    });
};
export default castVote;