class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago Gandalf':
                ataque = 'magia';
                break;
            case 'guerreiro Hercules':
                ataque = 'espada';
                break;
            case 'monge Chan':
                ataque = 'artes marciais';
                break;
            case 'ninja Naruto':
                ataque = 'shuriken';
                break;
                case 'pistoleiro Strike':
                    ataque = 'arma de fogo';
                    break;
                    case 'arqueiro Hobby':
                    ataque = 'arco e flecha';
                    break;
                    case 'curandeiro Vic':
                    ataque = 'poção de veneno';
                    break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const meuHeroi = new Heroi('Vic', 50, 'curandeiro Vic');
meuHeroi.atacar(); // Saída: "O mago atacou usando magia"
