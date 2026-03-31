import React, { useState } from 'react';
import Payslip from './Payslip';
import ApexPayslip from './ApexPayslip';
import AxionPayslip from './AxionPayslip';
import './App.css';

const COMPANY_DATA = {
  'MODULUSTEC PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935581/MODULUS_1_esqcq1.png',
    addresses: {
      'CHENNAI': '4th floor, North block, TIDEL Park, 600113, Rajiv Gandhi Salai, Chennai, Tamil Nadu 600113',
      'KOCHI': '211, 4th floor, SCK 01, Smartcity Rd, Kochi, Kakkanad, Kerala 682042',
      'BENGALURU': 'Level 9, Canberra, UB City, 24, Vittal Mallya Rd, KG Halli, Ashok Nagar, Bengaluru, Karnataka 560001',
      'THIRUVANANTHAPURAM': 'Technopark Phase-3, Kazhakkuttom, PO, Thiruvananthapuram, Kerala 695583',
    }
  },
  'PROMOTIX PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935580/PROMOTIX_LOGO_1_exjb9l.png',
    addresses: {
      'BENGALURU': '12/A, Promotix Business Plaza, Whitefield, Bangalore, Karnataka 560066',
      'CHENNAI': '12/A, Promotix Business Plaza, Whitefield, Bangalore, Karnataka 560066',
      'KOCHI': '12/A, Promotix Business Plaza, Whitefield, Bangalore, Karnataka 560066',
    }
  },
  'HERITAGE LOOM PRIVATE LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935580/HERITAGE_LOOM_PRIVATE_LED_hibmpr.png',
    addresses: {
      'CHENNAI': '128, Loom Estate, Ambattur Industrial Estate, Chennai, TN 600058',
      'KOCHI': '45, Marine Drive, Ernakulam, Kochi, Kerala 682031',
      'BENGALURU': '88, Whitefield Main Rd, ITPL Area, Bangalore, KA 560066',
      'THIRUVANANTHAPURAM': '22, Technopark Campus, Kazhakkoottam, Trivandrum, KL 695581',
    }
  },
  'SWIFTLINE PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935564/swift_lOGO_owk2vy.png',
    addresses: {
      'CHENNAI': 'Awfis, 5th Floor, No. 143, 1, Uthamar Gandhi Road, Nungambakkam, Chennai, Tamil Nadu 600034',
      'BENGALURU': 'Brigade Opus, 4th floor, Kodigehalli, off NH-44, Near Hebbal, Bangalore - 560092',
      'KOCHI': '34/1128A, First Floor, Balakrishna Menon Road, Edappally, Cochin - 682024',
      'THIRUVANANTHAPURAM': 'SwiftLine Logistics, 2nd Floor, Technopark Campus, Phase 1, Kazhakkoottam, Trivandrum, Kerala 695581',
    }
  },
  'APEX ASSET PARTNERS PVT LTD': {
    format: 'apex',
    logo: '',
    addresses: {
      'CHENNAI': 'No. 45, Anna Salai, Teynampet, Chennai - 600018',
      'BENGALURU': '102, MG Road, Indiranagar, Bangalore - 560038',
      'KOCHI': '2nd Floor, Oberon Mall, Edappally, Kochi - 682024',
      'THIRUVANANTHAPURAM': 'TC 15/123, Kowdiar, Trivandrum 695003',
    }
  },
  'AXIOM ASSET PARTNERS PVT LTD': {
    format: 'axion',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935592/AXION_LOGO_1_jaefgu.png',
    addresses: {
      'THIRUVANANTHAPURAM': 'Park Centre,|Technopark Campus|Kazhakkoottam|Trivandrum|Kerala 695581',
      'CHENNAI': 'Raheja Tower|No.45|Anna Salai|Teynampet|Chennai|Tamil Nadu - 600018'
    }
  },
  'KINETIC PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935603/file_00000000b64871faa2878c1985763a17_lqial5.png',
    addresses: {
      'KOCHI': 'MKK Nair Road, Chakkungal Byelane, Palarivattom, Kochi, Kerala 682025',
      'CHENNAI': '488, Anna Salai, CIT Nagar East, Chennai, Tamil Nadu 600035',
      'BENGALURU': '23G, 4th Floor, Phase II, Electronic City, Bengaluru, Karnataka 560100',
      'THIRUVANANTHAPURAM': 'TC 51, near Teli Bhagam Bagavathi Temple, Trivandrum, Kerala 695032',
    }
  },
  'RAYGEN RENEWABLES PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935596/file_00000000e6d871fab5636b306de0fa2d_ckvefc.png',
    address: 'Raygen Solar Farm, 88 Energy Drive, Jaipur, Rajasthan 302001'
  },
  'LUXEGLOW PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935599/LUXEGLOW_LOGO_1_sjydfv.png',
    address: 'Luxeglow Tower, MG Road, Gurgaon, Haryana 122002'
  },
  'VOGUE FABRICATORS PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774937277/file_00000000bb9c71fa8a2c5d3b9d1d5761_ojexzy.png',
    address: 'Vogue Fabricators Industrial Estate, 12 Block B, Okhla Phase III, New Delhi 110020'
  },
  'PROMANAGE PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1770792890/PROMANAGE_CONSULTANTS_futvos.png',
    addresses: {
      'CHENNAI': 'S105, 2nd floor, Phase-3, Spencer Plaza Mall, Anna Salai, Chennai, Tamil Nadu 600002',
      'KOCHI': '205, 3rd Floor, Pioneer Tower, Shanmugham Rd, Marine Drive, Kochi, Kerala 682031',
      'THIRUVANANTHAPURAM': 'Impact Rose Gardens Jn, Technopark, Karyavattom, Trivandrum 695581',
      'BENGALURU': 'Concorde Tower 2 Level 10, UB City, Vittal Mallya Rd, Bengaluru 560001',
    }
  },
  'SOLARIS POWER TECH PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774948726/file_00000000c9ac71faba57c37284542b5c_btcwfc.png',
    address: 'Solaris Power Park, 4th Floor, Solar House, Whitefield, Bangalore, Karnataka 560066'
  },
  'ELITE MANAGEMENT SERVICES PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1770872215/ELITE_MANAGEMENT_SERVICES_PVT_LTD-LOGO_qkwg4f.png',
    addresses: {
      'CHENNAI': '12/4, Wallace Garden, Nungambakkam, Chennai, Tamil Nadu 600006',
      'KOCHI': '5B, Marine Drive, Ernakulam, kochi, Kerala 682031',
      'THIRUVANANTHAPURAM': 'TC 15/12, Kowdiar Palace Road, Trivandrum, Kerala 695003',
    }
  },
  'GENESIS GREEN TECH PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774951031/logo_no_bg_svpbqt.png',
    addresses: {
      'BENGALURU': 'Plot 42, Electronics City Phase 1, Bangalore, Karnataka 560100',
      'KOCHI': '2nd Floor, Infopark Phase II, Kakkanad, Kochi, Kerala 682030',
      'THIRUVANANTHAPURAM': 'HV5M+54X, Technopark Campus, Kazhakkoottam, Trivandrum 695581',
    }
  },
  'AXION IT PVT LTD': {
    format: 'axion',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935592/AXION_LOGO_1_jaefgu.png',
    addresses: {
      'THIRUVANANTHAPURAM': 'Park Centre, Technopark Campus, Kazhakkoottam, Trivandrum, Kerala 695581',
    }
  }
};

