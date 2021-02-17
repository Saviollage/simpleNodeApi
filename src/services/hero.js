class HeroService {
    constructor({ heroRepository }) {
        this.heroRepository = heroRepository
    }

    async find(heroId) {
        return this.heroRepository.find(heroId)
    }

    async create(data) {
        return this.heroRepository.create(data)
    }
}

module.exports = HeroService