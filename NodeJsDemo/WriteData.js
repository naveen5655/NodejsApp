var fs =require ('fs') //fs-file system

var data = "MEAN STACK WEB DEVELOPMENT {WriteData example}"

fs.writeFile("demo.txt", data,(err) =>
{
    if(err)
    {
        console.log(err)
    }
    console.log("Success ... !!")
    
})