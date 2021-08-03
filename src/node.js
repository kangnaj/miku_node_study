/*
 * 2021-08-03 14:25:37
 * @create by: zj
 * @Description: 
 */
// NPM是随同NodeJS一起安装的包管理工具

// let http = require("http")

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content0Type': 'text/plain'})
//   res.end('Hello World\n')
// }).listen (8888);
// console.log('serve running');

//回调函数， 阻塞 按顺序执行
// const fs = require("fs")
// const data = fs.readFileSync('./src/file.txt')
// console.log(data.toString(),"data");
// console.log(1111);

// 非阻塞 不需要按顺序执行
// var fs = require("fs");

// fs.readFile('./src/file.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("程序执行结束!");

// 事件循环
// Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
// Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
// Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
// Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数

// Node.js 使用事件驱动模型

// 引入 events 模块
let events = require('events');

// 创建 eventEmitter 对象

const eventEmitter = new events.EventEmitter()

const connectHandler = function connected() {
  console.log('连接成功');
  eventEmitter.emit('data_received');
}

// 绑定connection事件处理程序
eventEmitter.on('connection', connectHandler)

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
  console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");

// Node.js 事件
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装
// EventEmitter 的核心就 是事件发射与事件监听器功能的封装
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('someEvent', function (arg1, arg2) {
  new Promise((resolve, reject) => {
    resolve()
  }).then(() => {
    console.log('listener1', arg1, arg2);
  })
});
event.on('someEvent', function (arg1, arg2) {
  console.log('listener2', arg1, arg2);
});
event.emit('someEvent', 'byvoid', 1991);


// Buffer类 
// Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
// const buf = new Buffer('www.codingdict.com')
// console.log(buf," buf");


// Stream流，
// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream
const fs = require("fs")
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('./src/file.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

// 写入流
var writedata = 'mikumiku';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(writedata,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> writedata, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

// 管道流： 管道提供了一个输出流到输入流的机制
// 创建一个可读流
var readerStream = fs.createReadStream('./src/file.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

// 链式流 
// 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作
// 压缩 input.txt 文件为 input.txt.gz
var zlib = require('zlib');
fs.createReadStream('output.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('output.txt.gz'));

console.log("文件压缩完成。");

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('output.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");


// Node.js 全局对象  
// Node.js 中能够直接访问到对象通常都是 global 的属性，如 console、process 等

// process, process 是一个全局变量，即 global 对象的属性
// 当前Node.js 进程状态 的对象，提供了一个与操作系统的简单接口
process.stdin.resume();
process.stdin.on('data', function(data) {
process.stdout.write('read from console: ' + data.toString());
});

// process.nextTick(callback) 的功能是为事件循环设置一项任务，Node.js 会在 下次事件循环调响应时调用 callback。


// util util作为Node.js的一个核心模块，能够提供常用函数的集合

// fs 文件系统
// Node.js文件系统被封装在fs模块中，它提供了文件的读取、写入、更名、删除、遍历目录、链接等POSIX文件系统操作。


// Node.js 工具模块
// Node.js系统（OS）模块提供一些与基本的操作系统有关的函数。
// const os = require('os');

// Node.js 路径
// Node.js路径（path）模块包含一系列用于处理和转换文件路径的工具集
// const path = require('path');

// __dirname 总是指向被执行 js 文件的绝对路径

// path.join([path1][, path2][, ...]) ,用于连接所有的参数，并规范化输出路径。
// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// returns
// '/foo/bar/baz/asdf'

// path.resolve([from ...], to),能够将to参数解析为绝对路径。

// Node.js DNS   使用系统底层的特性，完成名字解析，这个过程不需要网络通