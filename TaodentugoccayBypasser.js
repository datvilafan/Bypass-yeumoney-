
(() => {
'use strict';
const STORAGE_KEYS={auto_bypass:'auto_bypass'};
const log=(...a)=>console.log('%c[TaodentugoccayBypasser]','color:purple;font-weight:bold;',...a);
const notify=(t,s='Taodentugoccay Bypasser')=>{if(typeof GM_notification==='function'){GM_notification({text:t,title:s,timeout:4000});}log(t);};
const runBypass=()=>{console.log('[TaodentugoccayBypasser] Running bypass...');alert('Bypass đang chạy...(Taodentugoccay)');};
const resetSettings=()=>{if(confirm('Bạn có chắc muốn reset cài đặt không?')){GM_deleteValue(STORAGE_KEYS.auto_bypass);notify('Cài đặt đã được reset.');}};
const toggleAutoBypass=()=>{const c=GM_getValue(STORAGE_KEYS.auto_bypass,false);GM_setValue(STORAGE_KEYS.auto_bypass,!c);notify('Auto Bypass hiện tại: '+(!c?'ĐÃ BẬT':'ĐÃ TẮT'));};
const showChangelog=()=>{alert(`===== Taodentugoccay Bypasser =====
+ Bypass tự động (Auto Bypass)
+ Reset cài đặt nhanh chóng
+ Xem cập nhật (Changelog)
+ Thông báo và nhật ký tối ưu
===================================`);};
const initMenu=()=>{GM_registerMenuCommand('🚀 Chạy Bypass ngay',runBypass);
GM_registerMenuCommand('🔁 Bật/Tắt Auto Bypass',toggleAutoBypass);
GM_registerMenuCommand('🧹 Reset Cài Đặt',resetSettings);
GM_registerMenuCommand('📝 Xem Thay Đổi (Changelog)',showChangelog);};
window.TaodentugoccayBypasser={init:function(){log('Taodentugoccay Bypasser đã sẵn sàng.');initMenu();const a=GM_getValue(STORAGE_KEYS.auto_bypass,false);if(a)runBypass();},runBypass};
(function autoInit(n=15){const L=()=>window.TaodentugoccayBypasser;L()?L().init&&L().init():n&&setTimeout(()=>autoInit(n-1),500);})();
})();
