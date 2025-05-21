export const PAGE_SIZE = 12;
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(value);

export function loadState() {
  try {
    const itemfromLocalStorage = localStorage.getItem("cart");
    return itemfromLocalStorage ? JSON.parse(itemfromLocalStorage) : undefined;
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
}

export function saveState(state) {
  try {
    const itemToLocalStorage = JSON.stringify(state);
    localStorage.setItem("cart", itemToLocalStorage);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
}

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadReceiptPDF = async (ref, setLoading) => {
  try {
    setLoading(true); // Show loading indicator
    const canvas = await html2canvas(ref.current, {
      scale: 1, // Reduce this for smaller size
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("ArtGrid_Receipt.pdf");
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    alert("Something went wrong while generating the PDF.");
  } finally {
    setLoading(false); // Hide loading indicator
  }
};
