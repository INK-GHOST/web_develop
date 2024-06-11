// backend/app.js
const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const bodyParser = require('body-parser');
const questions = require('./server_questions');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 设置静态文件夹，用于存放 HTML 文件
app.use(express.static('public'));

// 处理 low.html 页面的路由
app.get('/result/zlxuqmyr', (req, res) => {
    res.sendFile('zlxuqmyr.html', { root: __dirname + '/public' });
});

// 处理 medium.html 页面的路由
app.get('/result/hlybhfdo', (req, res) => {
    res.sendFile('hlybhfdo.html', { root: __dirname + '/public' });
});

app.get('/result/hlybyixwyrff', (req, res) => {
    res.sendFile('hlybyixwyrff.html', { root: __dirname + '/public' });
});

// 处理 high.html 页面的路由
app.get('/result/yrffyijn', (req, res) => {
    res.sendFile('yrffyijn.html', { root: __dirname + '/public' });
});


app.post('/submit', (req, res) => {
    const formData = req.body;

    // 将问卷结果映射到字典
    const mapping = {
        '1': '强烈反对',
        '2': '反对',
        '3': '比较反对',
        '4': '中立/不知道',
        '5': '比较同意',
        '6': '同意',
        '7': '强烈同意'
    };
    //用于文本文件的输出
    //const result = {};
    //for (const q of Object.values(questions)) {
    //    result[q.id] = q.text + '\t' + " 用户回答：" + mapping[formData[q.id]];
    //}

    // 映射问卷结果
    const result = Object.values(questions).map(q => `${q.text},${mapping[formData[q.id]]}`);
    result.unshift('Question,User Response'); // 添加 CSV 标题

    // 输出到 CSV 文件
    const outputCsv = result.join('\n');
    fs.writeFileSync('output.csv', outputCsv);

    // 在控制台输出结果
    console.log(result);

    // 计算总得分
    let totalScore = 0;
    for (const q of Object.values(formData)) {
        totalScore += parseInt(q); // 将选项数字解析为整数并累加到总得分中
    }

    // 根据总得分跳转到不同的结果页面
    let redirectPage = '';
    if (totalScore <= 10) {
        redirectPage = '/result/zlxuqmyr'; // 根据不同的得分范围设置不同的结果页面路径
    } else if (totalScore <= 20) {
        redirectPage = '/result/hlybhfdo';
    } else if (totalScore <= 30) {
        redirectPage = '/result/hlybyixwyrff'
    } else {
        redirectPage = '/result/yrffyijn';
    }

    // 发送重定向响应
    res.redirect(redirectPage);
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});