'use strict';
window.addEventListener("load", ()=>load());
let n = 20,
	SlcCoins = new Array;
const load = () => {
	//fetching n coins at pageload
	let coins = fetchAsync(n);
	//after the api responds, the fillSelect function fills the select object with html
	coins.then(data => fillSelect(data));
    createChart();
    document.querySelector("#slc1").addEventListener("change",()=>onSelectChange(document.querySelector("#slc1")));
    document.querySelector("#slc2").addEventListener("change",()=>onSelectChange(document.querySelector("#slc2")));
};

async function fetchAsync (x) {
	let response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit='+x);
	return await response.json();
}
async function fetchSpecificAsync (o) {
	let response = await fetch('https://api.coinmarketcap.com/v1/ticker/'+o+"/");
	return await response.json();
}

const fillSelect = (obj) => {
	let slc1 = document.querySelector("#slc1"),
    	slc2 = document.querySelector("#slc2");
	slc1.innerHTML = "";
	slc2.innerHTML = "";
	for(let i = 0;i<obj.length;i++){
		let e = obj[i];
		slc1.innerHTML += "<option value="+ e.id +">" + e.name + "</option>";
		slc2.innerHTML += "<option value="+ e.id +">" + e.name + "</option>";
	}
	if(obj.length < 100){
		slc1.innerHTML += "<option value='!more!'>More...</option>";
		slc2.innerHTML += "<option value='!more!'>More...</option>";
	}
};

const onSelectChange = (e) => {
	let coin = e.options[e.selectedIndex].value;
	if(coin !== "!more!"){
		let coinData = fetchSpecificAsync(coin);
		coinData.then(data => fillInValues(data,e))
	}else{
		n+=10;
		let coins = fetchAsync(n);
		coins.then(data => fillSelect(data))
	}
};

const fillInValues = (d, e) => {
    let coin = d[0],
		html = "";
    if (SlcCoins.length >= 2){
    	SlcCoins.shift();
	}
    SlcCoins.push([d[0]["price_usd"],d[0]["name"]]);
    checkCoins();
	if(e.id === "slc1"){
		for (let key in coin ){
			if (key === "id" || key === "last_updated") continue;
            else html += "<dd>" + coin[key] + "</dd>";
        }
        document.querySelector("#left").innerHTML = html;
	}else{
        for (let key in coin ){
            if (key === "id" || key === "last_updated") continue;
            else html += "<dd>" + coin[key] + "</dd>";
        }
        document.querySelector("#right").innerHTML = html;
	}
};


//------- [ CHART ] --------
const checkCoins = () => {
	let leftTable = document.querySelector("#left"),
		rightTable = document.querySelector("#right");
	if(rightTable.innerHTML !== "" && leftTable.innerHTML !== ""){
        updateChart(SlcCoins);
	}
};

let chartCanvas,
	coinChart;

const createChart = () => {
	chartCanvas = document.getElementById("chart").getContext("2d");
	coinChart = new Chart(chartCanvas, {
			type: "bar",
			data: {
				labels: ["",""],
				datasets: [{
					label: 'Price',
					data: [1,1],
					backgroundColor: [
						'rgba(1,255,1,1)',
                        'rgba(1,139,139,1)'
					],
                    borderColor: [
                        'rgba(1,255,1,1)',
                        'rgba(1,139,139,1)'
                    ],
                    borderWidth: 1
				}]
			},
			options: {
				legend:{
					labels:{
                    	boxWidth: 0,
						fontFamily: "Courier"
                    }
				}
			}
	});
};

const updateChart = (coins) => {
	coinChart.data.labels.pop();
    coinChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    coinChart.data.labels.pop();
    coinChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    coinChart.update();
    for (let i = coins.length-1;i>=0;i--){
		coinChart.data.labels.push(coins[i][1]);
		coinChart.data.datasets.forEach((dataset) => {
			dataset.data.push(coins[i][0]);
		});
		coinChart.update();
    }

};