function FindProxyForURL(url, host) {
  // Check if the URL path contains "/shorts/"
  if (url.includes("shorts")) {
    return "SOCKS5 0.0.0.0:0"; // Redirect to a non-existent proxy to block
  }

  // Allow all other traffic to go directly
  return "DIRECT";
}
