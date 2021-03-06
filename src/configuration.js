"use strict";

// 全局变量定义
const path = require("path");

class Configuration {
  constructor() {
    this.path = require("path");
    this.rootDir = path.join(__dirname, "../");
    this.iconDir = path.join(this.rootDir, "icon/");
    this.icon128 = path.join(this.iconDir, "/128.png");
    this.dock32 = path.join(this.iconDir, "/dock/32.png");
    this.darwin_dock16 = path.join(this.iconDir, "/dock/Feishu_16*16.png");
    this.darwin_dock24 = path.join(this.iconDir, "/dock/Feishu_24*24.png");
    this.dock32Empty = path.join(this.iconDir, "/dock/32empty.png");
  }
}

module.exports = new Configuration();
