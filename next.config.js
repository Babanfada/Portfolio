/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn2.thecatapi.com", "via.placeholder.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;

// next.config.js
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn2.thecatapi.com",
//         port: "",
//         pathname: "/v1/images/search?limit=10",
//       },
//     ],
//   },
// };
