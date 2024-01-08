/// BIZ SIZI YORDUQ, SIZDE BIZI YORDUNUZ HOCA :)
//
/// TABLENIN ILKIN STRUKTURUNU DUZELTMEK UCUN YARADILAN DEYISKENLER

let tHead = document.createElement('thead');
let tHeadRow = document.createElement('tr');
let tBody = document.createElement('tbody');
let tBodyRow = document.createElement('tr');

/// TABLE ELEMENTLERINI BIR BIRINE BAGLAMAQ UCUN YAZILAN FUNKSIYA 
//  getAndReplaceData() FUNKSIYASININ ICINI OXUYUN

function createTable() {
  let table = document.createElement('table');
  document.querySelector('root').appendChild(table);
  document.querySelector('table').classList.add('table', 'table-striped', 'table-hover')
  table.append(tHead, tBody);
  tHead.append(tHeadRow);
  tBody.append(tBodyRow);
}

async function getAndReplaceData() {
  let response = await fetch('https://mocki.io/v1/a870b67b-e8a1-4da3-966c-a4431350185a');
  let data = await response.json();

  // keywords DEYISKENINI CEDVELDE HEADERLERI YAZDIRMAQ UCUN ISTIFADE ETMISEM. 

  let keywords = Object.keys(data[0]);

/// ASYNC/AWAIT, KODUMUZ DATANI UGURLA FETCH EDENDEN SONRA
//
/// createTable() FUNKSIYAMIZ ISE DUSUR

  createTable();    

// BIZE BASLIQ UCUN SIRF KEYWORDLER LAZIM OLDUGUNDAN keyword DEYİSKENİ UZERİNDE İTERASİYA EDİB
// DATANI LAZIMI OLAN DEYISKENKLERE APPEND ETMISIK, QALAN ISLERI ISE BIZIM UCUN createTable() FUNKSIYASI EDIR

  keywords.forEach(keyword => {
    let th = document.createElement('th');
    th.textContent = keyword.toUpperCase();
    tHeadRow.appendChild(th);
  });

// NESTED LOOPS ISTIFADE OLUNUB ILK LOOPDA BIZE LORU DILDE DESEK USER MELUMATLARININ ROW-NU QAYTARIR
// VE LAZIMI QEDER ELEMENTI SAY OLARAQ TR (YENI ROW XANA) KIMI YARADIR
// IKINCI ITERASIYADA ISE BIZE USERLERIN MELUMATLARINI QAYTARIR (ADRESS, NOMRE VE S), MOVCUD SAY QEDER ITERASIYA EDIB TD YARADIR VE HEMIN VALUE-LARI TEZT OLARAQ TD-E YAZDIRIR VE SONRA BIRINCI ITERASIYADA OLAN TR-NIN ICINE CHILD OLARAQ TDNI VERIR. ITERASIYA BITDIKDE HAZIR OLARAQ TBODY TAG-NIN ICINE TRNI ELAVE EDIR VE NETICEDE APIDEN GELMIS MELUMATLAR BIZIM TABLEDE GORSENIR.

  data.forEach(user => {
    let tr = document.createElement('tr');
    keywords.forEach(keyword => {
      let td = document.createElement('td');
      td.textContent = user[keyword];
      tr.appendChild(td);
    });
    tBody.appendChild(tr);
  });
}

getAndReplaceData();


/// GIT LINK : https://github.com/ToghrulAG/Table-DOM.git
