const username = encodeURIComponent("dba001-mg2k");
const password = encodeURIComponent("SftTkMDB001");
const cluster = "am-mx-ordermanager.lfhbvb9.mongodb.net";

module.exports = {
    url: `mongodb+srv://${username}:${password}@${cluster}/ordermanager?retryWrites=true&w=majority`
};