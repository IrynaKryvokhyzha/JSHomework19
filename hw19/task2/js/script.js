let sportsmenList = ['John Depp', 'Sara Wik', 'Den Miro','Alan Woo']
let greenArrowSrc = './img/green.png'
let redArrowSrc = './img/red.png'
class Sportsmen{
	constructor(sportsmenList, greenArrowSrc, redArrowSrc){
		this.sportsmenList = sportsmenList
		this.greenArrowSrc = greenArrowSrc
		this.redArrowSrc = redArrowSrc
		this.chosenList = []
		
	}

	addSportsman(){
		for (const el of this.sportsmenList) {
			
		this.container = document.createElement('div')
		this.container.className = 'item'
		this.container.id = 'list1-cont'
		
		this.titleContainer = document.createElement('div')
		this.titleContainer.className = 'title'

		this.titleContainer.innerText = el
		this.titleContainer.id = 'firstList'
		

		this.container.append(this.titleContainer)

		this.arrowContainer = document.createElement('div')
		this.arrowContainer.className = 'arrow-container'

		this.img = document.createElement('img')
		this.img.src = this.greenArrowSrc
		this.img.onclick = this.optionClick.bind(this, el)

		this.arrowContainer.append(this.img)

		this.container.append(this.arrowContainer)
		
		this.list1Container.append(this.container)
			
		}	
	}
	
	optionClick(sportsman){
		let list = []
		if(this.sportsmenList.includes(sportsman)){
			this.sportsmenList.splice(sportsman, 1)

			list.push(sportsman)
			
			this.chosenList = list

			// console.log(this.chosenList)
			this.addChosenSportsmen()
			this.removeSportsman()
		}
		return this.chosenList
	}

	removeSportsman(){
		const list = document.getElementById( 'list1-cont')
		if(list.parentNode){
			list.parentNode.removeChild(list)
		}

	}
	addChosenSportsmen(){
		const chosenContainer = document.createElement('div')
		chosenContainer.className = 'item'

		this.chosenTitleContainer = document.createElement('div')
		this.chosenTitleContainer.className = 'title'
		this.chosenTitleContainer.innerText = this.chosenList

		chosenContainer.append(this.chosenTitleContainer)

		this.arrowContainer = document.createElement('div')
		this.arrowContainer.className = 'arrow-container'

		this.chosenImg = document.createElement('img')
		this.chosenImg.src = this.redArrowSrc
		// this.chosenImg.onclick = this.optionClick.bind(this)

		this.arrowContainer.append(this.chosenImg)
			
		chosenContainer.append(this.arrowContainer)

		this.list2Container.append(chosenContainer)			
		
	}
	render (targetSelector){
		const mainContainer = document.createElement('div')
		mainContainer.className = 'main-container'

		this.list1Container =  document.createElement('div')
		this.list1Container.className = 'list1-container'
		

		const titleList1 = document.createElement('h3')
		titleList1.className = 'title-list-1'
		titleList1.innerText = 'Main List'
		
		this.list1Container.append(titleList1)

		mainContainer.append(this.list1Container)
		
		this.list2Container = document.createElement('div')
		this.list2Container.className = 'list2-container'
		this.list2Container.id = 'list2-cont'

		const titleList2 = document.createElement('h3')
		titleList2.className = 'title-list-2'
		titleList2.innerText = 'Chosen List'
		this.list2Container.append(titleList2)
		mainContainer.append(this.list2Container)

		document.querySelector(targetSelector).append(mainContainer)
		this.addSportsman()
	
	}
}
window.onload = function(){
	new Sportsmen(sportsmenList, greenArrowSrc, redArrowSrc).render('#container')
}