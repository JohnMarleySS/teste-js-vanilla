window.onload = function(){

    const primary = JSON.parse(localStorage.getItem('--primary'))
    const secondary = JSON.parse(localStorage.getItem('--secondary'))
    const success = JSON.parse(localStorage.getItem('--success'))
    const danger = JSON.parse(localStorage.getItem('--danger'))
    const warning = JSON.parse(localStorage.getItem('--warning'))


    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty("--secondary", secondary);
    document.documentElement.style.setProperty("--success", success);
    document.documentElement.style.setProperty("--danger", danger);
    document.documentElement.style.setProperty("--warning", warning);
  }
  