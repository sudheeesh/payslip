import React from 'react';
import './ApexPayslip.css';

const ApexPayslip = ({ data }) => {
  const formatDisplay = (val) => {
    if (val === undefined || val === null || val === '') return '0.00';
    const num = parseFloat(String(val).replace(/,/g, '')) || 0;
    return num.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const logoPath = data?.companyLogo || "https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935580/file_000000006c8871fab4f2bfef2e2f890d_oncodx.png";

  return (
    <div className="apex-payslip-page">
      <div className="apex-header-top">
        <img src={logoPath} alt={`${data?.companyName || 'Company'} Logo`} className="apex-header-logo" />
        <div className="apex-header-text">
          <h1 className="apex-company-name-title">{data?.companyName || 'AXIOM ASSET PARTNERS PVT LTD'}</h1>
          <p className="apex-company-address">
            {data?.address || 'Raheja Tower,No.45,Anna Salai,Teynampet,Chennai,Tamil Nadu - 600018'}
          </p>
          <div className="apex-payslip-subtitle">
            Payslip for {data?.monthYear || 'December-2025'}
          </div>
        </div>
      </div>

      <div className="apex-info-grid">
        <div className="apex-info-col">
          <div className="apex-info-row"><span className="apex-info-label">Employee ID</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.empId || 'S1715'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Employee Name</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.employeeName || 'Abdul Hakkim m P'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Department</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.department || 'Engineering Manager'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Designation</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.designation || 'Software Engineer'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Date of Joining</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.doj || '17-June-2021'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Grade</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.grade || 'M2'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Division</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.division || 'Operations Management'}</span></div>
        </div>
        <div className="apex-info-col">
          <div className="apex-info-row"><span className="apex-info-label">Location</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.location || 'Chennai'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">LOP Days</span><span className="apex-info-sep">:</span><span className="apex-info-value">{formatDisplay(data?.lopDays)}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Worked Days/Paid Days</span><span className="apex-info-sep">:</span><span className="apex-info-value">{formatDisplay(data?.paidDays)}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Bank Name</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.bankName || 'State Bank of India'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">IFSC Code</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.ifscCode || 'SBIN0000973'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Bank A/c No</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.bankAccNo || '39024311852'}</span></div>
          <div className="apex-info-row"><span className="apex-info-label">Branch</span><span className="apex-info-sep">:</span><span className="apex-info-value">{data?.branchName || 'Orathanad'}</span></div>
        </div>
      </div>

      <div className="apex-main-table-container">
        <div className="apex-table-header-row">
          <div className="apex-th apex-col-left">
            <span>Earnings</span>
            <span>Amount (Rs)</span>
          </div>
          <div className="apex-th apex-col-right">
            <span>Deductions</span>
            <span>Amount (Rs)</span>
          </div>
        </div>

        <div className="apex-rows-container">
          <div className="apex-row-list apex-col-left">
            <div className="apex-table-row"><span>Basic</span><span className="apex-row-val">{formatDisplay(data?.basic)}</span></div>
            <div className="apex-table-row"><span>HRA</span><span className="apex-row-val">{formatDisplay(data?.hra)}</span></div>
            <div className="apex-table-row"><span>Travel Allowance</span><span className="apex-row-val">{formatDisplay(data?.travel)}</span></div>
            <div className="apex-table-row"><span>Medical Allowance</span><span className="apex-row-val">{formatDisplay(data?.medical)}</span></div>
            <div className="apex-table-row"><span>Special Allowance</span><span className="apex-row-val">{formatDisplay(data?.special)}</span></div>
            <div className="apex-table-row"><span>Performance Bonus</span><span className="apex-row-val">{formatDisplay(data?.performanceBonus)}</span></div>
            <div className="apex-table-row"><span>OT Allowance</span><span className="apex-row-val">{formatDisplay(data?.otAllowance)}</span></div>
            <div className="apex-table-row"><span>Food Allowance</span><span className="apex-row-val">{formatDisplay(data?.foodAllowance)}</span></div>
          </div>
          <div className="apex-row-list apex-col-right">
            <div className="apex-table-row"><span>Provident Fund</span><span className="apex-row-val">{formatDisplay(data?.pf)}</span></div>
            <div className="apex-table-row"><span>Professional Tax</span><span className="apex-row-val">{formatDisplay(data?.pt)}</span></div>
          </div>
        </div>

        <div className="apex-table-total-row">
          <div className="apex-th apex-col-left text-right">
            <span></span>
            <span>{formatDisplay(data?.totalEarnings)}</span>
          </div>
          <div className="apex-th apex-col-right text-right">
            <span></span>
            <span>{formatDisplay(data?.totalDeductions)}</span>
          </div>
        </div>
      </div>

      <div className="apex-footer-info">
        <div className="apex-footer-row"><span className="apex-footer-label">Net Pay</span><span>: {formatDisplay(data?.netSalary)}</span></div>
        <div className="apex-footer-row"><span className="apex-footer-label">Amount in Words</span><span>: {data?.inWords || 'Rupees Ninety One Thousand and Eight Hundred Only'}</span></div>
        <div className="apex-footer-row"><span className="apex-footer-label">Mode of Payment</span><span>: {data?.modeOfPayment || 'Bank Transfer'}</span></div>
      </div>

      <p className="apex-disclaimer">
        Note: This payslip is computer generated, hence no signature is required
      </p>
    </div>
  );
};

export default ApexPayslip;
