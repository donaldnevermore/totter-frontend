module.exports = {
    webpack: {
        configure: {
            resolve: {
                extensionAlias: {
                    ".js": [".ts", ".tsx", ".js", ".jsx"],
                    ".mjs": [".mts", ".mjs"],
                    ".cjs": [".cts", ".cjs"],
                }
            }
        }
    }
}
