/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "functions/[[path]].js",
  // publicPath: "/build/",
  async mdx(){
    const [remarkToc] = await Promise.all([
      import("remark-toc").then((mod) => mod.default),
    ]);
  
    return {
      remarkPlugins: [remarkToc],
    };
  }
};
