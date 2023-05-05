class Snowflake{
	constructor(snowflakesNumber, imgSrc){
		this.snowflakesNumber = snowflakesNumber
		this.imgSrc = imgSrc
	}
	getRandomNum(minV, maxV){
		return minV+Math.floor(Math.random()*(maxV-minV+1))
	}

	makeSnow(){
		for (let i = 0; i < this.snowflakesNumber; i++) {
		const snowflakeImg = document.createElement('img')
		snowflakeImg.className = 'snowflake'
		snowflakeImg.src = this.imgSrc

		this.targetContainer.append(snowflakeImg)

		snowflakeImg.style.maxWidth = this.getRandomNum(5, 200) + 'px'
		snowflakeImg.style.animationDelay = '0s'
		snowflakeImg.style.animationDuration = this.getRandomNum(5, 50) + 's'
		snowflakeImg.style.animationIterationCount = "infinite"
		}
	}
	render(containerId){
		this.targetContainer = document.getElementById(containerId)
		this.makeSnow()
	}
}
const imgSrc = './img/snowflake.png'
window.onload = function () {
	new Snowflake(50, imgSrc ).render('snowflake-container')
}