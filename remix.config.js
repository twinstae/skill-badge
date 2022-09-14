/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  server: "./server.ts",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverDependenciesToBundle: [
    /^marked.*/,
  ],
  mdx: async () => {
    const [rehypePrism] = await Promise.all([
      import("@mapbox/rehype-prism").then((mod) => mod.default),
    ]);
    return {
      rehypePlugins: [rehypePrism],
    };
  }
};
