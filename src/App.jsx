import React, { useState } from 'react';
import Payslip from './Payslip';
import './App.css';

const COMPANY_DATA = {
  'MODULUSTEC PVT LTD': {
    'CHENNAI': '4th floor, North block, TIDEL Park, 600113, Rajiv Gandhi Salai\nChennai, Tamil Nadu 600113\nPhone: +91 98564 33567',
    'KOCHI': '211, 4th floor, SCK 01, Smartcity Rd\nKochi, Kakkanad, Kerala 682042\nPhone: +91 98423 59648',
    'BENGALURU': 'Level 9, Canberra, UB City, 24, Vittal Mallya Rd, KG Halli\nAshok Nagar, Bengaluru, Karnataka 560001\nPhone: +91 80193 45098',
    'BANGALORE': 'Level 9, Canberra, UB City, 24, Vittal Mallya Rd, KG Halli\nAshok Nagar, Bengaluru, Karnataka 560001\nPhone: +91 80193 45098',
    'THIRUVANANTHAPURAM': 'Technopark Phase-3, Kazhakkuttom, PO\nThiruvananthapuram, Kerala 695583\nPhone: +91 97123 74672',
    'TRIVANDRUM': 'Technopark Phase-3, Kazhakkuttom, PO\nThiruvananthapuram, Kerala 695583\nPhone: +91 97123 74672',
    'TVM': 'Technopark Phase-3, Kazhakkuttom, PO\nThiruvananthapuram, Kerala 695583\nPhone: +91 97123 74672',
  },
  'ELITE MANAGEMENT SERVICES PVT LTD': {
    'CHENNAI': '12/4, Wallace Garden, Nungambakkam\nChennai, Tamil Nadu 600006\nPhone: +91 98923 44524',
    'BENGALURU': '88, MG Road, Ashok Nagar\nBengaluru, Karnataka 560001\nPhone: +91 97923 44353',
    'BANGALORE': '88, MG Road, Ashok Nagar\nBengaluru, Karnataka 560001\nPhone: +91 97923 44353',
    'KOCHI': '5B, Marine Drive, Ernakulam, kochi\nKerala 682031\nPhone: +91 97824 28983',
    'THIRUVANANTHAPURAM': 'TC 15/12, Kowdiar Palace Road\nTrivandrum, Kerala 695003\nPhone: +91 98734 46466',
    'TRIVANDRUM': 'TC 15/12, Kowdiar Palace Road\nTrivandrum, Kerala 695003\nPhone: +91 98734 46466',
    'TVM': 'TC 15/12, Kowdiar Palace Road\nTrivandrum, Kerala 695003\nPhone: +91 98734 46466',
  },
  'GENESIS GREEN TECH PVT LTD': {
    'BENGALURU': 'Plot 42, Electronics City Phase 1\nBangalore, Karnataka 560100\nPhone: +91 98734 33535',
    'BANGALORE': 'Plot 42, Electronics City Phase 1\nBangalore, Karnataka 560100\nPhone: +91 98734 33535',
    'CHENNAI': 'TIDEL Park, Rajiv Gandhi Salai\nTaramani, Chennai 600113\nPhone: +91 99834 39358',
    'KOCHI': '2nd Floor, Infopark Phase II, Kakkanad\nKochi, Kerala 682030\nPhone: +91 98034 42344',
    'THIRUVANANTHAPURAM': 'HV5M+54X, Technopark Campus, Kazhakkoottam\nTrivandrum 695581\nPhone: +91 98824 34545',
    'TRIVANDRUM': 'HV5M+54X, Technopark Campus, Kazhakkoottam\nTrivandrum 695581\nPhone: +91 98824 34545',
    'TVM': 'HV5M+54X, Technopark Campus, Kazhakkoottam\nTrivandrum 695581\nPhone: +91 98824 34545',
  }
};

