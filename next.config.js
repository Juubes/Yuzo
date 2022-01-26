module.exports = {
    reactStrictMode: true,
    origin: "localhost",
    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*"
                    }
                ]
            }
        ];
    }
};
