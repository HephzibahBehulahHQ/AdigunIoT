(() => {
 const key='adigun-play-return:'+location.pathname;
 let target=history.state?.adigunPlayReturn;
 try{
  const pending=sessionStorage.getItem(key);
  sessionStorage.removeItem(key);
  if(pending){
   target=pending;
   history.replaceState({...history.state,adigunPlayReturn:target},'');
  }
 }catch{}
 const link=document.querySelector('header a');
 if(!link||typeof target!=='string'||!/^#demo\/home\/play-now(?:\?|$)/.test(target))return;
 link.hash=target;
 link.textContent='↶ Results';
 link.setAttribute('aria-label','Back to results');
})();
