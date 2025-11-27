const sanitizeNumberInput = (input: string | number) => {
    if (typeof input === "number") return input;
    const sanitized = input.replace(/[^\d.]/g, ""); // keep digits & dot only
    const parts = sanitized.split(".");
    const normalized = parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : sanitized;
    const num = parseFloat(normalized);
    return Number.isFinite(num) ? num : 0;
};

// Utility: format integer part with thousands separators
const formatNumber = (numStr: string) => numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const pipe = (price: string | number, decimals = 4) => {
    const numberPrice = sanitizeNumberInput(price ?? "");
    if (!numberPrice) return "0";

    const factor = Math.pow(10, decimals);
    const truncated = Math.trunc(numberPrice * factor) / factor;

    const fixed = truncated.toFixed(decimals);
    // Trim unnecessary trailing zeros
    const trimmed = fixed.replace(/(\.\d*?[1-9])0+$|\.0+$/g, "$1");
    const [intPart, decimalPart] = trimmed.split(".");
    const formattedInt = formatNumber(intPart);
    return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
};