import React, { useState, useEffect } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import './PdfEditor.css';

export default function PdfEditor() {
  const [templateFile, setTemplateFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  
  // Default values based on Modulustec
  const [formData, setFormData] = useState({
    monthYear: 'FEBRUARY 2026',
    empName: 'AROMAL P',
    empNo: 'K2185',
    doj: 'May 22, 2023',
    designation: 'Software Developer',
    location: 'KOCHI',
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
  });

  // Extremely rough estimate of coordinates (X, Y) 
  // PDF coordinates start from bottom-left (0,0)
  const [coords, setCoords] = useState({
    monthYear: { x: 250, y: 730 },
    empName: { x: 50, y: 680 },
    empNo: { x: 350, y: 680 },
    doj: { x: 150, y: 660 },
    designation: { x: 150, y: 640 },
    location: { x: 150, y: 620 },
    calDays: { x: 450, y: 660 },
    paidDays: { x: 450, y: 640 },
    basic: { x: 450, y: 550 },
    conveyance: { x: 450, y: 530 },
    lta: { x: 450, y: 510 },
    hra: { x: 450, y: 490 },
    addlHra: { x: 450, y: 470 },
    medical: { x: 450, y: 450 },
    transport: { x: 450, y: 430 },
    superannuation: { x: 450, y: 410 },
    lunch: { x: 450, y: 390 },
    totalEarnings: { x: 450, y: 360 },
    pf: { x: 450, y: 320 },
    wwf: { x: 450, y: 300 },
    totalDeductions: { x: 450, y: 270 },
    netSalary: { x: 450, y: 210 },
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const buffer = await file.arrayBuffer();
      setTemplateFile(buffer);
    }
  };

  const handleFormChange = (key, val) => setFormData(prev => ({ ...prev, [key]: val }));
  const handleCoordChange = (key, axis, val) => {
    setCoords(prev => ({
      ...prev,
      [key]: { 
        ...prev[key], 
        [axis]: axis === 'erase' ? val : parseInt(val) || 0 
      }
    }));
  };

  const generatePdf = async () => {
    if (!templateFile) return;

    try {
      const pdfDoc = await PDFDocument.load(templateFile);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      // Dark blue color corresponding to Modulustec
      const textColor = rgb(0.05, 0.20, 0.35);

      Object.keys(formData).forEach(key => {
        const coord = coords[key];
        const textToDraw = formData[key];
        
        if (coord && textToDraw) {
          // Draw white box to erase existing text
          if (coord.erase && coord.w && coord.h) {
            firstPage.drawRectangle({
              x: coord.x - 2,
              y: coord.y - 2, // Slightly offset downwards generally covers descenders
              width: coord.w,
              height: coord.h,
              color: rgb(1, 1, 1), // purely white
            });
          }

          // Draw new text
          firstPage.drawText(textToDraw, {
            x: coord.x,
            y: coord.y + 2, // Slight adjustment upwards away from background
            size: 10,
            color: textColor,
          });
        }
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  useEffect(() => {
    generatePdf();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateFile, formData, coords]);

  return (
    <div className="pdf-editor-container">
      <div className="sidebar">
        <h2>Custom PDF Generator</h2>
        
        <div className="upload-section">
          <label className="upload-label">
            1. Upload Model Payslip PDF
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
          </label>
        </div>

        {templateFile && (
          <div className="fields-section">
            <h3>2. Enter Details & Align</h3>
            <p style={{fontSize: 12, color: '#666', marginBottom: 10}}>
              *If the PDF already has text, set a Width (W) and Height (H) and check 'Erase' to draw a white box over the old text.
            </p>
            {Object.keys(formData).map(key => (
              <div key={key} className="field-group">
                <label>{key}</label>
                <input 
                  type="text" 
                  value={formData[key]} 
                  onChange={(e) => handleFormChange(key, e.target.value)} 
                />
                <div className="coord-inputs">
                  <span>X:</span>
                  <input 
                    type="number" 
                    value={coords[key].x} 
                    onChange={(e) => handleCoordChange(key, 'x', e.target.value)} 
                  />
                  <span>Y:</span>
                  <input 
                    type="number" 
                    value={coords[key].y} 
                    onChange={(e) => handleCoordChange(key, 'y', e.target.value)} 
                  />
                  <span>W:</span>
                  <input 
                    type="number" 
                    value={coords[key].w} 
                    onChange={(e) => handleCoordChange(key, 'w', e.target.value)} 
                  />
                  <span>H:</span>
                  <input 
                    type="number" 
                    value={coords[key].h} 
                    onChange={(e) => handleCoordChange(key, 'h', e.target.value)} 
                  />
                  <label style={{display: 'inline-flex', alignItems: 'center', marginLeft: '5px', gap: '5px'}}>
                    <input 
                      type="checkbox" 
                      style={{width: 'auto'}}
                      checked={coords[key].erase} 
                      onChange={(e) => handleCoordChange(key, 'erase', e.target.checked)} 
                    />
                    Erase
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="preview-area">
        {previewUrl ? (
          <iframe 
            src={previewUrl} 
            title="PDF Preview" 
            className="pdf-iframe"
          />
        ) : (
          <div className="no-pdf">
            <p>Please upload the blank model Payslip PDF to start.</p>
          </div>
        )}
      </div>
    </div>
  );
}
