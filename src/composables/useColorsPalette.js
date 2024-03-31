export function useColorsPalette() {
  const colors = {
    blue: { light: "rgb(191 219 254)", dark: "rgb(59 130 246)" },
    red: { light: "rgb(254 202 202)", dark: "rgb(239 68 68)" },
    orange: { light: "rgb(254 215 170)", dark: "rgb(249 115 22)" },
    green: { light: "rgb(187 247 208)", dark: "rgb(34 197 94)" },
  };

  const logosColors = {
    twitter: { light: "#bae6fd", dark: "#0ea5e9" },
    facebook: { light: "#bfdbfe", dark: "#3b82f6" },
    youtube: { light: "#fecaca", dark: "#ef4444" },
    linkedin: { light: "#93c5fd", dark: "#1e40af" },
  };

  function get(name) {
    return colors[name] ?? logosColors[name] ?? colors["blue"];
  }

  function getLight(name) {
    return get(name).light;
  }

  function getDark(name) {
    return get(name).dark;
  }

  return { colors, get, getLight, getDark };
}
