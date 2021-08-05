/*
 * 2021-08-04 09:28:28
 * @create by: zj
 * @Description: 
 */

// 1. 引入 url 模块
let url = require("url");

//  开启HTTP服务
let http = require("http")

//  用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {

  /**
   * parse 方法需要两个参数：
   * 第一个参数是地址
   * 第二个参数是 true 的话表示把 get 传值转换成对象
   */
  // var result = url.parse(req.url, true);
  // console.log(result);
  /**
   * Url {
   *   protocol: null,
   *   slashes: null,
   *   auth: null,
   *   host: null,
   *   port: null,
   *   hostname: null,
   *   hash: null,
   *   search: '?userName=jsliang&userAge=23',
   *   query: { userName: 'jsliang', userAge: '23' },
   *   pathname: '/',
   *   path: '/?userName=jsliang&userAge=23',
   *   href: '/?userName=jsliang&userAge=23' }
   */

   let pathName = req.url;

   // 默认加载路径
   if (pathName == "/") {
     // 默认加载的首页
     pathName = "index.html";
   }
   
  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html; charset=UTF-8"
  })

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(3000); // 监听的端口