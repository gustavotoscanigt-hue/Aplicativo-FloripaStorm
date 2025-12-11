
export const formatTime = (seconds: number): string => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 100);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
};

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const normalizePosition = (
  clientX: number,
  clientY: number,
  element: HTMLElement
) => {
  const rect = element.getBoundingClientRect();
  return {
    x: (clientX - rect.left) / rect.width,
    y: (clientY - rect.top) / rect.height,
  };
};

export const denormalizePosition = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return {
    x: x * width,
    y: y * height,
  };
};

// Helper to encode JSON data into a URL-safe Base64 string (handles Unicode)
export const encodeStateToUrl = (data: any): string => {
  try {
    const json = JSON.stringify(data);
    // Encode specifically for URL (handling UTF-8)
    return btoa(encodeURIComponent(json).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(_: string, p1: string) {
            return String.fromCharCode(parseInt(p1, 16));
    }));
  } catch (e) {
    console.error("Failed to encode state", e);
    return "";
  }
};

// Helper to decode URL-safe Base64 string back to JSON
export const decodeStateFromUrl = (str: string): any => {
  try {
    const decodedStr = atob(str);
    const json = Array.from(decodedStr).map((c: string) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('');
    return JSON.parse(decodeURIComponent(json));
  } catch (e) {
    console.error("Failed to decode state", e);
    return null;
  }
};