export default function Manifesto() {
  return (
    <div className="hidden lg:block w-80">
      <div className="bg-white border-gray-500/20 border rounded-lg p-4 mb-6">
        <h1 className="font-mm">ရည်ရွယ်ချက်နှင့် မျှော်မှန်းချက်</h1>
        <span className="w-full border-b h-1 border-gray-500/30 block my-1 p-0"></span>
        <p className="text-base indent-8 font-mm mb-2">
          မြန်မာနိုင်ငံမှ{" "}
          <code className="font-mono tracking-wide text-mugi-red-500">
            programming
          </code>{" "}
          ကို စိတ်ဝင်စားသူများ ပွင့်လင်းမြင်သာစွာ ပူးပေါင်းပါဝင်နိုင်မည့်
          အမေးအဖြေကွန်ယက်တစ်ခုအဖြစ်ရပ်တည်နိုင်ရန် ရည်ရွယ်ပါသည်။
        </p>
        <button className="flex items-center justify-center px-4 py-2 w-full font-mm font-black bg-mugi-300 text-mugi-red-500 rounded-md hover:bg-mugi-400 cursor-pointer">
          ပါဝင်မည်။
        </button>
      </div>
    </div>
  );
}
