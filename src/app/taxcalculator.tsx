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
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Tax Form - Left Side */}
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 shadow-md rounded-lg p-6 space-y-4">
          <h1 className="text-2xl font-bold text-primary">Calculate your Personal Income TAX</h1>
          <p className="text-sm text-gray-600">
            This tax calculator tool is designed as per the new salary tax which was announced during Budget Announcement of 2080/2081.
          </p>

          <div className="space-y-4">
            {/* Marital Status */}
            <div>
              <label className="block font-medium mb-1">Marital Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select Status</option>
                <option value="single">Unmarried</option>
                <option value="married">Married</option>
              </select>
            </div>

            {/* Income Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Income</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Salary */}
                <div>
                  <label className="block font-medium mb-1">Salary</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                      placeholder="35000"
                      required
                    />
                    <select
                      name="incomeType"
                      value={formData.incomeType}
                      onChange={handleChange}
                      className="border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Annual">Annual</option>
                    </select>
                  </div>
                </div>

                {/* Festival Bonus */}
                <div>
                  <label className="block font-medium mb-1">Festival Bonus</label>
                  <input
                    type="number"
                    name="festivalBonus"
                    value={formData.festivalBonus}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>

                {/* Allowance */}
                <div>
                  <label className="block font-medium mb-1">Allowance</label>
                  <input
                    type="number"
                    name="allowance"
                    value={formData.allowance}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>

                {/* Others */}
                <div>
                  <label className="block font-medium mb-1">Others</label>
                  <input
                    type="number"
                    name="others"
                    value={formData.others}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Deduction Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Deduction</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Provident Fund */}
                <div>
                  <label className="block font-medium mb-1">Provident Fund</label>
                  <input
                    type="number"
                    name="providentFund"
                    value={formData.providentFund}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>

                {/* Citizen Investment Trust */}
                <div>
                  <label className="block font-medium mb-1">Citizen Investment Trust</label>
                  <input
                    type="number"
                    name="citizenInvestmentTrust"
                    value={formData.citizenInvestmentTrust}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>

                {/* Social Security Fund */}
                <div>
                  <label className="block font-medium mb-1">Social Security Fund</label>
                  <input
                    type="number"
                    name="socialSecurityFund"
                    value={formData.socialSecurityFund}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>

                {/* Life Insurance */}
                <div>
                  <label className="block font-medium mb-1">Life Insurance</label>
                  <input
                    type="number"
                    name="lifeInsurance"
                    value={formData.lifeInsurance}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>

                {/* Medical Insurance */}
                <div>
                  <label className="block font-medium mb-1">Medical Insurance</label>
                  <input
                    type="number"
                    name="medicalInsurance"
                    value={formData.medicalInsurance}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>

                {/* Deduction */}
                <div>
                  <label className="block font-medium mb-1">Deduction</label>
                  <input
                    type="number"
                    name="deduction"
                    value={formData.deduction}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-primary text-white font-bold py-2 rounded hover:bg-secondary transition-colors"
            >
              {loading ? "Calculating..." : "Calculate Tax"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-white text-primary font-bold py-2 rounded border-2 border-primary hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Note */}
          <p className="text-xs text-gray-500 text-center">
            Note: This tool is made for general tax calculation only. Information from this tool should not be used for any other purpose.
          </p>
        </form>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px bg-gray-300"></div>

      {/* Result Card - Right Side */}
      <div className="flex-1">
        <div className="space-y-4">
          {/* Summary Results */}
          <div className="bg-white text-black border border-gray-200 shadow-md rounded-lg p-6">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Annual Gross Salary</p>
                <p className="text-3xl font-bold text-primary">{result?.annualGrossSalary || '0'}</p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Taxable Income</p>
                <p className="text-3xl font-bold text-primary">{result?.taxableIncome || '0'}</p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Net Payable Tax</p>
                <p className="text-3xl font-bold text-primary">{result?.netPayableTax || '0'}</p>
              </div>
            </div>
          </div>

          {/* Tax Slab Indicator */}
          <div className="bg-primary text-white p-4 rounded-lg text-center">
            <p className="text-lg font-bold">
              Your Tax slab is: {result?.taxSlab || ''}
            </p>
          </div>

          {/* Tax Slab Details */}
          <div className="bg-white text-black border border-gray-200 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Tax Slab Details</h3>
            <table className="w-full text-left border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-2">Taxable Salary</th>
                  <th className="border px-3 py-2">Taxable Amount</th>
                  <th className="border px-3 py-2">Tax Rate</th>
                  <th className="border px-3 py-2">Tax Liability</th>
                </tr>
              </thead>
              <tbody>
                {result?.taxSlabs?.length > 0 ? (
                  result.taxSlabs.map((slab: any, idx: number) => (
                    <tr key={idx}>
                      <td className="border px-3 py-2">{slab.name}</td>
                      <td className="border px-3 py-2">{slab.amount}</td>
                      <td className="border px-3 py-2">{slab.rate}</td>
                      <td className="border px-3 py-2">{slab.liability}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border px-3 py-2 text-gray-400">—</td>
                    <td className="border px-3 py-2 text-gray-400">—</td>
                    <td className="border px-3 py-2 text-gray-400">—</td>
                    <td className="border px-3 py-2 text-gray-400">—</td>
                  </tr>
                )}
              </tbody>
            </table>
            
            <div className="mt-4 space-y-2">
              <p className="text-sm"><span className="font-medium">Net Tax Liability (Yearly):</span> {result?.netYearly || '0'}</p>
              <p className="text-sm"><span className="font-medium">Net Tax Liability (Monthly):</span> {result?.netMonthly || '0'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}