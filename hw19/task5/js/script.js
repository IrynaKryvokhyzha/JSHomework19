class Bayraktar{
	constructor( tankImgSrc, explosureImgSrc){
		this.tankImgSrc = tankImgSrc
		this.explosureImgSrc = explosureImgSrc
	}
	getRandomNum(minV,maxV){
		return minV+Math.floor(Math.random()*maxV-minV+1)/5
	}
	optionClick(tank){
		tank.src = this.explosureImgSrc
			setTimeout(() => {
			tank.style.visibility = 'hidden'
			this.createTank()
			}, 250)
	}

	createTank(){
		
		const tank = document.createElement('img')
		tank.className = 'tank-img'
		tank.src = this.tankImgSrc

		tank.onclick = this.optionClick.bind(this,tank)

		tank.style.animationDuration = this.getRandomNum(8,10)+ 's'

		this.targetContainer.append(tank)
	}
	render(containerId){
		this.targetContainer = document.getElementById(containerId)
		this.createTank()
	}
}
const tankImgSrc = './img/tank.png'
const explosureImgSrc = './img/explosure.png'


window.onload = function(){
	for (let i = 0; i < 5; i++) {
	new Bayraktar(tankImgSrc, explosureImgSrc).render('tank-container')
	}
}