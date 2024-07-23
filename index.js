const jsonServer=require('json-server')
const MPserver=jsonServer.create()
const router=jsonServer.router('db.json')
const MiddleWare=jsonServer.defaults()
const PORT=4000 || process.env.PORT
MPserver.use(MiddleWare)
MPserver.use(router)

MPserver.listen(PORT,()=>{
    console.log(`todo-sever running at ${PORT}`);
})

