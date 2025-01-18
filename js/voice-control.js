export class VoiceController {
    constructor() {
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
        this.recognition.continuous = true
        this.recognition.interimResults = true
        
        this.commands = {
            'show sun': () => this.showPlanet('sun'),
            'show moon': () => this.showPlanet('moon')
        }
    }

    initVoiceCommands() {
        this.recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            
            this.processCommand(transcript.toLowerCase())
        }

        this.recognition.start()
    }

    processCommand(command) {
        Object.keys(this.commands).forEach(key => {
            if (command.includes(key)) {
                this.commands[key]()
            }
        })
    }

    showPlanet(planetName) {
        console.log(`Showing ${planetName} planet`)
        // Implement planet visualization logic
    }
}
