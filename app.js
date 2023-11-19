let fs = require('fs')
const express = require('express');
const path = require('path')
const app = express();

let PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const jsonData = require('./public/data/Information.json');
const jsonData1 = require('./public/data/Information1.json');
const jsonData2 = require('./public/data/Information2.json');
const jsonData3 = require('./public/data/Information3.json');
const jsonData4 = require('./public/data/Information4.json');
const jsonData5 = require('./public/data/Information5.json');
const jsonDataRu = require('./public/data/Informationru.json');
const jsonDataRu1 = require('./public/data/Informationru1.json');
const jsonDataRu2 = require('./public/data/Informationru2.json');
const jsonDataRu3 = require('./public/data/Informationru3.json');
const jsonDataRu4 = require('./public/data/Informationru4.json');
const jsonDataRu5 = require('./public/data/Informationru5.json');
const jsonDataUz = require('./public/data/Informationuz.json');
const jsonDataUz1 = require('./public/data/Informationuz1.json');
const jsonDataUz2 = require('./public/data/Informationuz2.json');
const jsonDataUz3 = require('./public/data/Informationuz3.json');
const jsonDataUz4 = require('./public/data/Informationuz4.json');
const jsonDataUz5 = require('./public/data/Informationuz5.json');


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

app.get('/stat_all',(req,res)=>{
    res.render('stat',{jsonData})
})
app.get('/stat-group1',(req,res)=>{
    res.render('stat1',{jsonData1})
})
app.get('/stat-group2',(req,res)=>{
    res.render('stat2',{jsonData2})
})
app.get('/stat-group3',(req,res)=>{
    res.render('stat3',{jsonData3})
})
app.get('/stat-group4',(req,res)=>{
    res.render('stat4',{jsonData4})
})
app.get('/stat-group5',(req,res)=>{
    res.render('stat5',{jsonData5})
})

app.get('/stat_ru',(req,res)=>{
    res.render('statrus',{jsonDataRu})
})
app.get('/stat-group1_ru',(req,res)=>{
    res.render('statrus1',{jsonDataRu1})
})
app.get('/stat-group2_ru',(req,res)=>{
    res.render('statrus2',{jsonDataRu2})
})
app.get('/stat-group3_ru',(req,res)=>{
    res.render('statrus3',{jsonDataRu3})
})
app.get('/stat-group4_ru',(req,res)=>{
    res.render('statrus4',{jsonDataRu4})
})
app.get('/stat-group5_ru',(req,res)=>{
    res.render('statrus5',{jsonDataRu5})
})

app.get('/stat_uz',(req,res)=>{
    res.render('statuz',{jsonDataUz})
})
app.get('/stat-group1_uz',(req,res)=>{
    res.render('statuz1',{jsonDataUz1})
})
app.get('/stat-group2_uz',(req,res)=>{
    res.render('statuz2',{jsonDataUz2})
})
app.get('/stat-group3_uz',(req,res)=>{
    res.render('statuz3',{jsonDataUz3})
})
app.get('/stat-group4_uz',(req,res)=>{
    res.render('statuz4',{jsonDataUz4})
})
app.get('/stat-group5_uz',(req,res)=>{
    res.render('statuz5',{jsonDataUz5})
})
app.listen(PORT, error => {
    if (error) throw error
    console.log(`App is available via http://localhost:${ PORT }`)
})