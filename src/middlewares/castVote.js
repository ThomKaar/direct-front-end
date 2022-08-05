const axios = require('axios').default;
const castVote = async (vote, pollId, userId, done) => {
    // TODO: Add in auth before this request
    axios.post('http:localhost:8080/cast', {
        pollId,
        userId,
        vote
    }).then((response) => {
        console.log(response);
        done();
    }).catch((err) => {
        console.log(err);
        done();
    });
};
export default castVote;