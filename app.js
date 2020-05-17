'use strict';

//ファイルを一行ずつ読み込む
//モジュール読み込み
const fs = require('fs');
const readline = require('readline')
//csvからStreamを生成、rlオブジェクト作成
const rs = fs.createReadStream('./popu-pref.csv');
const rl = readline.createInterface({ input: rs, output: {} });

rl.on('line', linerString => {
    const columns = linerString.split(',');
    const year = parseInt(columns[0]);
    const prefecture = columns[1];
    const popu = parseInt(columns[3]);
    if (year === 2010 || year === 2015){
        console.log(year);
        console.log(prefecture);
        console.log(popu);
    }
})

