var fs=require('fs');
var path=require('path');

exports=module.exports=function bulid(inputPath,outputPath){
	var data=dealWithKeyWord(readFile(inputPath),inputPath);
	fs.writeFileSync(outputPath, data);
};

var mainStr='';


function readFile(inputPath){
	return fs.readFileSync(inputPath, {
		encoding:'UTF-8'
	});
}

function dealWithKeyWord(str,dirname){
	var reg=/<%include ([\w]+) %>/g;

	return str.replace(reg,function(m,p1){
		
		return readFile(path.join(path.dirname(dirname),p1+'.ttt'));
	});


}

//console.log(dealWithKeyWord(readFile('test.html')));