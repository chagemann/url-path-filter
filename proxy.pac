function FindProxyForURL(url, host) {
  if (host.endsWith("youtube.com") && url.includes("shorts")) {
    return "PROXY 0.0.0.0:0; // Debug: Host = " + host + ", URL = " + url;
  }
  return "PROXY 0.0.0.0:0; // Debug: Host = " + host + ", URL = " + url;
}
