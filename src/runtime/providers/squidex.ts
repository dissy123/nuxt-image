import { withBase, withQuery } from "ufo";

export function getImage(
  src,
  { modifiers, baseURL } = {},
  { options, nuxtContext, $img }
) {
  const {
    width,
    height,
    mode,
    quality,
    download,
    version,
    format,
    ...providerModifiers
  } = modifiers;

  console.log(modifiers);

  const config = options.providers.squidex.defaults;

  if (config.isSelfHosted == false) {
    baseURL = config.selfHostedBaseURL + config.appName;
  } else {
    baseURL = config.squidexCloudURL + config.appName;
  }

  // process modifiers
  let parameters = {
    width: "",
    height: "",
    mode: "",
    quality: "",
    format: "",
  };

  if (width !== undefined) {
    parameters.width = width;
  }
  if (height !== undefined) {
    parameters.height = height;
  }
  if (mode !== undefined) {
    parameters.mode = mode;
  }
  if (quality !== undefined) {
    parameters.quality = quality;
  }
  if (format !== undefined) {
    parameters.format = format;
  }

  const url = withBase(withQuery(src, parameters), baseURL);

  return {
    url,
  };
}
