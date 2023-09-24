import { createServer } from "miragejs"

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api"

      this.get("/funds", () => {
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
        return funds
      })
    },
  })

  return server
}
