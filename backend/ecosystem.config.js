module.exports = {
    apps: [
        {
            name: 'ai-tools-backend',
            script: 'dist/main.js',
            cwd: '', // 项目路径
            instances: 1, // 多核可以设置为 max
            exec_mode: 'fork', // 或 cluster
            watch: false,
            autorestart: true,
            max_memory_restart: '500M',

            env: {
                DB_HOST: "mysql5.sqlpub.com",
                DB_PORT: "3310",
                DB_USERNAME: "sunsun",
                DB_PASSWORD: "CIFfWtTYEXMzeGNU",
                DB_DATABASE: "nest_test",
                NODE_ENV: "development",
                JWT_SECRET: "sunsun",
                JWT_EXPIRES_IN: "7d",
                PORT: 3333
            },

            env_production: {
                NODE_ENV: 'production',
                DB_HOST: "mysql5.sqlpub.com",
                DB_PORT: "3310",
                DB_USERNAME: "sunsun",
                DB_PASSWORD: "CIFfWtTYEXMzeGNU",
                DB_DATABASE: "nest_test",
                JWT_SECRET: "sunsun",
                JWT_EXPIRES_IN: "7d",
                PORT: 3333,
            },
        },
    ],
};
