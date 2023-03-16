/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: "pk.eyJ1IjoibW9zaGVieTEyIiwiYSI6ImNsYm0ydGF4MTBkMXIzb255dHlmOXFtbG0ifQ.SySlQi-jUXE7B6kQXINRxQ",
  },
};

module.exports = nextConfig;
