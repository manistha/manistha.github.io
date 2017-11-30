class BlockPuzzle {
    constructor() {
        this.isStarted = 0;
        this.element = utils.createElem('div', S_WIDTH, S_HEIGHT, 'images/block-bg.png');
        this.element.className = 'screenElem';

        screen.components.push(this.element);
        this.light = utils.createElem('div','5px','104px','images/redLight.png')
        this.light.style.position = 'absolute';
        this.light.style.top = ' 212px';
        this.light.style.left = '642px';
        this.clockelement = utils.createElem('div','80px','30px','images/blank.png')
        this.clockelement.style.position = 'absolute';
        this.clockelement.style.top = ' 75px';
        this.clockelement.style.left = '900px';
        this.clockelement.style.color = '#000';
        this.clockelement.style.fontWeight = 'bold'
        this.tilesContainer = utils.createElem('div', '646px', '648px', 'images/blank.png');
        this.tilesContainer.style.background = '#35322c';
        this.tilesContainer.style.borderRadius = '5px';
        this.tilesContainer.style.border = 'solid 2px #5b564b'
        this.tilesContainer.style.position = 'relative';
        this.tilesContainer.style.top = '32px';
        this.tilesContainer.style.left = '92px';
        this.tilesContainer.appendChild(this.light);
        this.element.appendChild(this.tilesContainer);
        let instr = utils.createElem('div', '110px', '400px', 'images/blank.png');
        instr.style.position = 'absolute';
        instr.style.top = '230px';
        instr.style.left = '875px';
        instr.style.fontSize = '18px';
        instr.style.color = '#c6b083'
        this.element.appendChild(instr);
        this.element.appendChild(this.clockelement);

        instr.innerHTML = jData.blockPuzzleIntr;
        this.drawIntialBlock();
    }

    createBlock(type, top, left) {
        if (type === 'SH') {
            this.SHblock = utils.createElem('div', '213px', '105px', 'images/SH-tile.png');
            this.SHblock.style.position = 'absolute';
            this.SHblock.isDown = false;
            this.SHblock.type = 'H';
            this.SHblock.style.top = top + 'px';
            this.SHblock.style.left = left + 'px';
            this.tilesContainer.appendChild(this.SHblock);
            screen.blocks.push(this.SHblock);
        } else if (type === 'SV') {
            this.SVblock = utils.createElem('div', '105px', '213px', 'images/SV-tile.png');
            this.SVblock.style.position = 'absolute';
            this.SVblock.isDown = false;
            this.SVblock.type = 'V';

            this.SVblock.style.top = top + 'px';
            this.SVblock.style.left = left + 'px';
            this.tilesContainer.appendChild(this.SVblock);
            screen.blocks.push(this.SVblock);
        } else if (type === 'LH') {
            this.LHblock = utils.createElem('div', '317px', '105px', 'images/LH-tile.png');
            this.LHblock.style.position = 'absolute';
            this.LHblock.isDown = false;
            this.LHblock.type = 'H';

            this.LHblock.style.top = top + 'px';
            this.LHblock.style.left = left + 'px';
            this.tilesContainer.appendChild(this.LHblock);
            screen.blocks.push(this.LHblock);
        } else if (type === 'LV') {
            this.LVblock = utils.createElem('div', '105px', '317px', 'images/LV-tile.png');
            this.LVblock.style.position = 'absolute';
            this.LVblock.isDown = false;
            this.LVblock.type = 'V';

            this.LVblock.style.top = top + 'px';
            this.LVblock.style.left = left + 'px';
            this.tilesContainer.appendChild(this.LVblock);
            screen.blocks.push(this.LVblock);
        } else if (type === 'R') {
            this.Rblock = utils.createElem('div', '210px', '105px', 'images/redBlock.png');
            this.Rblock.style.position = 'absolute';
            this.Rblock.isDown = false;
            this.Rblock.type = 'R';

            this.Rblock.style.top = top + 'px';
            this.Rblock.style.left = left + 'px';
            this.tilesContainer.appendChild(this.Rblock);
            screen.blocks.push(this.Rblock);
        }


    }

    drawIntialBlock() {
        this.createBlock('SH', 0, 318);
        this.createBlock('LV', 0, 534);
        this.createBlock('SH', 106, 214);
        this.createBlock('SV', 106, 428);
        this.createBlock('SV', 212, 214);
        this.createBlock('SV', 212, 322);
        this.createBlock('SH', 320, 0);
        this.createBlock('SH', 320, 428);
        this.createBlock('SH', 428, 0);
        this.createBlock('SV', 428, 214);
        this.createBlock('LH', 428, 322);
        this.createBlock('SH', 536, 0);
        this.createBlock('LH', 536, 322);
        this.createBlock('R', 212, 0);

        // this.addBlock(this.LVblock,0,534);
        // this.addBlock(this.LVblock,0,534);
        // this.addBlock(this.LVblock,0,534);
        // this.addBlock(this.LVblock,0,534);

    }




}