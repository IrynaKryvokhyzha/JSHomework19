class SparklingStar{
	constructor(starNum, imgSrc,minSize, maxSize){
		this.starNum = starNum
		this.imgSrc = imgSrc
		this.minSize = minSize
		this.maxSize = maxSize
	}

	getRandomNum(minV, maxV){
		return minV+Math.floor(Math.random()*(maxV-minV+1))
	}
	createStar(){
		for (let i = 0; i < this.starNum; i++) {
			const starImg = document.createElement('img')
			starImg.className = 'star-img'
			starImg.src = this.imgSrc
			starImg.style.left = this.getRandomNum(1,90) + '%'
			starImg.style.top = this.getRandomNum(1,90) + '%'
			starImg.style.width = this.minSize +'%'
			starImg.style.animation = 'star linear infinite 0s'
			starImg.style.animationDuration = this.getRandomNum(3, 5) + 's'


			setInterval(()=>{
				starImg.style.left = this.getRandomNum(1,90) + '%'
				starImg.style.top = this.getRandomNum(1,90) + '%'
				starImg.style.fillMode = 'forwards'
				starImg.style.animationDelay = '0s'
			},3000
			)
			this.targetContainer.append(starImg)
		}
	}
	render(containerId){
		this.targetContainer = document.getElementById(containerId)
		this.createStar()
	}
}

	
let imgSrc = './img/star.png'
window.onload = function(){
	new SparklingStar(100,imgSrc,2).render('star-container')
}