const express =require ('express')
const path = require('path');
const app =express();

const distPath = path.join(__dirname, '..', 'build');
const PORT =process.env.PORT || 3000;

app.use(express.static(distPath));
app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

app.listen(PORT, ()=>{
    console.log('server is listening on port: ${PORT}');
});