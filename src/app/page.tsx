import TaxCalculatorPage from "./taxcalculator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="min-h-screen flex items-center justify-center">
        <TaxCalculatorPage/>
      </div>
    </div>
  )
}