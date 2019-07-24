const fs = require('fs');
const path = require('path')
function crawl(dir){
    if(fs.lstatSync(dir).isDirectory()!==true){
        console.log('->',dir)
        return;
    }else {
        let nextFilesArr = fs.readdirSync(dir)
        console.log('[+'+nextFilesArr.length+']',dir)

        for(let i in nextFilesArr){
            let nextPath = path.join(dir,nextFilesArr[i])
            if(fs.lstatSync(nextPath).isDirectory()!==true){
                console.log('->',nextPath)
            }else {
                crawl(nextPath)
            }
        }
    }
}


crawl('./')