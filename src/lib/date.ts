export default function getBurmeseMonth(month: number) {
  const map : Record<number, string> = {
    0: "ဇန်နဝါရီ",
    1: "ဖေဖော်ဝါရီ",
    2: "မတ်",
    3: "ဧပြီ",
    4: "မေ",
    5: "ဇွန်",
    6: "ဇူလိုင်",
    7: "ဩဂုတ်",
    8: "စက်တင်ဘာ",
    9: "အောက်တိုဘာ",
    10: "နိုဝင်ဘာ",
    11: "ဒီဇင်ဘာ",
  };
  if(month in map) {
    return map[month]
  }
}
