var fs=require('fs');
var path=require('path');

exports=module.exports=function bulid(inputPath,buf){
    //console.log(buf)
    var data=getInputObjAndRplaceByRightContent(buf,inputPath);
    
    return data;
};




function readFile(inputPath){
    return fs.readFileSync(inputPath, {
        encoding:'UTF-8'
    });
}



function getInputObjAndRplaceByRightContent(str,dirname){
	var reg=/<%include (\w+)(\{[^0]+\})* %>/g;
	
	return str.replace(reg,function(m,p1,p2){
		 var obj=eval('('+p2+')');//获取对象
		
		 var TStr=readFile(path.join(dirname,p1+'.ttt'));
		 return getTTTObjWordAndRplaceByContent(TStr,obj);
	});
}

function getTTTObjWordAndRplaceByContent(Tstr,obj){
	var reg2=/\$\{(\w+)\}/g;
	return Tstr.replace(reg2,function(m,p1){
        	//console.log(p1)
            return obj[p1];
        });
}




