import React from 'react';
import './AxionPayslip.css';

const AxionPayslip = ({ data }) => {
  const formatDisplay = (val) => {
    if (val === undefined || val === null || val === '') return '0.00';
    const num = parseFloat(String(val).replace(/,/g, '')) || 0;
    return num.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const logoPath = data?.companyLogo || "https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935592/AXION_LOGO_1_jaefgu.png";

  return (
    <div className="axion-payslip-page">
      <div className="axion-header">
        <div className="axion-header-left">
          <img src={logoPath} alt="Logo" className="axion-logo" />
        </div>
        <div className="axion-header-right">
          <div className="axion-address-block">
            <strong>{data?.companyName || 'AXION IT PVT LTD'}</strong><br />
            {data?.address ? data.address.split(',').map((part, i) => (
              <React.Fragment key={i}>
                {part.trim()}<br />
              </React.Fragment>
            )) : (
              <>
                Park Centre,<br />
                Technopark Campus<br />
                Kazhakkoottam<br />
                Trivandrum<br />
                Kerala 695581
              </>
            )}
          </div>
        </div>
      </div>

      <div className="axion-title">
        Payslip for the month of {data?.monthYear || 'September, 2025'}
      </div>

      <div className="axion-info-grid">
        <div className="axion-info-col">
          <div className="axion-info-row">
            <span className="axion-label">EMP No</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.empId || 'S1715'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Department</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.department || 'Engineering Manager'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Location</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.location || 'Trivandrum'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Bank</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.bankName || 'Union Bank of India'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Date of joining</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.doj || '17-June-2021'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">ESI Number</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.esi || '4709071838'}</span>
          </div>
        </div>
        <div className="axion-info-col">
          <div className="axion-info-row">
            <span className="axion-label">EMP Name</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.employeeName || 'Abdul Hakkim m P'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Cost Center</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.costCenter || 'CC-004'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Designation</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.designation || 'Software Engineer'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Bank Account No</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.bankAccNo || '179122010000288'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">PF UAN</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.uan || '101902068122'}</span>
          </div>
          <div className="axion-info-row">
            <span className="axion-label">Emp Welfare Pension Number</span>
            <span className="axion-sep">:</span>
            <span className="axion-value">{data?.welfarePensionNo || '0705421119'}</span>
          </div>
        </div>
      </div>

      <table className="axion-main-table">
        <thead>
          <tr>
            <th>EARNINGS</th>
            <th>AMOUNT</th>
            <th>DEDUCTIONS</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic Pay</td>
            <td className="text-right">{formatDisplay(data?.basic)}</td>
            <td>Provident Fund</td>
            <td className="text-right">{formatDisplay(data?.providentFund)}</td>
          </tr>
          <tr>
            <td>House Rent Allowance</td>
            <td className="text-right">{formatDisplay(data?.hra)}</td>
            <td>ESI</td>
            <td className="text-right">{formatDisplay(data?.esiDeduction)}</td>
          </tr>
          <tr>
            <td>Traveling Allowance</td>
            <td className="text-right">{formatDisplay(data?.travelingAllowance)}</td>
            <td>Employee Welfare Fund</td>
            <td className="text-right">{formatDisplay(data?.employeeWelfareFund)}</td>
          </tr>
          <tr>
            <td>Professional Allowance</td>
            <td className="text-right">{formatDisplay(data?.professionalAllowance)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Shift Allowance</td>
            <td className="text-right">{formatDisplay(data?.shiftAllowance)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>City Compensatory Allowance</td>
            <td className="text-right">{formatDisplay(data?.cityCompensatory)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="axion-highlight-row">
            <td>Gross Income</td>
            <td className="text-right">{formatDisplay(data?.grossIncome)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Holiday Allowance</td>
            <td className="text-right">{formatDisplay(data?.holidayAllowance)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Night Food Allowance</td>
            <td className="text-right">{formatDisplay(data?.nightFoodAllowance)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Refferal</td>
            <td className="text-right">{formatDisplay(data?.referral)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Special Variable Pay</td>
            <td className="text-right">{formatDisplay(data?.specialVariablePay)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Loyalty Bonus / Incentive</td>
            <td className="text-right">{formatDisplay(data?.loyaltyBonus)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>PF Employer Share</td>
            <td className="text-right">{formatDisplay(data?.pfEmployerShare)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>ESI Employer Share</td>
            <td className="text-right">{formatDisplay(data?.esiEmployerShare)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Employer Welfare Fund</td>
            <td className="text-right">{formatDisplay(data?.employerWelfareFund)}</td>
            <td className="axion-highlight-cell">Total Deductions</td>
            <td className="text-right axion-highlight-cell">{formatDisplay(data?.totalDeductions)}</td>
          </tr>
          <tr className="axion-total-row">
            <td>Total Income</td>
            <td className="text-right">{formatDisplay(data?.totalIncome)}</td>
            <td className="axion-net-cell">Net Income</td>
            <td className="text-right axion-net-cell">{formatDisplay(data?.netSalary)}</td>
          </tr>
        </tbody>
      </table>

      <div className="axion-footer">
        This is a system generated pay slip and does not require signature
      </div>
    </div>
  );
};

export default AxionPayslip;
