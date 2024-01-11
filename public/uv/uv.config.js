// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
  bare: "/https://g4m3rs1t3pr3m17m.vercel.app/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
