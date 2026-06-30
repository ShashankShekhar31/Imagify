const requiredEnv = [
    "MONGODB_URI",
    "JWT_SECRET",
    "CLIPDROP_API"
];

requiredEnv.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`${key} environment variable is missing`);
    }
});