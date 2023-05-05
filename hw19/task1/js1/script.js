class NotebooksCards{
	constructor({label, imgSrc, title, link, price}){
		this.label = label
		this.imgSrc = imgSrc
		this.title = title
		this.link = link
		this.price = price
	}
	onclick(){
		this.cardContainer.style.border = '4px solid green'
	}
	render(containerId){
		this.cardContainer = document.createElement('section')
		this.cardContainer.className = 'card-container'
		this.cardContainer.onclick = this.onclick.bind(this)

		const labelContainer = document.createElement('div')
		labelContainer.className = 'label-container'
		const label = document.createElement('label')
		label.className = 'card-label'
		label.innerText = this.label
		if(this.label === 'Топ продажу') label.style.backgroundColor = 'orange'
		labelContainer.append(label)
		this.cardContainer.append(labelContainer)

		const imageContainer = document.createElement('div')
		imageContainer.className = 'card-image'
		const image = document.createElement('div')
		image.className = 'image'

		const img = document.createElement('img')
		img.src = this.imgSrc
		image.append(img)
		imageContainer.append(image)
		this.cardContainer.append(imageContainer)

		const titleContainer = document.createElement('div')
		titleContainer.className = 'card-title'
		const link = document.createElement('a')
		link.href = this.link
		link.innerText = this.title
		titleContainer.append(link)
		this.cardContainer.append(titleContainer)

		const priceContainer = document.createElement('div')
		priceContainer.className = 'card-price'
		const p = document.createElement('p')
		p.innerText = this.price
		priceContainer.append(p)
		this.cardContainer.append(priceContainer)

		const target = document.getElementById(containerId)
		target.append(this.cardContainer)
	}
}

const cardsSet = [
	{
		label: 'Топ продажу',
		imgSrc: './img1/1.jpg',
		title: 'Lenovo - 2022 - IdeaPad 1i - Browse Laptop Computer - Intel Core i3 - 14.0" HD Display - 4GB Memory - 128GB Storage - Windows 11 in S Mode',
		link: 'https://www.amazon.com/Lenovo-IdeaPad-Computer-i3-14-0-Display/dp/B09YWPDCP6?th=1',
		price: '$244.00'
	},
	{
		label: 'Акція',
		imgSrc: './img1/2.jpg',
		title: 'Lenovo - IdeaPad 3 15" Laptop - Intel Core i3-1005G1-8GB Memory - 256GB SSD - Platinum Grey - 81WE011UUS',
		link: 'https://www.amazon.com/Lenovo-IdeaPad-i3-1005G1-8GB-Platinum-81WE011UUS/dp/B08HYDLVZY?th=1',
		price: '$389.00'
	},
	{
		label: 'Акція',
		imgSrc: './img1/3.jpg',
		title: 'Lenovo Ideapad 5i Pro Laptop, 16" QHD 2.5K IPS Display, Intel Core i5-11300H, GeForce MX450, 8GB RAM, 512GB SSD, IR Camera, Backlit Keyboard, WiFi 6, Windows 11 Home',
		link: 'https://www.amazon.com/Lenovo-5i-Pro-i5-11300H-Keyboard/dp/B09PHYDXCW',
		price: '$595.00'
	},
	{
		label: 'Топ продажу',
		imgSrc: './img1/4.jpg',
		title: '2022 Newest Lenovo IdeaPad 1 Laptop, 14" Anti-Glare Display, Intel Quad-Core Processor, Intel UHD Graphics, 4GB RAM, 256GB PCIe SSD, Windows 11 + Microfiber Cloth',
		link: 'https://www.amazon.com/Lenovo-IdeaPad-Non-Touch-Dual-Core-i3-1005G1/dp/B08NFDW4JS?th=1',
		price: '$249.00'
	}	
]


window.onload = function(){
	for(const cardsData of cardsSet){
	new NotebooksCards(cardsData).render('card-container')
	}
}