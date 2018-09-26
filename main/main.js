module.exports = function main(input) {
	let lcdNum = num2Lcd(input);
	console.log(lcdNum);
    return lcdNum;
};

function num2Lcd(input){
	var output = [];
	var actual = [];
	var row1 = [];
	var row2 = [];
	var row3 = [];
	var lcd = [];
	var len = input.length;
	var i, j;
	// 计算字符串中个数字对应的lcd形式
	for(i=0; i<len; i++) {
		if(input[i] === "0") {
			lcd = ['._.', '|.|', '|_|'];
		} else if(input[i] === "1") {
			lcd = ['...', '..|', '..|'];
		} else if(input[i] === "2") {
			lcd = ['._.', '._|', '|_.'];
		} else if(input[i] === "3") {
			lcd = ['._.', '._|', '._|'];
		} else if(input[i] === "4") {
			lcd = ['...', '|_|', '..|'];
		} else if(input[i] === "5") {
			lcd = ['._.', '|_.', '._|'];
		} else if(input[i] === "6") {
			lcd = ['._.', '|_.', '|_|'];
		} else if(input[i] === "7") {
			lcd = ['._.', '..|', '..|'];
		} else if(input[i] === "8") {
			lcd = ['._.', '|_|', '|_|'];
		} else if(input[i] === "9") {
			lcd = ['._.', '|_|', '..|'];
		} else {
			console.log('Illegal input');
			lcd = ['._.', '|.|', '|_|']; // 非法字符显示“0”
		}
		output.push(lcd);
	}
	// 数组重排
	for(i=0; i<len; i++) {
	    row1.push(output[i][0]);	
	}
	actual.push(row1.join(' '));
	for(i=0; i<len; i++) {
	    row2.push(output[i][1]);	
	}
	actual.push(row2.join(' '));
	for(i=0; i<len; i++) {
	    row3.push(output[i][2]);	
	}
	actual.push(row3.join(' '));
	
	actual = actual.join('\n') + '\n';
	return actual;
}

