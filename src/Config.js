class Config {
    static get API() {
        return {
            clientUrl: CLIENT_URL,
            serverUrl: SERVER_URL,
            Movies: {
                All: SERVER_URL + "movies/all",
                MyWatchList: SERVER_URL + "movies/my-watch-list",
                Search: SERVER_URL + "movies/search"
            }
        };
    }
}

export default Config;