let fs = require('fs')
const express = require('express');
const path = require('path')
const app = express();

let PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const jsonData = require('./public/data/sample.json');




app.set('view engine','pug');
app.set('views',path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname,'public')));



app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/home',(req,res)=>{
    res.render('index')
})
app.get('/introduction',(req,res)=>{
    res.render('introduction')
})
app.get('/group1', (req,res)=>{
    res.render('group1')
})
app.get('/group2', (req,res)=>{
    res.render('group2')
})
app.get('/group3', (req,res)=>{
    res.render('group3')
})
app.get('/group4', (req,res)=>{
    res.render('group4')
})
app.get('/group5', (req,res)=>{
    res.render('group5')
})


app.get('/ru',(req,res)=>{
    res.render('homeru')
})
app.get('/home_ru',(req,res)=>{
    res.render('indexru')
})
app.get('/introduction_ru',(req,res)=>{
    res.render('introductionru')
})
app.get('/group1_ru', (req,res)=>{
    res.render('group1ru')
})
app.get('/group2_ru', (req,res)=>{
    res.render('group2ru')
})
app.get('/group3_ru', (req,res)=>{
    res.render('group3ru')
})
app.get('/group4_ru', (req,res)=>{
    res.render('group4ru')
})
app.get('/group5_ru', (req,res)=>{
    res.render('group5ru')
})

app.get('/uz',(req,res)=>{
    res.render('homeuz')
})
app.get('/home_uz',(req,res)=>{
    res.render('indexuz')
})
app.get('/introduction_uz',(req,res)=>{
    res.render('introductionuz')
})
app.get('/group1_uz', (req,res)=>{
    res.render('group1uz')
})
app.get('/group2_uz', (req,res)=>{
    res.render('group2uz')
})
app.get('/group3_uz', (req,res)=>{
    res.render('group3uz')
})
app.get('/group4_uz', (req,res)=>{
    res.render('group4uz')
})
app.get('/group5_uz', (req,res)=>{
    res.render('group5uz')
})

app.get('/stat',(req,res)=>{
    res.render('stat',{jsonData})
})

app.listen(PORT, error => {
    if (error) throw error
    console.log(`App is available via http://localhost:${ PORT }`)
})