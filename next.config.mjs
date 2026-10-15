import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';

const theme = extendTheme({
});

const isProd = process.env.NODE_ENV === "production";
const githubRepositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isProd
  ? process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.GITHUB_ACTIONS === "true" && githubRepositoryName
      ? `/${githubRepositoryName}`
      : "")
  : "";

const nextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withPigment(nextConfig, { theme });
