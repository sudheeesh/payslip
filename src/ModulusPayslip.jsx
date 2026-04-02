import React from 'react';
import './ModulusPayslip.css';

const ModulusPayslip = ({ data }) => {
  const formatDisplay = (val) => {
    if (val === undefined || val === null || val === '') return '0.00';
    const num = parseFloat(String(val).replace(/,/g, '')) || 0;
    return num.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const companyName = data?.companyName?.toUpperCase() || '';
  const isLargeLogo =
    companyName.includes('PROMANAGE') ||
    companyName.includes('ELITE MANAGEMENT') ||
    companyName.includes('GENESIS') ||
    companyName.includes('PROMOTIX');

  return (
    <div className="modulus-container">
      <div className="modulus-border-wrapper">

        {/* Header */}
        <div className="modulus-header">
          <div className={`modulus-logo-area ${isLargeLogo ? 'modulus-enlarge-area' : ''}`}>
            {data?.companyLogo ? (
              <img
                src={data.companyLogo}
                alt="Company Logo"
                className={`modulus-uploaded-logo ${isLargeLogo ? 'modulus-enlarged-logo' : ''}`}
              />
            ) : (
              <div className="modulus-logo-placeholder">
                <svg viewBox="0 0 100 100" width="50" height="50">
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#0d325a" strokeWidth="8" />
                  <polygon points="50,25 75,38 75,62 50,75 25,62 25,38" fill="#0d325a" />
                </svg>
                <span className="modulus-logo-text">MODULUS</span>
              </div>
            )}
          </div>
          <div className="modulus-company-name">{data?.companyName || 'MODULUSTEC PVT LTD'}</div>
        </div>

        {/* Title */}
        <div className="modulus-title">
          Payslip of the month {data?.monthYear || 'February 2026'}
        </div>

        {/* Employee Details */}
        <table className="modulus-details-table">
          <tbody>
            <tr>
              <td className="detail-data">{data?.employeeName}</td>
              <td className="detail-data">EMP. NO. : {data?.empCode || data?.empId}</td>
            </tr>
            <tr>
              <td className="detail-data">DATE OF JOINING : {data?.doj}</td>
              <td className="detail-data">Current Mth Cal Days : {data?.calDays || '31.00'}</td>
            </tr>
            <tr>
              <td className="detail-data">DESIGNATION : {data?.designation}</td>
              <td className="detail-data">Current Mth Paid Days : {data?.paidDays || '31.00'}</td>
            </tr>
            <tr>
              <td className="detail-data">LOC : {data?.location}</td>
              <td className="detail-data"></td>
            </tr>
          </tbody>
        </table>

        {/* Earnings & Deductions Table */}
        <table className="modulus-table">
          <thead>
            <tr className="modulus-header-row">
              <th className="text-left"></th>
              <th className="text-right">AMOUNT</th>
              <th className="text-right">ARREARS / ADJ</th>
              <th className="text-right">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="modulus-section-title">EARNINGS</td>
            </tr>
            <tr>
              <td>BASIC</td>
              <td className="text-right">{formatDisplay(data?.basic)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.basic)}</td>
            </tr>
            <tr>
              <td>CONVEYANCE ALLOWANCE</td>
              <td className="text-right">{formatDisplay(data?.conveyance)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.conveyance)}</td>
            </tr>
            <tr>
              <td>LEAVE TRAVEL ALLOWANCE MONTHLY</td>
              <td className="text-right">{formatDisplay(data?.lta)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.lta)}</td>
            </tr>
            <tr>
              <td>HOUSE RENT ALLOWANCE</td>
              <td className="text-right">{formatDisplay(data?.hra)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.hra)}</td>
            </tr>
            <tr>
              <td>ADDITIONAL HRA</td>
              <td className="text-right">{formatDisplay(data?.addlHra)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.addlHra)}</td>
            </tr>
            <tr>
              <td>MEDICAL ALLOWANCE</td>
              <td className="text-right">{formatDisplay(data?.medical)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.medical)}</td>
            </tr>
            <tr>
              <td>TRANSPORT ALLOWANCE</td>
              <td className="text-right">{formatDisplay(data?.transport)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.transport)}</td>
            </tr>
            <tr>
              <td>SUPERANNUATION ALLOWANCE</td>
              <td className="text-right">{formatDisplay(data?.superannuation)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.superannuation)}</td>
            </tr>
            <tr>
              <td>LUNCH ALLOWANCE</td>
              <td className="text-right">{formatDisplay(data?.lunch)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.lunch)}</td>
            </tr>
            <tr className="modulus-total-row">
              <td className="modulus-bold-blue">TOTAL EARNINGS</td>
              <td className="text-right modulus-bold-blue">{formatDisplay(data?.totalEarnings)}</td>
              <td className="text-right modulus-bold-blue">{formatDisplay(0)}</td>
              <td className="text-right modulus-bold-blue">{formatDisplay(data?.totalEarnings)}</td>
            </tr>

            <tr>
              <td colSpan="4" className="modulus-section-title">DEDUCTIONS</td>
            </tr>
            <tr>
              <td>PROVIDENT FUND</td>
              <td className="text-right">{formatDisplay(data?.pf)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.pf)}</td>
            </tr>
            <tr>
              <td>WWF</td>
              <td className="text-right">{formatDisplay(data?.wwf)}</td>
              <td className="text-right"></td>
              <td className="text-right">{formatDisplay(data?.wwf)}</td>
            </tr>
            <tr className="modulus-total-row">
              <td className="modulus-bold-blue">TOTAL DEDUCTIONS</td>
              <td className="text-right modulus-bold-blue">{formatDisplay(data?.totalDeductions)}</td>
              <td className="text-right modulus-bold-blue">{formatDisplay(0)}</td>
              <td className="text-right modulus-bold-blue">{formatDisplay(data?.totalDeductions)}</td>
            </tr>
          </tbody>
        </table>

        {/* Summary Footer Table */}
        <table className="modulus-summary-table">
          <thead>
            <tr>
              <th className="text-right">TOTAL EARNING</th>
              <th className="text-right">TOTAL DEDNS</th>
              <th className="text-right">LOAN DEDNS</th>
              <th className="text-right">GROSS DEDNS</th>
              <th className="text-right">NET SALARY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-right">{formatDisplay(data?.totalEarnings)}</td>
              <td className="text-right">{formatDisplay(data?.totalDeductions)}</td>
              <td className="text-right">{formatDisplay(0)}</td>
              <td className="text-right">{formatDisplay(data?.totalDeductions)}</td>
              <td className="text-right">{formatDisplay(data?.netSalary)}</td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div className="modulus-footer">
          <div className="modulus-footer-line">========================================================</div>
          <div className="modulus-footer-amount">
            AMOUNT PAID BY TRANSFER TO A/C : {data?.bankAccNo || data?.bankAccount || '50100841532282'} - Rs. {formatDisplay(data?.netSalary)}
          </div>
          <div className="modulus-footer-address">
            {data?.address || '211, 4th Floor, SCK 01, Smartcity Road, Kochi, Kakkanad, Kerala 682042'}
          </div>
          <div className="modulus-footer-disclaimer">
            *This is a computer generated payslip, does not require any signature*
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModulusPayslip;
