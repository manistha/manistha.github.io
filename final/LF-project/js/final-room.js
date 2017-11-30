	class LastRoom {
		constructor(){
			this.element = utils.createElem('div',S_WIDTH,S_HEIGHT,'images/last.png');
			this.element.style.position = 'absolute';
      screen.components.push(this.element);
      this.element.className = 'screenElem';

		}
	}