function App() {
  const [commonDetails, setCommonDetails] = useState({
    companyName: 'AXION IT PVT LTD',
    employeeName: 'Abdul Hakkim m P',
    empId: 'S1715',
    doj: '17-June-2021',
    designation: 'Software Engineer',
    department: 'Engineering Manager',
    grade: 'M2',
    division: 'Operations Management',
    location: 'CHENNAI',
    bankAccNo: '36595650067',
    bankName: 'SBT',
    ifscCode: 'SBIN0000973',
    branchName: 'Orathanad',
    pan: 'AMDPJ4161G',
    uan: '102161310211',
    esi: '',
    pfNo: '0029111',
    deptCode: '501',
    address: 'Raheja Tower,No.45,Anna Salai,Teynampet,Chennai,Tamil Nadu - 600018',
    companyLogo: '',
    costCenter: '',
    welfarePensionNo: '',
  });

  const [monthlySlips, setMonthlySlips] = useState([
    {
      id: Date.now(),
      monthYear: 'September, 2025',
      basic: '41918',
      hra: '9146',
      travelingAllowance: '6097',
      professionalAllowance: '0',
      shiftAllowance: '9146',
      cityCompensatory: '6097',
      grossIncome: '72404',
      holidayAllowance: '523',
      nightFoodAllowance: '3288',
      referral: '0',
      specialVariablePay: '0',
      loyaltyBonus: '0',
      pfEmployerShare: '558',
      esiEmployerShare: '359',
      employerWelfareFund: '50',
      totalIncome: '77182',
      medicalInsurance: '0',
      providentFund: '1850',
      incomeTax: '0',
      pickupDrop: '0',
      esiDeduction: '83',
      lop: '0',
      mealsCoupon: '0',
      professionalTax: '0',
      employeeWelfareFund: '50',
      noticePay: '0',
      arrear: '0',
      joinRelLop: '0',
      salaryAdvance: '0',
      otherDeductions: '0',
      totalDeductions: '1983',
      netSalary: '75199',
      netPayInWords: 'Seventy Five Thousand One Hundred Ninety Nine Only',
      paidDays: '31',
      lopDays: '0'
    }
  ]);

  const [expandedId, setExpandedId] = useState(monthlySlips[0].id);

  const monthOptions = [
    "JANUARY 2025", "FEBRUARY 2025", "MARCH 2025", "APRIL 2025", "MAY 2025", "JUNE 2025", "JULY 2025", "AUGUST 2025", "SEPTEMBER 2025", "OCTOBER 2025", "NOVEMBER 2025", "DECEMBER 2025",
    "JANUARY 2026", "FEBRUARY 2026", "MARCH 2026", "APRIL 2026", "MAY 2026", "JUNE 2026", "JULY 2026", "AUGUST 2026", "SEPTEMBER 2026", "OCTOBER 2026", "NOVEMBER 2026", "DECEMBER 2026",
    "JANUARY 2027", "FEBRUARY 2027", "MARCH 2027", "APRIL 2027", "MAY 2027", "JUNE 2027", "JULY 2027", "AUGUST 2027", "SEPTEMBER 2027", "OCTOBER 2027", "NOVEMBER 2027", "DECEMBER 2027",
  ];

  const numberToWords = (num) => {
    if (num === 0) return 'Zero';
    const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convert = (n) => {
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '');
      if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' and ' + convert(n % 100) : '');
      if (n < 100000) return convert(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 !== 0 ? ' ' + convert(n % 1000) : '');
      if (n < 10000000) return convert(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 !== 0 ? ' ' + convert(n % 100000) : '');
      return convert(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 !== 0 ? ' ' + convert(n % 10000000) : '');
    };

    const parts = String(num).split('.');
    let words = convert(parseInt(parts[0]));
    if (parts.length > 1 && parseInt(parts[1]) > 0) {
      words += ' and ' + convert(parseInt(parts[1])) + ' Paise';
    }
    return `Rupees ${words} Only`;
  };

  const handleCommonChange = (key, val) => {
    setCommonDetails((prev) => {
      const updated = { ...prev, [key]: val };
      if (key === 'location' || key === 'companyName') {
        const companyKey = updated.companyName.toUpperCase().trim();
        const locationKey = updated.location.toUpperCase().trim();
        const companyInfo = COMPANY_DATA[companyKey];

        if (companyInfo) {
          if (key === 'companyName' && companyInfo.logo) {
            updated.companyLogo = companyInfo.logo;
          }
          if (companyInfo.addresses && companyInfo.addresses[locationKey]) {
            updated.address = companyInfo.addresses[locationKey];
          } else if (companyInfo.address) {
            updated.address = companyInfo.address;
          }
        }
      }
      return updated;
    });
  };

  const formatNum = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const parseNum = (str) => parseFloat(String(str).replace(/,/g, '')) || 0;

  const calculateSlip = (currentSlip, fieldChanged, newVal, allSlips) => {
    let updated = { ...currentSlip, [fieldChanged]: newVal };

    const companyKey = commonDetails.companyName.toUpperCase().trim();
    const fmt = COMPANY_DATA[companyKey]?.format;
    const name = commonDetails.companyName.toUpperCase();
    const isApex = fmt === 'apex' || (name.includes('APEX') && !name.includes('AXION') && !name.includes('AXIOM')) ||
      name.includes('SWIFTLINE') || name.includes('KINETIC') ||
      name.includes('RAYGEN') || name.includes('LUXEGLOW') ||
      name.includes('VOGUE') || name.includes('SOLARIS') || name.includes('HERITAGE');
    const isAxion = fmt === 'axion' || name.includes('AXION') || name.includes('AXIOM');

    // Auto-update inWords if netSalary changes
    if (fieldChanged === 'netSalary' || fieldChanged === 'netPay') {
      updated.inWords = numberToWords(parseNum(newVal));
    }

    if (isApex) {
      // --- APEX CALCULATION (Master Template Logic) ---
      const netValue = parseNum(updated.netSalary || updated.netPay);
      const pf = parseNum(updated.pf) || 1850;
      const pt = parseNum(updated.pt) || 200;
      const totalDeductions = pf + pt;

      updated.pf = formatNum(pf);
      updated.pt = formatNum(pt);
      updated.totalDeductions = formatNum(totalDeductions);
      updated.grossDeductions = formatNum(totalDeductions);

      const totalEarnings = Math.round(netValue + totalDeductions);
      updated.totalEarnings = formatNum(totalEarnings);

      const apexFixedKeys = ['basic', 'hra', 'travel', 'medical', 'special', 'foodAllowance'];
      const masterSlipIdx = allSlips.findIndex(s => s.id === updated.id);
      const isMaster = masterSlipIdx === 0;
      const masterSlip = allSlips[0] || updated;

      // Check if we already have a full baseline (Basic + key fixed items must be non-zero)
      const hasBaseline = parseNum(masterSlip.basic) > 0 && parseNum(masterSlip.travel) > 0 && parseNum(masterSlip.foodAllowance) > 0;

      let fixedSum = 0;
      if (isMaster && !hasBaseline) {
        // --- INITIAL APEX SETUP (55% Basic / 45% Other Pool) ---
        const basicVal = Math.round(totalEarnings * 0.55);
        updated.basic = formatNum(basicVal);
        fixedSum += basicVal;

        const otherPool = totalEarnings - basicVal; // Remaining 45%
        // We split the 45% into EVERYTHING including an initial bonus/ot
        const ratios = {
          hra: 0.25,
          travel: 0.10,
          medical: 0.10,
          special: 0.15,
          foodAllowance: 0.10,
          performanceBonus: 0.20,
          otAllowance: 0.10
        };

        // Distribute and capture ONLY the truly "Fixed" ones for the freezing logic
        apexFixedKeys.forEach(k => {
          if (k !== 'basic') {
            const val = Math.round(otherPool * ratios[k]);
            updated[k] = formatNum(val);
            fixedSum += val;
          }
        });

        // Also set the initial bonus/ot so it's not zero on day 1
        updated.performanceBonus = formatNum(Math.round(otherPool * ratios.performanceBonus));
        updated.otAllowance = formatNum(Math.round(otherPool * ratios.otAllowance));

      } else {
        // --- PERSISTENT STRUCTURE (Frozen Monthly Allowances) ---
        apexFixedKeys.forEach(k => {
          const val = parseNum(masterSlip[k]);
          updated[k] = formatNum(val);
          fixedSum += val;
        });
      }

      // Final Tally: Bonus and OT absorb EVERYTHING remaining after fixedSum is subtracted
      const variableBucket = totalEarnings - fixedSum;
      if (variableBucket >= 0) {
        const bonusVal = Math.round(variableBucket * 0.70);
        updated.performanceBonus = formatNum(bonusVal);
        updated.otAllowance = formatNum(totalEarnings - fixedSum - bonusVal);
      } else {
        updated.performanceBonus = formatNum(0);
        updated.otAllowance = formatNum(0);
      }
    } else if (isAxion) {
      // --- AXION CALCULATION (Target Based) ---
      const netValue = parseNum(updated.netSalary || updated.netPay);

      // Fixed Deductions (allows 0 but handles empty input gracefully)
      const parseField = (val, defaultVal) => (val === undefined || val === '') ? defaultVal : parseNum(val);
      const pfDed = parseField(updated.providentFund, 1850);
      const esiDed = parseField(updated.esiDeduction, 83);
      const welfareFund = parseField(updated.employeeWelfareFund, 50);

      const totalDeductions = pfDed + esiDed + welfareFund;
      updated.totalDeductions = formatNum(totalDeductions);

      const totalIncome = netValue + totalDeductions;
      updated.totalIncome = formatNum(totalIncome);

      // Employer Fixed Shares (to be subtracted before distribution so everything tallies perfectly)
      const empPf = 558;
      const empEsi = 359;
      const empWelfare = 50;
      updated.pfEmployerShare = formatNum(empPf);
      updated.esiEmployerShare = formatNum(empEsi);
      updated.employerWelfareFund = formatNum(empWelfare);
      
      const totalEmpShares = empPf + empEsi + empWelfare;
      const distributablePool = totalIncome - totalEmpShares;

      // 1. Basic (55% of the remaining pool)
      const basicVal = Math.round(distributablePool * 0.55);
      updated.basic = formatNum(basicVal);

      // 2. Other Allowances (40% of pool distributed to HRA 30%, Shift 30%, Travel 20%, City 20%)
      const otherPool = Math.round(distributablePool * 0.40);
      const hraVal = Math.round(otherPool * 0.30);
      const shiftVal = Math.round(otherPool * 0.30);
      const travelVal = Math.round(otherPool * 0.20);
      const cityVal = otherPool - hraVal - shiftVal - travelVal; // Remainder exact 20%
      
      updated.hra = formatNum(hraVal);
      updated.travelingAllowance = formatNum(travelVal);
      updated.shiftAllowance = formatNum(shiftVal);
      updated.cityCompensatory = formatNum(cityVal);

      const grossIncome = basicVal + otherPool;
      updated.grossIncome = formatNum(grossIncome);

      // 3. Variables / 5% Pool (Holiday & Night Food)
      // Percentage mapped exactly from reference values: 2000 (Night Food) vs 318 (Holiday) of 2318 total pool.
      const variablePool = distributablePool - grossIncome;
      const nightFood = Math.round(variablePool * (2000 / 2318));
      
      updated.nightFoodAllowance = formatNum(nightFood);
      updated.holidayAllowance = formatNum(variablePool - nightFood);

      // Defaults for unused components
      updated.professionalAllowance = formatNum(0);
      updated.referral = formatNum(0);
      updated.specialVariablePay = formatNum(0);
      updated.loyaltyBonus = formatNum(0);

    } else {
      // --- MODULUSTEC CALCULATION (Strictly Independent) ---
      const pf = parseNum(updated.pf);
      const wwf = parseNum(updated.wwf);
      const totalDeductions = pf + wwf;
      updated.totalDeductions = formatNum(totalDeductions);
      updated.grossDeductions = formatNum(totalDeductions);

      if (fieldChanged === 'netSalary') {
        const netValue = parseNum(updated.netSalary);
        const targetEarnings = netValue + totalDeductions;
        updated.totalEarnings = formatNum(targetEarnings);

        // MODULUSTEC SMART LOCKING LOGIC
        // We divide the Gross into 55% Basic and 45% Allowances.
        // Once a person's structure is set, changing Net Salary ONLY affects Conveyance.

        const keysToFreeze = ['basic', 'lta', 'hra', 'addlHra', 'medical', 'transport', 'superannuation', 'lunch'];
        const masterSlipIdx = allSlips.findIndex(s => s.id === updated.id);
        const isMaster = masterSlipIdx === 0;
        const masterSlip = allSlips[0] || updated;

        // Check if we already have a calculated structure (Basic > 0)
        const hasExistingStructure = parseNum(updated.basic) > 0;

        let fixedSum = 0;

        if (isMaster && !hasExistingStructure) {
          // --- INITIAL SETUP (Perfect 55/45 split) ---
          const basicVal = Math.round(targetEarnings * 0.55);
          updated.basic = formatNum(basicVal);
          fixedSum += basicVal;

          const allowancePool = targetEarnings - basicVal;
          // There are 8 allowance categories: Conveyance + the 7 fixed ones.
          // The user wants them shared equally initially.
          const perAllowance = Math.round(allowancePool / 8);

          keysToFreeze.forEach(key => {
            if (key !== 'basic') {
              updated[key] = formatNum(perAllowance);
              fixedSum += perAllowance;
            }
          });
          // Final Tally for Conveyance (handles rounding errors)
          updated.conveyance = formatNum(targetEarnings - fixedSum);

        } else if (isMaster && hasExistingStructure) {
          // --- UPDATING NET SALARY ON EXISTING PERSON (Only Conveyance Absorbs Difference) ---
          keysToFreeze.forEach(key => {
            const val = parseNum(updated[key]);
            fixedSum += val;
          });
          // Update Conveyance to bridge the gap to the new target
          updated.conveyance = formatNum(targetEarnings - fixedSum);

        } else {
          // --- MONTH 2+ FOR SAME PERSON (Strictly Frozen to Master Structure) ---
          keysToFreeze.forEach(key => {
            const val = parseNum(masterSlip[key]);
            updated[key] = formatNum(val);
            fixedSum += val;
          });
          // Only Conveyance moves to tally the new net salary
          updated.conveyance = formatNum(targetEarnings - fixedSum);
        }

      } else {
        const earningsKeys = ['basic', 'conveyance', 'lta', 'hra', 'addlHra', 'medical', 'transport', 'superannuation', 'lunch'];
        const totalEarnings = Math.round(earningsKeys.reduce((acc, k) => acc + parseNum(updated[k]), 0));
        updated.totalEarnings = formatNum(totalEarnings);
        if (fieldChanged !== 'netSalary') {
          const net = totalEarnings - totalDeductions;
          updated.netSalary = formatNum(net);
          updated.inWords = numberToWords(net);
        }
      }
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
                  {key === 'employeeName' ? 'Employee Name' :
                    key === 'empId' ? 'Employee ID' :
                      key === 'pan' ? 'PAN NUMBER' :
                        key === 'uan' ? 'UAN NO' :
                          key === 'esi' ? 'ESI ACCOUNT NO' :
                            key === 'pfNo' ? 'PF NO' :
                              key === 'deptCode' ? 'DEPARTMENT CODE' :
                                key === 'doj' ? 'Date of Joining' :
                                  key === 'bankAccNo' ? 'Bank Account No' :
                                    key === 'ifscCode' ? 'IFSC Code' :
                                      key === 'branchName' ? 'Branch' :
                                        key === 'grade' ? 'Grade' :
                                          key === 'division' ? 'Division' :
                                            key === 'costCenter' ? 'Cost Center' :
                                              key === 'welfarePensionNo' ? 'Emp Welfare Pension Number' :
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
                    {(() => {
                      const fmt = COMPANY_DATA[commonDetails.companyName.toUpperCase().trim()]?.format;
                      const name = commonDetails.companyName.toUpperCase();
                      const isApex = fmt === 'apex' || (name.includes('APEX') && !name.includes('AXION') && !name.includes('AXIOM')) ||
                        name.includes('SWIFTLINE') || name.includes('KINETIC') ||
                        name.includes('RAYGEN') || name.includes('LUXEGLOW') ||
                        name.includes('VOGUE') || name.includes('SOLARIS') || name.includes('HERITAGE');
                      const isAxion = fmt === 'axion' || name.includes('AXION') || name.includes('AXIOM');

                      const apexFields = [
                        'monthYear', 'empId', 'employeeName', 'grade', 'bankAccNo', 'netSalary',
                        'lopDays', 'paidDays', 'pf', 'pt', 'inWords'
                      ];

                      const modFields = [
                        'monthYear', 'lopDays', 'paidDays', 'netSalary',
                        'basic', 'conveyance', 'lta', 'hra', 'addlHra', 'medical', 'transport', 'superannuation', 'lunch',
                        'pf', 'wwf', 'inWords'
                      ];

                      const axionFields = [
                        'monthYear', 'netSalary', 'providentFund', 'esiDeduction', 'employeeWelfareFund', 'inWords'
                      ];

                      const visibleFields = isApex ? apexFields : (isAxion ? axionFields : modFields);

                      return visibleFields.map((key) => {
                        return (
                          <div key={key} className="field-group">
                            <label>
                              {key === 'monthYear' ? 'MONTH & YEAR' :
                                key === 'empId' ? 'EMPLOYEE ID' :
                                  key === 'employeeName' ? 'EMPLOYEE NAME' :
                                    key === 'grade' ? 'GRADE' :
                                      key === 'bankAccNo' ? 'BANK A/C NO' :
                                        key === 'pf' ? 'PF DEDUCTION' :
                                          key === 'pt' ? 'PRO TAX (PT)' :
                                            key === 'wwf' ? 'WWF DEDUCTION' :
                                              key === 'netSalary' ? 'TARGET NET SALARY' :
                                                key === 'basic' ? 'BASIC PAY' :
                                                  key === 'conveyance' ? 'CONVEYANCE' :
                                                    key === 'lta' ? 'LTA MONTHLY' :
                                                      key === 'hra' ? 'HOUSE RENT ALLOWANCE' :
                                                        key === 'addlHra' ? 'ADDITIONAL HRA' :
                                                          key === 'medical' ? 'MEDICAL ALLOWANCE' :
                                                            key === 'transport' ? 'TRANSPORT ALLOW' :
                                                              key === 'superannuation' ? 'SUPERANNUATION' :
                                                                key === 'lunch' ? 'LUNCH ALLOWANCE' :
                                                                  key === 'inWords' ? 'IN WORDS' :
                                                                    key}
                            </label>
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
                      });
                    })()}
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
            {(() => {
              const fmt = COMPANY_DATA[commonDetails.companyName.toUpperCase().trim()]?.format;
              const name = commonDetails.companyName.toUpperCase();

              if (fmt === 'apex' || (name.includes('APEX') && !name.includes('AXION') && !name.includes('AXIOM')) ||
                name.includes('SWIFTLINE') || name.includes('KINETIC') || name.includes('RAYGEN') ||
                name.includes('LUXEGLOW') || name.includes('VOGUE') || name.includes('SOLARIS') || name.includes('HERITAGE')) {
                return <ApexPayslip data={{ ...commonDetails, ...slip }} />;
              } else if (fmt === 'axion' || name.includes('AXION') || name.includes('AXIOM')) {
                return <AxionPayslip data={{ ...commonDetails, ...slip }} />;
              } else {
                return <Payslip data={{ ...commonDetails, ...slip }} />;
              }
            })()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
