# 手写一个Loader与Plugin
> Talk is cheep
## Loader
根据options 替换 txt文本字符串并输出

## Plugin
生成一个filelist.md文件，记录构建生成的文件名

## 启动命令
```bash
npm install

npm run test
```

## 目录结构
```bash
|-- dist # 构建成功后输出目录
    |-- bundle.js # 构建输出文件
    |-- filelist.md # 插件输出文件列表文件
|-- src
    |-- loader.js # loader-demo
    |-- plugin.js # plugin-demo
|-- test
    |-- example.txt # 测试源文件
    |-- compiler.js # webpack构建文件
    |-- index.test.js # jest测试文件
```
