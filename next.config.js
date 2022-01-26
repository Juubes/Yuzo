module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["i1.sndcdn.com"]
    },
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
