export class PlanetaryBlockchain {
    constructor() {
        this.chain = []
        this.difficulty = 4
    }

    createGenesisBlock() {
        return {
            index: 0,
            timestamp: Date.now(),
            data: 'Genesis Block',
            previousHash: '0'
        }
    }

    calculateHash(block) {
        const crypto = require('crypto')
        return crypto.createHash('sha256')
            .update(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data))
            .digest('hex')
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.chain[this.chain.length - 1].hash
        newBlock.hash = this.calculateHash(newBlock)
        this.chain.push(newBlock)
    }

    validateChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i - 1]

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }
        return true
    }
}
