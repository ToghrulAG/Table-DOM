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
    th.textContent = keyword;
    tHeadRow.appendChild(th);
  });

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
