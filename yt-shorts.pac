function FindProxyForURL(url, host) {
  if (url.includes("shorts")) {
    return "PROXY 0.0.0.0:0";
  }
  return "PROXY 0.0.0.0:0";
}
