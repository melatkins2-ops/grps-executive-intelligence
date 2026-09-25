(function(){
 const data=window.CSA_BUILDING_STAFF||{};
 const sel=document.getElementById('csaBuildingSelect');
 const cards=document.getElementById('csaStaffCards');
 const summary=document.getElementById('csaStaffSummary');
 if(!sel||!cards)return;
 Object.keys(data).sort().forEach(b=>{const o=document.createElement('option');o.value=b;o.textContent=b;sel.appendChild(o);});
 function render(){
   const rows=data[sel.value]||[];
   const areas=new Set(rows.map(r=>r.area).filter(Boolean));
   summary.textContent=`${rows.length} CSA staff assignments • ${areas.size} CSA areas`;
   cards.innerHTML=rows.map(r=>`<article class="csa-staff-card"><div class="csa-area">${r.area||''}</div><h3>${r.person||''}</h3><div>${r.role||''}</div>${r.contact?`<div class="csa-contact">${r.contact}</div>`:''}</article>`).join('');
 }
 sel.addEventListener('change',render);
 // If Executive Intelligence already has a selected school, call window.setCSAVisitSchool(name).
 window.setCSAVisitSchool=function(name){ if(data[name]){sel.value=name;render();} };
 render();
})();