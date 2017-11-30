/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_script_js__ = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const utils = {
    getRandom: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    createElem: (tag, width, height, bg) => {
        element = document.createElement(tag);
        element.style.width = width;
        element.style.height = height;
        element.style.background = 'url("' + bg + '")';
        element.style.margin = '0px';
        element.style.padding = '0px';
        return element;
    }
}
let main = document.getElementById('puzzleWrapper');

const Main_WIDTH = '960px';
const Main_HEIGHT = '540px';
const w =parseInt(Main_WIDTH);
const h =parseInt(Main_HEIGHT);

class Game {
    constructor() {
        this.element = utils.createElem('div', Main_WIDTH, Main_HEIGHT, 'images/riddle-bg.png');
        this.element.style.position = 'relative';
    }

    init() {
        main.appendChild(this.element);
        let saints = [];
        let devils = [];
        this.saint1 = new Saint('20px', '300px');
        saints.push(this.saint1);
        this.saint2 = new Saint('45px', '300px');
        saints.push(this.saint2);
        this.saint3 = new Saint('70px', '300px');
        saints.push(this.saint3);
        this.devil1 = new Devil('100px', '300px');
        devils.push(this.devil1);
        this.devil2 = new Devil('140px', '300px');
        devils.push(this.devil2)
        this.devil3 = new Devil('180px', '300px');
        devils.push(this.devil3)
        this.boat = new Boat('235px', '373px');
        this.go = new Go();
        let passenger =0;
        saints.forEach((saint) =>{
        	saint.element.onclick = () => {
        	if (saint.state === 0 && this.boat.state === 0 && passenger<2){
	        	let x = parseInt(saint.element.style.left);
						let y =-40;
	  				saint.element.style.left = x+'px';
	  				saint.element.style.top = y+ 'px';
	  				saint.element.style.background = 'url("images/1saint-sit.png")'
	  				game.element.removeChild(saint.element);
	  				this.boat.element.appendChild(saint.element);
	  				saint.state = 1;
	  				passenger++;
        	}	

        	else if (saint.state === 1 && this.boat.state === 0){
	        	let x = parseInt(saint.element.style.left);
						let y =300;
	  				saint.element.style.left = x +'px';
	  				saint.element.style.top = y + 'px';
	  				saint.element.style.background = 'url("images/1saint.png")'
	  				this.boat.element.removeChild(saint.element);
	  				game.element.appendChild(saint.element);
	  				saint.state = 0;
	  				passenger--;
        	}	

        	else if(saint.state === 1 && this.boat.state === 1){
        		let x = parseInt(saint.element.style.left)+850;
						let y =300;
	  				saint.element.style.left = x +'px';
	  				saint.element.style.top = y + 'px';
	  				saint.element.style.background = 'url("images/1saint.png")'
	  				this.boat.element.removeChild(saint.element);
	  				game.element.appendChild(saint.element);
	  				saint.state = 0;
	  				passenger--;
        	}
        	else if(saint.state === 0 && this.boat.state === 1 && passenger<2){
        		let x =parseInt(saint.element.style.left)-850;
						let y =-40;
	  				saint.element.style.left = x +'px';
	  				saint.element.style.top = y + 'px';
	  				saint.element.style.background = 'url("images/1saint-sit.png")'
	  				game.element.removeChild(saint.element);
	  				this.boat.element.appendChild(saint.element);
	  				saint.state = 1;
	  				passenger++;
        	}

        	}
        })
        devils.forEach((devil) =>{
        	devil.element.onclick = () => {
	        	if (devil.state === 0 && this.boat.state === 0 && passenger<2){
						let x= parseInt(devil.element.style.left)-100;
						let y =-45;
	  				devil.element.style.left = x+'px';
	  				devil.element.style.top = y+ 'px';
	  				devil.element.style.background = 'url("images/1devil-sit.png")'
	  				game.element.removeChild(devil.element);
	  				this.boat.element.appendChild(devil.element);
	  				devil.state =1;
	  				passenger++;
	        	}

        	else if (devil.state === 1 && this.boat.state === 0){
	        	let x = parseInt(devil.element.style.left)+100;
						let y =300;
	  				devil.element.style.left = x +'px';
	  				devil.element.style.top = y + 'px';
	  				devil.element.style.background = 'url("images/1devil.png")'
	  				this.boat.element.removeChild(devil.element);
	  				game.element.appendChild(devil.element);
	  				devil.state = 0;
	  				passenger--;
        	}	

        	else if(devil.state === 1 && this.boat.state === 1){
        		let x = parseInt(devil.element.style.left)+750;
						let y = 300;
	  				devil.element.style.left = x +'px';
	  				devil.element.style.top = y + 'px';
	  				devil.element.style.background = 'url("images/1devil.png")'
	  				this.boat.element.removeChild(devil.element);
	  				game.element.appendChild(devil.element);
	  				devil.state = 0;
	  				passenger--;
        	}

        	else if(devil.state === 0 && this.boat.state === 1 && passenger<2){
        		let x =parseInt(devil.element.style.left)-750;
						let y =-45;
	  				devil.element.style.left = x +'px';
	  				devil.element.style.top = y + 'px';
	  				devil.element.style.background = 'url("images/1devil-sit.png")'
	  				game.element.removeChild(devil.element);
	  				this.boat.element.appendChild(devil.element);
	  				devil.state = 1;
	  				passenger++;
        	}
        }
        })

        this.go.element.onclick =() =>{
        	if(this.boat.state === 0 && passenger<=2 && passenger > 0){
        		let x = parseInt(this.boat.element.style.left) +300;
        		this.boat.element.style.left= x +'px';
        		this.boat.state =1;
        	}

        	else if(this.boat.state === 1 && passenger<=2 && passenger > 0){
        		let x = parseInt(this.boat.element.style.left) -300;
        		this.boat.element.style.left= x +'px';
        		this.boat.state =0;
        	}



        }        
    }


}

class Saint {
    constructor(sLeft, sTop) {
        this.element = utils.createElem('div', '31px', '80px', 'images/1saint.png');
        this.element.style.position = 'absolute';
        this.element.style.left = sLeft;
        this.element.style.top = sTop;
        this.state = 0;
        game.element.appendChild(this.element);
    }
}


class Devil {
    constructor(dLeft, dTop) {
        this.element = utils.createElem('div', '62px', '89px', 'images/1devil.png');
        this.element.style.position = 'absolute';
        this.element.style.left = dLeft;
        this.element.style.top = dTop;
        this.state = 0;
        game.element.appendChild(this.element);
    }

}
/* unused harmony export Devil */


class Boat {
    constructor(bLeft, bTop) {
        this.element = utils.createElem('div', '182px', '51px', 'images/1boat.png');
        this.element.style.position = 'absolute';
        this.element.style.left = bLeft;
        this.element.style.top = bTop;
        this.state = 0;
        game.element.appendChild(this.element);
    }

}


class Go {
    constructor() {
        this.element = utils.createElem('div', '80px', '65px', 'images/go.png');
        this.element.style.position = 'absolute';
        this.element.style.left = (w/2-40) +'px';
        this.element.style.top = (20) + 'px';
        game.element.appendChild(this.element);
    }
}

let game = new Game();
game.init();

/***/ })
/******/ ]);