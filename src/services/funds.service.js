import { createServer } from "miragejs"

function makeServer() {
  createServer({
    routes() {
      this.get("/api/funds", () => {
        console.log('server online')
        let funds = []
        for (let i = 0; i < 15; i++) {
          funds.push({
            id: i,
            name: `Fund ${i}`,
            description: `This is fund ${i}`,
            investmentType: 'Type ' + i,
            performanceHistory: Array.from({length: 5}, (_, j) => ({year: 2024 - j, return: Math.random()})),
            currentNetAssetValue: Math.floor(Math.random() * 1000)
          })
        }
        return JSON.parse(JSON.stringify(funds))
      })
    },
  })
}

export {makeServer};
