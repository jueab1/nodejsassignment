
let http= require('http')
let fs= require('fs')

let server= http.createServer((req,res)=>{
    let {url}=req

    if (url=="/"){

       let adress= fs.readFileSync ("home.html","UTF-8")
        statuscode=200
        res.setHeader("content-type","text/html")
        res.write(adress)
        res.end()
    }
    else if (url=="/about"){
        let adress= fs.readFileSync ("about.html","UTF-8")
        statuscode=200
        res.setHeader("content-type","text/html")
        res.write(adress)
        res.end()
    }

    else if (url=="/term"){

        let adress= fs.readFileSync ("term.html","UTF-8")
        statuscode=200
        res.setHeader("content-type","text/html")
        res.write(adress)
        res.end()
    }

})
server.listen(5050)
console.log("server run success")