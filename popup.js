 let changeColor = document.getElementById('changeColor')
 let colJudas = document.getElementById('colJudas')
 let colRoman = document.getElementById('colRoman')
 let btn_Clear = document.getElementById('btn_Clear')

 chrome.storage.sync.get('colorDark', function(data) {
 	changeColor.style.backgroundColor = data.colorDark;
 	changeColor.setAttribute('value', data.colorDark);
   // changeColor.addEventListener('click',changeBg)
});
 chrome.storage.sync.get('colorJudas', function(data) {
 	colJudas.style.backgroundColor = 'black';
 	colJudas.style.color = data.colorJudas
 	colJudas.setAttribute('value', data.colorJudas);
   // changeColor.addEventListener('click',changeBg)
});
 chrome.storage.sync.get('colorRomantic', function(data) {
 	colRoman.style.backgroundColor = 'black';
 	colRoman.style.color = data.colorRomantic
 	colRoman.setAttribute('value', data.colorRomantic);
   // changeColor.addEventListener('click',changeBg)
});

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 	chrome.tabs.executeScript(tabs[0].id,{file: 'contentScript.js'})
	chrome.tabs.insertCSS(tabs[0].id,{file: 'myStyles.css'})
 	changeColor.onclick = function(element) {
 		chrome.tabs.sendMessage(tabs[0].id, {Color: "Dark"}, function(response) {
 			//console.log(response.farewell)
 		})
 	}
 	btn_Clear.onclick = (element) =>{
 		chrome.tabs.sendMessage(tabs[0].id, {Color: "Clear"}, function(response) {
 			//console.log(response.farewell)
 		})
 	}
 	colJudas.onclick =(e) => {
 	chrome.tabs.sendMessage(tabs[0].id, {Color: "Judas"}, function(response) {
 			//console.log(response.farewell)
 		})	
 	}
 	colRoman.onclick =() => {
 	chrome.tabs.sendMessage(tabs[0].id, {Color: "Romantic"}, function(response) {
 			//console.log(response.farewell)
 		})		
 	}
 	chrome.commands.onCommand.addListener(function(command) {
       	chrome.tabs.sendMessage(tabs[0].id, {chat: "hello world"}, function(response) {
 			//console.log(response.farewell)
 		})
 	});
 })




