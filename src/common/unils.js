// 1：防抖功能
export function debounce(func, delay=100) {// 参数1函数2时间
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 2：时间格式化
export function formatDate(date, fmt) {
  // 获取年份
  if (/(y+)/.test(fmt)) {
    // substr 截取
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
// 获取
// M+正则规则
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "H+": date.getHours(),//H24小时制
    "h+": date.getHours()-12,//12小时制
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
}
function padLeftZero(str) {
  // 不足两位补齐两位
  // 如str=4，=》004 截取剩余两位则04 
  return ("00" + str).substr(str.length);
}