module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

// module.exports = {
//   settings: {
//     cors: {
//       enabled: true,
//       origin: ["*"], // Adjust as needed
//     },
//   },
// };

// module.exports = ({ env }) => ({
//   settings: {
//     cors: {
//       enabled: true,
//       origin: ["http://localhost:3000"], // Replace with your client URL
//     },
//   },
// });
