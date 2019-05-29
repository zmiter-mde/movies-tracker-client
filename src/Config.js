class Config {
    static get API() {
        return {
            clientUrl: CLIENT_URL,
            serverUrl: SERVER_URL,
            Movies: SERVER_URL + "movies"
        };
    }
}

export default Config;