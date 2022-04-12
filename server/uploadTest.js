const OSS = require("ali-oss");
const fs = require("fs");
const path = require("path");

const client = new OSS({
  bucket: "12306-90du",
  // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
  region: "oss-cn-beijing",
  // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
  accessKeyId: "",
  accessKeySecret: "",
});

async function put(ossSrc, file) {
  try {
    //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let result = await client.put(ossSrc, file);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

function readAndUploadFiles(filePath, ossSrc) {
  fs.readdir(filePath, function (err, fiels) {
    fiels.forEach(function (fileName) {
      var filedir = path.join(filePath, fileName);
      fs.stat(filedir, function (error, stats) {
        const isFile = stats.isFile();
        if (isFile) {
          const src = `${ossSrc}/${fileName}`;
          put(src, filedir);
        } else {
          readAndUploadFiles(filedir, `${ossSrc}/${fileName}`);
        }
      });
    });
  });
}
readAndUploadFiles(path.resolve(__dirname, "../build"), "/TE-analysis");

