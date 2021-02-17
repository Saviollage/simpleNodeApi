class Hero {
    constructor({ name, age, power }) {
        this.id = Math.floor(Math.random() * 1000) + Date.now()
        this.name = name
        this.age = age
        this.power = power
    }

    isValid() {
        const propertyNames = Object.getOwnPropertyNames(this)
        const amountinvalid = propertyNames
            .map(property => (!!this[property]) ? null : `${property} is missing!`)
            .filter(item => !!item)

        return {
            valid: amountinvalid.length === 0,
            error: amountinvalid
        }
    }
}

module.exports = Hero