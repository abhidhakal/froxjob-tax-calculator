"use client";
import {useState} from "react";

export default function TaxCalculatorPage() {
  const [formData, setFormData] = useState({
    maritalStatus: "",
    incomeType: "Monthly",
    income: "",
    allowance: "",
    others: "",
    deduction: "",
    providentFund: "",
    citizenInvestmentTrust: "",
    socialSecurityFund: "",
    lifeInsurance: "",
    medicalInsurance: "",
    festivalBonus: "",
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.example.com/tax-calc", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally { 
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      maritalStatus: "",
      incomeType: "Monthly",
      income: "",
      allowance: "",
      others: "",
      deduction: "",
      providentFund: "",
      citizenInvestmentTrust: "",
      socialSecurityFund: "",
      lifeInsurance: "",
      medicalInsurance: "",
      festivalBonus: "",
    });
    setResult(null);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Header */}
        <div className="mb-12 pt-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Tax Calculator
          </h1>
        </div>

        {/* Main Calculator Container */}
        <div className="relative">
          {/* Floating Form Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">Enter Your Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Marital Status */}
              <div>
                <label className="block font-semibold text-gray-700 mb-3">Marital Status</label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-64 border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="single">Unmarried</option>
                  <option value="married">Married</option>
                </select>
              </div>

              {/* Section Divider */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Income Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Salary */}
                  <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-2">Basic Salary</label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base"
                        placeholder="35000"
                        required
                      />
                      <select
                        name="incomeType"
                        value={formData.incomeType}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base"
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Annual">Annual</option>
                      </select>
                    </div>
                  </div>

                  {/* Festival Bonus */}
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Festival Bonus</label>
                    <input
                      type="number"
                      name="festivalBonus"
                      value={formData.festivalBonus}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base"
                      placeholder="0"
                    />
                  </div>

                  {/* Allowance */}
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Allowance</label>
                    <input
                      type="number"
                      name="allowance"
                      value={formData.allowance}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base"
                      placeholder="0"
                    />
                  </div>

                  {/* Others */}
                  <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-2">Other Income</label>
                    <input
                      type="number"
                      name="others"
                      value={formData.others}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              {/* Section Divider */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Deductions & Exemptions</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Provident Fund */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block font-semibold text-gray-700 mb-2 text-sm">Provident Fund</label>
                    <input
                      type="number"
                      name="providentFund"
                      value={formData.providentFund}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base bg-white"
                      placeholder="0"
                    />
                  </div>

                  {/* Citizen Investment Trust */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block font-semibold text-gray-700 mb-2 text-sm">Citizen Investment Trust</label>
                    <input
                      type="number"
                      name="citizenInvestmentTrust"
                      value={formData.citizenInvestmentTrust}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base bg-white"
                      placeholder="0"
                    />
                  </div>

                  {/* Social Security Fund */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block font-semibold text-gray-700 mb-2 text-sm">Social Security Fund</label>
                    <input
                      type="number"
                      name="socialSecurityFund"
                      value={formData.socialSecurityFund}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base bg-white"
                      placeholder="0"
                    />
                  </div>

                  {/* Life Insurance */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block font-semibold text-gray-700 mb-2 text-sm">Life Insurance Premium</label>
                    <input
                      type="number"
                      name="lifeInsurance"
                      value={formData.lifeInsurance}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base bg-white"
                      placeholder="0"
                    />
                  </div>

                  {/* Medical Insurance */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block font-semibold text-gray-700 mb-2 text-sm">Medical Insurance Premium</label>
                    <input
                      type="number"
                      name="medicalInsurance"
                      value={formData.medicalInsurance}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base bg-white"
                      placeholder="0"
                    />
                  </div>

                  {/* Other Deductions */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block font-semibold text-gray-700 mb-2 text-sm">Other Deductions</label>
                    <input
                      type="number"
                      name="deduction"
                      value={formData.deduction}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base bg-white"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white font-semibold py-3 px-8 rounded-md hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 shadow-md"
                >
                  {loading ? "Calculating..." : "Calculate Tax"}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-white text-primary font-semibold py-3 px-8 rounded-md border-2 border-primary hover:bg-primary/5 transition-all duration-200 shadow-md"
                >
                  Reset Form
                </button>
              </div>

              {/* Professional Disclaimer */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  <strong>Disclaimer:</strong> This tool is intended for general tax calculation purposes only. The information provided should not be used for any other purpose.
                </p>
              </div>
            </form>
          </div>

          {/* Results Section */}
          {result && (
            <div className="space-y-6">
              {/* Key Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Annual Gross Salary</p>
                  <p className="text-2xl font-bold text-primary">{result?.annualGrossSalary || '0'}</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Taxable Income</p>
                  <p className="text-2xl font-bold text-primary">{result?.taxableIncome || '0'}</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Net Payable Tax</p>
                  <p className="text-2xl font-bold text-primary">{result?.netPayableTax || '0'}</p>
                </div>
              </div>

              {/* Tax Slab Indicator */}
              <div className="bg-primary text-white p-5 rounded-lg shadow-md text-center">
                <p className="text-lg font-semibold">
                  Your Tax slab is: {result?.taxSlab || ''}
                </p>
              </div>

              {/* Tax Slab Details */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Tax Slab Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Taxable Salary</th>
                        <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Taxable Amount</th>
                        <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Tax Rate</th>
                        <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Tax Liability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result?.taxSlabs?.length > 0 ? (
                        result.taxSlabs.map((slab: any, idx: number) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4 text-sm">{slab.name}</td>
                            <td className="py-3 px-4 text-sm">{slab.amount}</td>
                            <td className="py-3 px-4 text-sm">{slab.rate}</td>
                            <td className="py-3 px-4 text-sm">{slab.liability}</td>
                          </tr>
                        ))
                      ) : (
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-400 text-sm">—</td>
                          <td className="py-3 px-4 text-gray-400 text-sm">—</td>
                          <td className="py-3 px-4 text-gray-400 text-sm">—</td>
                          <td className="py-3 px-4 text-gray-400 text-sm">—</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1 font-medium">Net Tax Liability (Yearly)</p>
                    <p className="text-xl font-bold text-primary">{result?.netYearly || '0'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1 font-medium">Net Tax Liability (Monthly)</p>
                    <p className="text-xl font-bold text-primary">{result?.netMonthly || '0'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Duplicate Result Card for Design Review */}
          <div className="space-y-6 mt-8">
            <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">Result Card Copy for Design Review — the original displays after calculation</h3>
            
            {/* Key Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-medium">Annual Gross Salary</p>
                <p className="text-2xl font-bold text-primary">200,000</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-medium">Taxable Income</p>
                <p className="text-2xl font-bold text-primary">80,000</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Net Payable Tax</p>
                <p className="text-2xl font-bold text-primary">45,000</p>
              </div>
            </div>

            {/* Tax Slab Indicator */}
            <div className="bg-primary text-white p-5 rounded-lg shadow-md text-center">
              <p className="text-lg font-semibold">
                Your Tax slab is: upto 10%
              </p>
            </div>

            {/* Tax Slab Details */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Tax Slab Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Taxable Salary</th>
                      <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Taxable Amount</th>
                      <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Tax Rate</th>
                      <th className="py-3 px-4 font-semibold text-gray-700 text-left text-sm">Tax Liability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm">First Slab</td>
                      <td className="py-3 px-4 text-sm">500,000</td>
                      <td className="py-3 px-4 text-sm">1%</td>
                      <td className="py-3 px-4 text-sm">5,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm">Second Slab</td>
                      <td className="py-3 px-4 text-sm">200,000</td>
                      <td className="py-3 px-4 text-sm">10%</td>
                      <td className="py-3 px-4 text-sm">20,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm">Third Slab</td>
                      <td className="py-3 px-4 text-sm">100,000</td>
                      <td className="py-3 px-4 text-sm">20%</td>
                      <td className="py-3 px-4 text-sm">20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1 font-medium">Net Tax Liability (Yearly)</p>
                  <p className="text-xl font-bold text-primary">45,000</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1 font-medium">Net Tax Liability (Monthly)</p>
                  <p className="text-xl font-bold text-primary">3,750</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}