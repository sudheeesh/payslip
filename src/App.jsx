import React, { useState } from 'react';
import ModulusPayslip from './ModulusPayslip';
import ApexPayslip from './ApexPayslip';
import AxionPayslip from './AxionPayslip';
import './App.css';

const COMPANY_DATA = {
  'MODULUSTEC PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935581/MODULUS_1_esqcq1.png',
    addresses: {
      'CHENNAI': 'No. 45, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018',
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
    addresses: {
      'Kochi': '2nd Floor, Lalan Tower, High Court Junction, Marine Drive, Kochi, Kerala 682031',
      'Chennai': 'S-2 plaza, SIDCO Industrial Estate, Guindy Road Salai, Chennai, Tamil Nadu 600032',
      'Thiruvananthapuram': '4th floor Technopark Ganga Building, Phase 3, Kulathoor, Thiruvananthapuram, Kerala 695581',
      'Bangalore': '3rd Floor, Hothur Square, 100 Feet Rd, Indiranagar, Bangalore, Karnataka 560038'
    }
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
      'Chennai': 'S105, 2nd floor, Phase-3, Spencer Plaza Mall, Anna Salai, Chennai, Tamil Nadu 600002',
      'Kochi': '205, 3rd Floor, Pioneer Tower, Shanmugham Rd, Marine Drive, Kochi, Kerala 682031',
      'Thiruvananthapuram': 'Impact Rose Gardens Jn, Technopark, Karyavattom, Trivandrum 695581',
      'Bangalore': 'Concorde Tower 2 Level 10, UB City, Vittal Mallya Rd, Bengaluru 560001',
    }
  },
  'SOLARIS POWER TECH PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774948726/file_00000000c9ac71faba57c37284542b5c_btcwfc.png',
    addresses: {
      'Kochi': '42 Alliance Building, Marine Drive, Kochi, Kerala 682031, India',
      'Thiruvananthapuram': '15/B, Technopark Campus, Kazhakkoottam, Trivandrum, Kerala 695581, India',
      'Chennai': '88, OMR IT Expressway, Sholinganallur, Chennai, Tamil Nadu 600119, India',
      'Bangalore': '102, Indiranagar 100ft Road, Bangalore, Karnataka 560038, India'
    }
  },
  'ELITE MANAGEMENT SERVICES PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1770872215/ELITE_MANAGEMENT_SERVICES_PVT_LTD-LOGO_qkwg4f.png',
    addresses: {
      'Chennai': '12/4, Wallace Garden, Nungambakkam, Chennai, Tamil Nadu 600006',
      'Kochi': '5B, Marine Drive, Ernakulam, kochi, Kerala 682031',
      'Thiruvananthapuram': 'TC 15/12, Kowdiar Palace Road, Trivandrum, Kerala 695003',
    }
  },

  'GENESIS GREEN TECH PVT LTD': {
    format: 'default',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774951031/logo_no_bg_svpbqt.png',
    addresses: {
      'Bangalore': 'Plot 42, Electronics City Phase 1, Bangalore, Karnataka 560100',
      'Kochi': '2nd Floor, Infopark Phase II, Kakkanad, Kochi, Kerala 682030',
      'Thiruvananthapuram': 'HV5M+54X, Technopark Campus, Kazhakkoottam, Trivandrum 695581',
    }
  },
  'APEX ASSET PARTNERS PVT LTD': {
    format: 'apex',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935580/file_000000006c8871fab4f2bfef2e2f890d_oncodx.png',
    addresses: {
      'Chennai': 'Raheja Tower, No. 45, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018',
      'Thiruvananthapuram': 'HV5M+54X, Technopark Campus, Kazhakkoottam, Trivandrum 695581',
    }
  },
  'AXION IT PVT LTD': {
    format: 'axion',
    logo: 'https://res.cloudinary.com/dpu9ikeqe/image/upload/v1774935592/AXION_LOGO_1_jaefgu.png',
    addresses: {
      'Thiruvananthapuram': 'Park Centre, Technopark Campus, Kazhakkoottam, Trivandrum, Kerala 695581',
    }
  },
  'COGNIMARK PVT LTD': {
    format: 'default',
    logo: '',
    addresses: {
      'Kochi': 'Block Brigade, 5 - 9th Floor B, Level 5, Cyber Tower, Infopark, Kochi, Kerala 682030',
      'Chennai': 'No. 153, Rajiv Gandhi Salai, OMR Rd, Karapakkam Village, Chennai, Tamil Nadu 600097',
      'Bangalore': '272, 6th Main Rd, HAL 3rd Stage, Motappapalya, Indiranagar, Bangalore, Karnataka 560038',
      'Thiruvananthapuram': '13th Floor, Yamuna Building, Technopark Phase III Main Rd, Trivandrum, Kerala 695583',
    }
  },
  'HYPERION LABS PVT LTD': {
    format: 'default',
    logo: '',
    addresses: {
      'Chennai': 'No. 45, Anna Salai, Guindy, Chennai - 600032',
      'Kochi': '3rd Floor, Lulu Cyber Tower, Infopark, Kochi - 682030',
      'Bangalore': '12, MG Road, Indiranagar, Bangalore - 560038',
      'Thiruvananthapuram': 'TC 15/124, Kowdiar, Near Palace Road, Trivandrum - 695003',
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
    location: 'Chennai',
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
      id: 1,
      monthYear: 'September 2025',
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

  const monthOptions = [];
  const monthNamesList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for (let year = 2024; year <= 2050; year++) {
    monthNamesList.forEach(month => {
      monthOptions.push(`${month} ${year}`);
    });
  }

  const numberToWords = (num) => {
    if (num === 0) return 'Rupees Zero Only';

    const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convert = (n) => {
      if (n === 0) return '';
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '');
      if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' and ' + convert(n % 100) : '');
      
      if (n < 100000) {
        const thousands = Math.floor(n / 1000);
        const rem = n % 1000;
        return convert(thousands) + ' Thousand' + (rem > 0 ? (rem < 100 || rem % 100 === 0 ? ' and ' : ' ') + convert(rem) : '');
      }
      
      if (n < 10000000) {
        const lakhs = Math.floor(n / 100000);
        const rem = n % 100000;
        return convert(lakhs) + ' Lakh' + (rem > 0 ? (rem < 100 || rem % 1000 === 0 ? ' and ' : ' ') + convert(rem) : '');
      }
      
      const crores = Math.floor(n / 10000000);
      const rem = n % 10000000;
      return convert(crores) + ' Crore' + (rem > 0 ? (rem < 100 || rem % 100000 === 0 ? ' and ' : ' ') + convert(rem) : '');
    };

    const wholeNum = Math.floor(num);
    let words = convert(wholeNum);

    // Handle Paisa
    const paisa = Math.round((num - wholeNum) * 100);
    if (paisa > 0) {
      words += ' and ' + convert(paisa) + ' Paise';
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
      const masterSlip = allSlips.find(s => (s.empId === updated.empId || s.employeeName === updated.employeeName) && parseNum(s.basic) > 0) || updated;
      const isMaster = masterSlip.id === updated.id;
      const hasBaseline = parseNum(updated.basic) > 0 && parseNum(updated.travel) > 0;

      let fixedSum = 0;
      if (isMaster && (fieldChanged === 'netPay' || fieldChanged === 'netSalary' || !hasBaseline)) {
        // --- INITIAL APEX SETUP (55% Basic / 45% Other Pool) ---
        const basicVal = Math.round(totalEarnings * 0.55);
        updated.basic = formatNum(basicVal);
        fixedSum += basicVal;

        const otherPool = totalEarnings - basicVal; // Remaining 45%
        // Distinct ratios of the 45% pool — no two amounts will be equal
        // HRA 25%, Travel 9%, Medical 11%, Special 15%, Food 9.5% = 69.5% of pool
        const hraVal        = Math.round(otherPool * 0.25);   // ~11.25% of gross
        const travelVal     = Math.round(otherPool * 0.09);   // ~4.05% of gross
        const medicalVal    = Math.round(otherPool * 0.11);   // ~4.95% of gross
        const specialVal    = Math.round(otherPool * 0.155);  // ~6.975% of gross
        const foodVal       = Math.round(otherPool * 0.085);  // ~3.825% of gross

        updated.hra         = formatNum(hraVal);
        updated.travel      = formatNum(travelVal);
        updated.medical     = formatNum(medicalVal);
        updated.special     = formatNum(specialVal);
        updated.foodAllowance = formatNum(foodVal);

        fixedSum += hraVal + travelVal + medicalVal + specialVal + foodVal;

      } else {
        // --- PERSISTENT STRUCTURE (Frozen Monthly Allowances) ---
        apexFixedKeys.forEach(k => {
          const val = parseNum(masterSlip[k]);
          updated[k] = formatNum(val);
          fixedSum += val;
        });
      }

      // Final Tally: Bonus (65%) and OT (35%) absorb remaining after fixedSum
      // Using 65/35 split ensures bonus ≠ OT and both differ from fixed allowances
      const variableBucket = totalEarnings - fixedSum;
      if (variableBucket >= 0) {
        const bonusVal = Math.round(variableBucket * 0.67);
        updated.performanceBonus = formatNum(bonusVal);
        updated.otAllowance = formatNum(variableBucket - bonusVal);
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

      // Employer Fixed Shares
      const empPf = 558;
      const empEsi = 359;
      const empWelfare = 50;
      updated.pfEmployerShare = formatNum(empPf);
      updated.esiEmployerShare = formatNum(empEsi);
      updated.employerWelfareFund = formatNum(empWelfare);

      const totalEmpShares = empPf + empEsi + empWelfare;
      const distributablePool = totalIncome - totalEmpShares;

      // AXION SMART LOCKING (Structure frozen from Month 1)
      const masterSlip = allSlips.find(s => (s.empId === updated.empId || s.employeeName === updated.employeeName) && parseNum(s.basic) > 0 && s.id !== updated.id) || updated;
      const isMaster = masterSlip.id === updated.id;
      const hasExistingStructure = parseNum(updated.basic) > 0;

      let basicVal = 0;
      let hraVal = 0;
      let travelVal = 0;
      let cityVal = 0;
      let profVal = 0;
      let nightFoodVal = 0;
      let holidayVal = 0;

      if (isMaster && (fieldChanged === 'netSalary' || fieldChanged === 'netPay' || !hasExistingStructure)) {
        // --- INITIAL SETUP (55/45 split) ---
        basicVal = Math.round(distributablePool * 0.55);
        updated.basic = formatNum(basicVal);

        const allowancePool = distributablePool - basicVal;

        // Fix the other pieces based on requested targets (12, 10, 8, 5)
        hraVal = Math.round(distributablePool * 0.12);
        travelVal = Math.round(distributablePool * 0.10);
        cityVal = Math.round(distributablePool * 0.08);
        profVal = Math.round(distributablePool * 0.05);
        nightFoodVal = 2000;
        holidayVal = 500;

        updated.hra = formatNum(hraVal);
        updated.travelingAllowance = formatNum(travelVal);
        updated.cityCompensatory = formatNum(cityVal);
        updated.professionalAllowance = formatNum(profVal);
        updated.nightFoodAllowance = formatNum(nightFoodVal);
        updated.holidayAllowance = formatNum(holidayVal);
      } else {
        // --- PERSISTENT CORE (Frozen from Master Slip) ---
        basicVal = parseNum(masterSlip.basic);
        updated.basic = formatNum(basicVal);

        hraVal = parseNum(masterSlip.hra);
        travelVal = parseNum(masterSlip.travelingAllowance);
        cityVal = parseNum(masterSlip.cityCompensatory);
        profVal = parseNum(masterSlip.professionalAllowance);
        nightFoodVal = parseNum(masterSlip.nightFoodAllowance);
        holidayVal = parseNum(masterSlip.holidayAllowance);

        updated.hra = formatNum(hraVal);
        updated.travelingAllowance = formatNum(travelVal);
        updated.cityCompensatory = formatNum(cityVal);
        updated.professionalAllowance = formatNum(profVal);
        updated.nightFoodAllowance = formatNum(nightFoodVal);
        updated.holidayAllowance = formatNum(holidayVal);
      }

      // --- DYNAMIC ABSORPTION (Target gap is reflected ONLY in Shift Allowance) ---
      const fixedSum = basicVal + hraVal + travelVal + cityVal + profVal + nightFoodVal + holidayVal;
      const shiftVal = distributablePool - fixedSum;
      updated.shiftAllowance = formatNum(shiftVal);

      updated.grossIncome = formatNum(basicVal + hraVal + travelVal + cityVal + profVal + shiftVal);

      // Incentives and Bonus are set to 0 strictly
      updated.specialVariablePay = formatNum(0);
      updated.loyaltyBonus = formatNum(0);
      updated.referral = formatNum(0);

    } else {
      // --- MODULUSTEC CALCULATION (Strictly Independent) ---
      // Default PF = 1850, WWF = 20 if not set
      const parseOrDefault = (val, def) => (val === undefined || val === '' || val === null) ? def : parseNum(val);
      const pf = parseOrDefault(updated.pf, 1850);
      const wwf = parseOrDefault(updated.wwf, 20);

      // Always stamp the defaults back so they appear in the payslip
      if (updated.pf === undefined || updated.pf === '' || updated.pf === null) updated.pf = formatNum(pf);
      if (updated.wwf === undefined || updated.wwf === '' || updated.wwf === null) updated.wwf = formatNum(wwf);

      const totalDeductions = pf + wwf;
      updated.totalDeductions = formatNum(totalDeductions);
      updated.grossDeductions = formatNum(totalDeductions);

      if (fieldChanged === 'netSalary') {
        const netValue = parseNum(updated.netSalary);
        const targetEarnings = netValue + totalDeductions;
        updated.totalEarnings = formatNum(targetEarnings);

        // MODULUSTEC SMART LOCKING LOGIC
        // 55% goes to Basic. 45% is split equally across ALL 8 allowances
        // (lta, hra, addlHra, medical, transport, superannuation, lunch, conveyance).
        // For the SAME PERSON in different months: the 7 fixed ones stay frozen,
        // only Conveyance floats to tally the new net salary.
        // For a NEW PERSON (or first/only slip): everything is recalculated fresh.

        // 7 fixed allowances (frozen for same person across months)
        const fixedAllowanceKeys = ['lta', 'hra', 'addlHra', 'medical', 'transport', 'superannuation', 'lunch'];
        const keysToFreeze = ['basic', ...fixedAllowanceKeys];

        // Find a DIFFERENT slip for the same person that already has a Modulus structure
        const masterSlip = allSlips.find(
          s => (s.empId === updated.empId || s.employeeName === updated.employeeName)
            && parseNum(s.basic) > 0
            && parseNum(s.conveyance) > 0
            && s.id !== updated.id
        );

        let fixedSum = 0;

        if (!masterSlip) {
          // --- FRESH / NEW PERSON: 55% Basic + 45% split with different % per allowance ---
          // Each allowance gets a different share of the gross so amounts vary (none exceed ~9k)
          // Ratios of the TOTAL gross: HRA 8%, Conv 7%, LTA 6%, AddlHRA 6%, Medical 5%, Transport 5%, Super 4%, Lunch 4% = 45%
          const basicVal = Math.round(targetEarnings * 0.55);
          updated.basic = formatNum(basicVal);

          const hraVal = Math.round(targetEarnings * 0.08);
          const convVal = Math.round(targetEarnings * 0.03);
          const ltaVal = Math.round(targetEarnings * 0.07);
          const addlHraVal = Math.round(targetEarnings * 0.06);
          const medicalVal = Math.round(targetEarnings * 0.09);
          const transportVal = Math.round(targetEarnings * 0.05);
          const superVal = Math.round(targetEarnings * 0.04);
          // Lunch absorbs the rounding remainder so total always matches exactly
          const lunchVal = targetEarnings - basicVal - hraVal - convVal - ltaVal - addlHraVal - medicalVal - transportVal - superVal;

          updated.hra = formatNum(hraVal);
          updated.conveyance = formatNum(convVal);
          updated.lta = formatNum(ltaVal);
          updated.addlHra = formatNum(addlHraVal);
          updated.medical = formatNum(medicalVal);
          updated.transport = formatNum(transportVal);
          updated.superannuation = formatNum(superVal);
          updated.lunch = formatNum(lunchVal);

        } else {
          // --- SAME PERSON, MONTH 2+: Freeze basic + 7 allowances, only Conveyance changes ---
          keysToFreeze.forEach(key => {
            const val = parseNum(masterSlip[key]);
            updated[key] = formatNum(val);
            fixedSum += val;
          });
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
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
                    <option value="Chennai">Chennai</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Bangalore">Bangalore</option>
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
                      key === 'pan' ? 'PAN Number' :
                        key === 'uan' ? 'UAN No' :
                          key === 'esi' ? 'ESI Account No' :
                            key === 'pfNo' ? 'PF No' :
                              key === 'deptCode' ? 'Department Code' :
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

            {monthlySlips.map((slip) => (
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
                              {key === 'monthYear' ? 'Month & Year' :
                                key === 'empId' ? 'Employee ID' :
                                  key === 'employeeName' ? 'Employee Name' :
                                    key === 'grade' ? 'Grade' :
                                      key === 'bankAccNo' ? 'Bank A/c No' :
                                        key === 'pf' ? 'PF Deduction' :
                                          key === 'pt' ? 'Pro Tax (PT)' :
                                            key === 'wwf' ? 'WWF Deduction' :
                                              key === 'netSalary' ? 'Target Net Salary' :
                                                key === 'basic' ? 'Basic Pay' :
                                                  key === 'conveyance' ? 'Conveyance' :
                                                    key === 'lta' ? 'LTA Monthly' :
                                                      key === 'hra' ? 'House Rent Allowance' :
                                                        key === 'addlHra' ? 'Additional HRA' :
                                                          key === 'medical' ? 'Medical Allowance' :
                                                            key === 'transport' ? 'Transport Allow' :
                                                              key === 'superannuation' ? 'Superannuation' :
                                                                key === 'lunch' ? 'Lunch Allowance' :
                                                                  key === 'inWords' ? 'In Words' :
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
                return <ModulusPayslip data={{ ...commonDetails, ...slip }} />;
              }
            })()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
