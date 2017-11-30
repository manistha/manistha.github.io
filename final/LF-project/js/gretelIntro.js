class GretelIntro{
	constructor(){
		this.element = utils.createElem('div',S_WIDTH,S_HEIGHT,'images/blank.png');
    this.element.style.background = '#000';
    this.element.style.position = 'relative';
    this.element.className = 'screenElem fadeOut';
		this.image = utils.createElem('div','800px','582px','images/gretel-intro.png');
		this.image.style.position = 'absolute';
		this.image.style.top = '76px';
		this.image.style.left = '98px';
    this.element.appendChild(this.image);
    screen.components.push(this.element);

	}
}