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
    var reg=/<%include (\w+)(\{\S+\}) %>/g;

    var reg2=/\$\{(\w+)\}/g;
    
    var one_str=str.replace(reg,function(m,p1,p2){
        var obj=JSON.parse(p2);//获取对象
        var getStr=readFile(path.join(path.dirname(dirname),p1+'.ttt'));
        return getStr.replace(reg2,function(m,p1){
            return obj[p1];
        })
    });


}

//console.log(dealWithKeyWord(readFile('test.html')));