function App() {
  const [commonDetails, setCommonDetails] = useState({
    companyName: 'MODULUSTEC PVT LTD',
    empName: 'AROMAL P',
    empNo: 'K2185',
    doj: 'May 22, 2023',
    designation: 'Software Developer',
    location: 'CHENNAI',
    bankAccount: '50100841532282',
    address: COMPANY_DATA['MODULUSTEC PVT LTD']['CHENNAI'],
    companyLogo: '',
  });

  const [monthlySlips, setMonthlySlips] = useState([
    {
      id: Date.now(),
      monthYear: 'FEBRUARY 2026',
      calDays: '28',
      paidDays: '28',
      basic: '78,500.00',
      conveyance: '3,792.00',
      lta: '500.00',
      hra: '2,500.00',
      addlHra: '3,830.00',
      medical: '1,250.00',
      transport: '1,600.00',
      superannuation: '1,120.00',
      lunch: '1,300.00',
      totalEarnings: '96,392.00',
      pf: '872.00',
      wwf: '20.00',
      totalDeductions: '892.00',
      netSalary: '95,500.00',
    }
  ]);

  const [expandedId, setExpandedId] = useState(monthlySlips[0].id);

  const monthOptions = [
    "JANUARY 2025", "FEBRUARY 2025", "MARCH 2025", "APRIL 2025", "MAY 2025", "JUNE 2025", "JULY 2025", "AUGUST 2025", "SEPTEMBER 2025", "OCTOBER 2025", "NOVEMBER 2025", "DECEMBER 2025",
    "JANUARY 2026", "FEBRUARY 2026", "MARCH 2026", "APRIL 2026", "MAY 2026", "JUNE 2026", "JULY 2026", "AUGUST 2026", "SEPTEMBER 2026", "OCTOBER 2026", "NOVEMBER 2026", "DECEMBER 2026",
    "JANUARY 2027", "FEBRUARY 2027", "MARCH 2027", "APRIL 2027", "MAY 2027", "JUNE 2027", "JULY 2027", "AUGUST 2027", "SEPTEMBER 2027", "OCTOBER 2027", "NOVEMBER 2027", "DECEMBER 2027",
  ];

  const handleCommonChange = (key, val) => {
    setCommonDetails((prev) => {
      const updated = { ...prev, [key]: val };
      if (key === 'location' || key === 'companyName') {
        const companyKey = updated.companyName.toUpperCase().trim();
        const locationKey = updated.location.toUpperCase().trim();
        if (COMPANY_DATA[companyKey] && COMPANY_DATA[companyKey][locationKey]) {
          updated.address = COMPANY_DATA[companyKey][locationKey];
        }
      }
      return updated;
    });
  };

  const formatNum = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const parseNum = (str) => parseFloat(String(str).replace(/,/g, '')) || 0;

  const calculateSlip = (currentSlip, fieldChanged, newVal, allSlips) => {
    let updated = { ...currentSlip, [fieldChanged]: newVal };
    const net = parseNum(updated.netSalary);
    const pf = parseNum(updated.pf);
    const wwf = parseNum(updated.wwf);
    const totalDeductions = pf + wwf;
    updated.totalDeductions = formatNum(totalDeductions);

    // If Net Salary was changed, drive the calculations
    if (fieldChanged === 'netSalary') {
      const targetEarnings = net + totalDeductions;
      const slipIndex = allSlips.findIndex(s => s.id === currentSlip.id);
      const prevSlip = slipIndex > 0 ? allSlips[slipIndex - 1] : null;

      if (!prevSlip) {
        // First month: 55/45 split
        const basic = net * 0.55;
        updated.basic = formatNum(basic);
        
        // Split others
        const remaining = targetEarnings - basic;
        // Keep some fixed based on defaults
        updated.lta = "500.00";
        updated.medical = "1,250.00";
        updated.transport = "1,600.00";
        updated.superannuation = "1,120.00";
        updated.lunch = "1,300.00";
        
        // HRA 20% of net, Addl HRA 5% of net
        const hra = net * 0.20;
        const addlHra = net * 0.05;
        updated.hra = formatNum(hra);
        updated.addlHra = formatNum(addlHra);

        // Conveyance is the buffer
        const used = parseNum(updated.lta) + parseNum(updated.medical) + parseNum(updated.transport) + 
                    parseNum(updated.superannuation) + parseNum(updated.lunch) + hra + addlHra;
        updated.conveyance = formatNum(remaining - used);
      } else {
        // Subsequent months: Keep basic & others same, adjust conveyance
        updated.basic = prevSlip.basic;
        updated.hra = prevSlip.hra;
        updated.addlHra = prevSlip.addlHra;
        updated.lta = prevSlip.lta;
        updated.medical = prevSlip.medical;
        updated.transport = prevSlip.transport;
        updated.superannuation = prevSlip.superannuation;
        updated.lunch = prevSlip.lunch;
        
        // Check if values were already set in the current month or use 0
        const usedExceptConveyance = parseNum(updated.basic) + parseNum(updated.hra) + parseNum(updated.addlHra) + 
                                     parseNum(updated.lta) + parseNum(updated.medical) + parseNum(updated.transport) + 
                                     parseNum(updated.superannuation) + parseNum(updated.lunch);
        
        updated.conveyance = formatNum(targetEarnings - usedExceptConveyance);
      }
      updated.totalEarnings = formatNum(net + totalDeductions);
    } else {
      // If an individual earning/deduction field was changed, update Total/Net
      const earningsKeys = ['basic', 'conveyance', 'lta', 'hra', 'addlHra', 'medical', 'transport', 'superannuation', 'lunch'];
      const totalExclDeductions = earningsKeys.reduce((acc, k) => acc + parseNum(updated[k]), 0);
      updated.totalEarnings = formatNum(totalExclDeductions);
      updated.totalDeductions = formatNum(parseNum(updated.pf) + parseNum(updated.wwf));
      updated.netSalary = formatNum(totalExclDeductions - parseNum(updated.totalDeductions));
    }
    return updated;
  };

  const handleMonthChange = (id, key, val) => {
    setMonthlySlips((prev) => {
      return prev.map(slip => {
        if (slip.id === id) {
          if (key === 'monthYear') {
            const newSlip = { ...slip, [key]: val };
            const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
            const [mName, yearStr] = val.split(' ');
            const mIndex = monthNames.indexOf(mName);
            if (mIndex !== -1 && yearStr) {
              const days = new Date(parseInt(yearStr), mIndex + 1, 0).getDate();
              newSlip.calDays = String(days);
              newSlip.paidDays = String(days);
            }
            return newSlip;
          }
          return calculateSlip(slip, key, val, prev);
        }
        return slip;
      });
    });
  };

  const addNewMonth = () => {
    const lastSlip = monthlySlips[monthlySlips.length - 1];
    const newId = Date.now();
    setMonthlySlips([...monthlySlips, { ...lastSlip, id: newId }]);
    setExpandedId(newId);
  };

  const removeMonth = (id) => {
    if (monthlySlips.length === 1) return;
    setMonthlySlips(monthlySlips.filter(s => s.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <div className="sidebar no-print">
        <h2>Batch Payslip Generator</h2>
        <div className="fields-section">
          
          <div className="category-header">Company Details</div>
          <div className="field-group">
            <label>Company Name</label>
            <input
              type="text"
              list="company-options"
              value={commonDetails.companyName}
              onChange={(e) => handleCommonChange('companyName', e.target.value)}
            />
            <datalist id="company-options">
              {Object.keys(COMPANY_DATA).map((comp) => (
                <option key={comp} value={comp} />
              ))}
            </datalist>
          </div>
          <div className="field-group">
            <label>Company Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    handleCommonChange('companyLogo', reader.result);
                  };
                  reader.readAsDataURL(file);
                } else {
                  handleCommonChange('companyLogo', '');
                }
              }}
            />
          </div>

          <div className="category-header">Employee Details</div>
          {Object.keys(commonDetails).map((key) => {
            if (key === 'companyName' || key === 'companyLogo') return null;
            
            if (key === 'location') {
              return (
                <div key={key} className="field-group">
                  <label>Location</label>
                  <select
                    value={commonDetails[key]}
                    onChange={(e) => handleCommonChange(key, e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', fontFamily: 'Arial' }}
                  >
                    <option value="">-- Select City --</option>
                    <option value="CHENNAI">Chennai</option>
                    <option value="KOCHI">Kochi</option>
                    <option value="TRIVANDRUM">Trivandrum</option>
                    <option value="BANGALORE">Bangalore</option>
                  </select>
                </div>
              );
            }

            if (key === 'address') {
              return (
                <div key={key} className="field-group">
                  <label>Company Address</label>
                  <textarea
                    value={commonDetails[key]}
                    onChange={(e) => handleCommonChange(key, e.target.value)}
                    rows="3"
                    style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', fontFamily: 'Arial', resize: 'vertical', fontSize: '14px' }}
                  />
                </div>
              );
            }

            return (
              <div key={key} className="field-group">
                <label>
                  {key === 'empName' ? 'Employee Name' : 
                   key === 'empNo' ? 'Employee No' : 
                   key === 'doj' ? 'Date of Joining' : 
                   key === 'bankAccount' ? 'Bank Account' : 
                   key}
                </label>
                <input
                  type="text"
                  value={commonDetails[key]}
                  onChange={(e) => handleCommonChange(key, e.target.value)}
                />
              </div>
            );
          })}

          <div style={{ marginTop: '30px' }}>
            <div className="flex-between">
              <div className="category-header">Monthly Payslips</div>
              <button className="add-btn" onClick={addNewMonth}>+ Add Month</button>
            </div>
            
            {monthlySlips.map((slip, index) => (
              <div key={slip.id} className="month-card">
                <div 
                  className="month-card-header" 
                  onClick={() => setExpandedId(expandedId === slip.id ? null : slip.id)}
                >
                  <strong>{slip.monthYear}</strong>
                  <div>
                    {monthlySlips.length > 1 && (
                      <button className="delete-btn" onClick={(e) => { e.stopPropagation(); removeMonth(slip.id); }}>Del</button>
                    )}
                  </div>
                </div>

                {expandedId === slip.id && (
                  <div className="month-card-body">
                    {Object.keys(slip).map((key) => {
                      if (key === 'id') return null;
                      return (
                        <div key={key} className="field-group">
                          <label>{key}</label>
                          {key === 'monthYear' ? (
                            <select
                              value={slip[key]}
                              onChange={(e) => handleMonthChange(slip.id, key, e.target.value)}
                              style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', fontFamily: 'Arial' }}
                            >
                              {monthOptions.map(m => (
                                <option key={m} value={m}>{m}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type="text"
                              value={slip[key]}
                              onChange={(e) => handleMonthChange(slip.id, key, e.target.value)}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="print-button" onClick={handlePrint}>
          Download All as PDF / Print
        </button>
      </div>
      
      <div className="preview-area">
        {monthlySlips.map(slip => (
          <div key={slip.id} className="payslip-page-wrapper">
            <Payslip data={{ ...commonDetails, ...slip }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
