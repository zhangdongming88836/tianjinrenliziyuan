const util =  {
  isOldBrowse: () => {
    let browser = util.getBrowse()
    if (browser.name == 'chrome' && browser.version.substring(0, 2) * 1 < 42) {
      return true
    } else {
      return false
    }
  },
  getBrowse: () => {
    let browser = {};
    let userAgent = navigator.userAgent.toLowerCase();
    let s;
    (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1] : (s = userAgent.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s = userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
    let version = {};
    if (browser.ie) {
      version = {
        name: 'ie',
        version: browser.ie
      }
    } else if (browser.firefox) {
      version = {
        name: 'firefox',
        version: browser.firefox
      }
    }
    else if (browser.chrome) {
      version = {
        name: 'chrome',
        version: browser.chrome
      }
    }
    else if (browser.opera) {
      version = {
        name: 'opera',
        version: browser.opera
      }
    } else if (browser.safari) {
      version = {
        name: 'safari',
        version: browser.safari
      }
    } else {
      version = {
        name: 'unknow',
      }
    }
    return version;
  }
}

export default util
