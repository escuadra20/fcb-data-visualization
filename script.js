console.log("hello world")
//date element
const dateElement = document.getElementById('date');

console.log(dateElement);

// generate current date
let currentDate = new Date();

console.log(currentDate);

// format of date

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', {year: "numeric", month: "long", day: "numeric"});

// twitter trend API

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '0eb94a19d3mshd7d627688409878p166d12jsnfc2e147427b6',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: "23424934"})
};

// fetch method send request to an API
fetch(url, options)
.then(res => res.json())
.then(result => {
	console.log(result)

	// for looping to get the 10 trending topics
	let trendingTopics = [];
	for(let i = 0; i<10; i++){
		trendingTopics.push(result.trends[i]);
	}


	// topics will be an array that contains the list of all trending topics:
	let topics = trendingTopics.map(topic => {
		return topic.name;
	})

	console.log(topics);

	let volumes = trendingTopics.map(topic => {
		return topic.volume;
	})

	console.log(volumes);

	const myChart = document.getElementById("myChart");

	let barChart = new Chart(myChart, {
	        type: 'bar',
	        data: {
	          labels: topics,
	          datasets: [{
	            label: '# of tweets/xeets',
	            data: volumes,
	            borderWidth: 2,
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(255, 159, 64, 0.2)',
	                'rgba(255, 205, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(201, 203, 207, 0.2)'
	            ],
	            borderColor: [
	                'rgb(255, 99, 132)',
	                'rgb(255, 159, 64)',
	                'rgb(255, 205, 86)',
	                'rgb(75, 192, 192)',
	                'rgb(54, 162, 235)',
	                'rgb(153, 102, 255)',
	                'rgb(201, 203, 207)'
	            ],
	            hoverBackgroundColor: [
	                'rgb(255, 99, 132)',
	                'rgb(255, 159, 64)',
	                'rgb(255, 205, 86)',
	                'rgb(75, 192, 192)',
	                'rgb(54, 162, 235)',
	                'rgb(153, 102, 255)',
	                'rgb(201, 203, 207)'
	            ]
	          }]
	        },
	        options: {
	          indexAxis: 'y',
	          scales: {
	            y: {
	              beginAtZero: true
	            }
	          }
	        }
	    });
})



// BELOW IS SAMPLE DATA FOR GRAPHS
// let myPost = {
// 	name : "PacquiaoVsBarrios",
// 	query: "Pacquiao+Vs+Barrios",
// 	url: "search?q=%22Pacquiao+VS+Barrios%22",
// 	volume: 54000
// }

// call the specific data on fetch
// console.log(myPost.name);
// console.log(myPost.query);
// console.log(myPost.url);
// console.log(myPost.volume);

// let graphData = [
// 	{
// 		name : "PacquiaoVsBarrios",
// 		query: "Pacquiao+Vs+Barrios",
// 		url: "search?q=%22Pacquiao+VS+Barrios%22",
// 		volume: 54000
// 	},
// 	{
// 		name : "BiniConcert",
// 		query: "Bini+Concert",
// 		url: "search?q=%Bini+Concert%22",
// 		volume: 100000
// 	},
// 	{
// 		name : "BlackpinkConcert",
// 		query: "Black+pin+kConcert",
// 		url: "search?q=%Black+pin+kConcert%22",
// 		volume: 200000
// 	}
// ]

// console.log(graphData[1].name);

