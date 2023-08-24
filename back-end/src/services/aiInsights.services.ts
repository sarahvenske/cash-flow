// import { totalInvestmentService } from "./totalInvestment.services"

const aiInsightsServices = () => {
  // In this scenario, the investment data can be sent to the AI url and the AI can respond with investments products.

  //   const totalInvested = totalInvestmentService()

  //   const aiResponse = await axios.get(
  //     `https://api.com/ai-insight/${totalInvested}`
  //   )

  const aiResponse = ["Stocks Market", "Bonds", "Investment Funds", "Crypto"]

  return aiResponse
}

export { aiInsightsServices }
