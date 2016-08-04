## 另类的前端模板

> 节省人力

### 使用
分两种版本，一个是gulp的插件，一个是开箱即用。

开箱即用:

文件目录如图所示：
./input/
![](http://7xpser.com1.z0.glb.clouddn.com/QQ%E6%88%AA%E5%9B%BE20160804113815.png)
```
//test.js
var t=require('t');
t('input/test.html','output/test.html');

```
```
//test.html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<%include test{
	p:123
} %>

</body>
</html>

```
除此之外你要在input目录下创建一个test.ttt的文件他的内容如下
```
<p>${p}</p>

```
你将会在output下得到一个test.html

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<p>123</p>

</body>
</html>

```

 gulp的插件：
 
创建文件都是相同的，用法稍微有点不同，可以不用一个一个文件写，可以这样：
```
var gulp = require('gulp');
var t = require('../src/index.js');

gulp.task('default',function(){
	gulp.src('./input/*.html')
	.pipe(t('./input/'))
	.pipe(gulp.dest('./output/'));
})

```

### API
 开箱即用：
 
t(inputPath,outPath)
inputPath:path
output:同上


 gulp
 
t(inputdirname)
inputdiraname:dirname

### 声明
因为目前能力不足，可能有不完善的地方欢迎反馈bug，Email：xwt2101239@gamil.com
