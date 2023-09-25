const request = require('request');
const key = 'insertkeyhere';
module.exports = {
    key: key,
    getCompanyList: (callback) => {
        let options = {
            url: 'http://info.sweettracker.co.kr/api/v1/companylist?t_key='+key,
            headers:{
                accept: "application/json;charset=UTF-8"
            }
        };

        request(options, callback)
    },

};