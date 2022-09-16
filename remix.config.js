/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
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
