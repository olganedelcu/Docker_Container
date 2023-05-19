// function doPost to handle a HTTP POST request

const doPost = (request = {}) => {
    const { parameter, postData: { contents, type = {} } } = request;
    const { source } = parameter;

    if (type === 'application/json') {
        const jsonData = JSON.parse(contents);
        return ContentService.createTextOutput(JSON.stringify(jsonData));
    }

    if (type === 'application/x-www-form-urlencoded') { 
        const json = {};
        contents
        .split('&')
        .map((input) => input.split('='))
        .forEach(([key, value]) => {
            json[decodeURIComponent(key)] = decodeURIComponent(value);
        });
        return ContentService.createTextOutput(JSON.stringify(json));
    }

    return ContentService.createTextOutput(contents);
};