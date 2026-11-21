vorm = {
    aantal: ['ev','mv'],
    modus: ['ind','conj'],
    diathese: ['act','pass'],
    persoon: ['1e','2e','3e'],
    tijd: ['pra','imp','pft','plq','fut','ftx']
}
ww_lijst = [
  { inf: 'amare',      rijtje: 'a', stam: { pra: 'ama',      pft: 'amav',    ppp: 'amat' } },
  { inf: 'vocare',     rijtje: 'a', stam: { pra: 'voca',     pft: 'vocav',   ppp: 'vocat' } },
  { inf: 'parare',     rijtje: 'a', stam: { pra: 'para',     pft: 'parav',   ppp: 'parat' } },
  { inf: 'laudare',    rijtje: 'a', stam: { pra: 'lauda',    pft: 'laudav',  ppp: 'laudat' } },
  { inf: 'navigare',   rijtje: 'a', stam: { pra: 'naviga',   pft: 'navigav', ppp: 'navigat' } },
  { inf: 'orare',      rijtje: 'a', stam: { pra: 'ora',      pft: 'orav',    ppp: 'orat' } },
  { inf: 'narrare',    rijtje: 'a', stam: { pra: 'narra',    pft: 'narrav',  ppp: 'narrat' } },
  { inf: 'pugnare',    rijtje: 'a', stam: { pra: 'pugna',    pft: 'pugnav',  ppp: 'pugnat' } },
  { inf: 'ambulare',   rijtje: 'a', stam: { pra: 'ambula',   pft: 'ambulav', ppp: 'ambulat' } },
  { inf: 'spectare',   rijtje: 'a', stam: { pra: 'specta',   pft: 'spectav', ppp: 'spectat' } },
  { inf: 'monstrare',  rijtje: 'a', stam: { pra: 'monstra',  pft: 'monstrav',ppp: 'monstrat' } },
  { inf: 'cantare',    rijtje: 'a', stam: { pra: 'canta',    pft: 'cantav',  ppp: 'cantat' } },
  { inf: 'iuvare',     rijtje: 'a', stam: { pra: 'iuva',     pft: 'iuv',     ppp: 'iut' } },
  { inf: 'dare',       rijtje: 'a', stam: { pra: 'da',       pft: 'ded',     ppp: 'dat' } },
  { inf: 'stare',      rijtje: 'a', stam: { pra: 'sta',      pft: 'stet',    ppp: 'stat' } },
  { inf: 'portare',    rijtje: 'a', stam: { pra: 'porta',    pft: 'portav',  ppp: 'portat' } },
  { inf: 'habitare',   rijtje: 'a', stam: { pra: 'habita',   pft: 'habitav', ppp: 'habitat' } },
  { inf: 'natare',     rijtje: 'a', stam: { pra: 'nata',     pft: 'natav',   ppp: 'natat' } },
  { inf: 'occupare',   rijtje: 'a', stam: { pra: 'occupa',   pft: 'occupav', ppp: 'occupat' } },
  { inf: 'negare',     rijtje: 'a', stam: { pra: 'nega',     pft: 'negav',   ppp: 'negat' } },
 
  // --- e-rijtje (2e conjugatie) ---
  { inf: 'monere',     rijtje: 'e', stam: { pra: 'mone',     pft: 'monu',    ppp: 'monit' } },
  { inf: 'habere',     rijtje: 'e', stam: { pra: 'habe',     pft: 'habu',    ppp: 'habit' } },
  { inf: 'tenere',     rijtje: 'e', stam: { pra: 'tene',     pft: 'tenu',    ppp: 'tent' } },
  { inf: 'movere',     rijtje: 'e', stam: { pra: 'move',     pft: 'mov',     ppp: 'mot' } },
  { inf: 'sedere',     rijtje: 'e', stam: { pra: 'sede',     pft: 'sed',     ppp: 'sess' } },
  { inf: 'manere',     rijtje: 'e', stam: { pra: 'mane',     pft: 'mans',    ppp: 'mans' } },
  { inf: 'debere',     rijtje: 'e', stam: { pra: 'debe',     pft: 'debu',    ppp: 'debit' } },
  { inf: 'ridere',     rijtje: 'e', stam: { pra: 'ride',     pft: 'ris',     ppp: 'ris' } },
  { inf: 'cavere',     rijtje: 'e', stam: { pra: 'cave',     pft: 'cav',     ppp: 'caut' } },
  { inf: 'respondere', rijtje: 'e', stam: { pra: 'responde', pft: 'respond', ppp: 'respons' } },
  { inf: 'iubere',     rijtje: 'e', stam: { pra: 'iube',     pft: 'iuss',    ppp: 'iuss' } },
  { inf: 'videre',     rijtje: 'e', stam: { pra: 'vide',     pft: 'vid',     ppp: 'vis' } },
  { inf: 'tacere',     rijtje: 'e', stam: { pra: 'tace',     pft: 'tacu',    ppp: 'tacit' } },
  { inf: 'docere',     rijtje: 'e', stam: { pra: 'doce',     pft: 'docu',    ppp: 'doct' } },
  { inf: 'terrere',    rijtje: 'e', stam: { pra: 'terre',    pft: 'terru',   ppp: 'territ' } },
  { inf: 'augere',     rijtje: 'e', stam: { pra: 'auge',     pft: 'aux',     ppp: 'auct' } },
  { inf: 'suadere',    rijtje: 'e', stam: { pra: 'suade',    pft: 'suas',    ppp: 'suas' } },
  { inf: 'torquere',   rijtje: 'e', stam: { pra: 'torque',   pft: 'tors',    ppp: 'tort' } },
 
  // --- mk-rijtje (3e conjugatie, medeklinkerstam) ---
  { inf: 'mittere',    rijtje: 'mk', stam: { pra: 'mitt',    pft: 'mis',     ppp: 'miss' } },
  { inf: 'ducere',     rijtje: 'mk', stam: { pra: 'duc',     pft: 'dux',     ppp: 'duct' } },
  { inf: 'dicere',     rijtje: 'mk', stam: { pra: 'dic',     pft: 'dix',     ppp: 'dict' } },
  { inf: 'agere',      rijtje: 'mk', stam: { pra: 'ag',      pft: 'eg',      ppp: 'act' } },
  { inf: 'scribere',   rijtje: 'mk', stam: { pra: 'scrib',   pft: 'scrips',  ppp: 'script' } },
  { inf: 'legere',     rijtje: 'mk', stam: { pra: 'leg',     pft: 'leg',     ppp: 'lect' } },
  { inf: 'ponere',     rijtje: 'mk', stam: { pra: 'pon',     pft: 'posu',    ppp: 'posit' } },
  { inf: 'petere',     rijtje: 'mk', stam: { pra: 'pet',     pft: 'petiv',   ppp: 'petit' } },
  { inf: 'emere',      rijtje: 'mk', stam: { pra: 'em',      pft: 'em',      ppp: 'empt' } },
  { inf: 'vincere',    rijtje: 'mk', stam: { pra: 'vinc',    pft: 'vic',     ppp: 'vict' } },
  { inf: 'relinquere', rijtje: 'mk', stam: { pra: 'relinqu', pft: 'reliqu',  ppp: 'relict' } },
  { inf: 'discedere',  rijtje: 'mk', stam: { pra: 'disced',  pft: 'discess', ppp: 'discess' } },
  { inf: 'claudere',   rijtje: 'mk', stam: { pra: 'claud',   pft: 'claus',   ppp: 'claus' } },
  { inf: 'ludere',     rijtje: 'mk', stam: { pra: 'lud',     pft: 'lus',     ppp: 'lus' } },
  { inf: 'cadere',     rijtje: 'mk', stam: { pra: 'cad',     pft: 'cecid',   ppp: 'cas' } },
  { inf: 'caedere',    rijtje: 'mk', stam: { pra: 'caed',    pft: 'cecid',   ppp: 'caes' } },
  { inf: 'credere',    rijtje: 'mk', stam: { pra: 'cred',    pft: 'credid',  ppp: 'credit' } },
  { inf: 'vivere',     rijtje: 'mk', stam: { pra: 'viv',     pft: 'vix',     ppp: 'vict' } },
  { inf: 'vertere',    rijtje: 'mk', stam: { pra: 'vert',    pft: 'vert',    ppp: 'vers' } },
  { inf: 'quaerere',   rijtje: 'mk', stam: { pra: 'quaer',   pft: 'quaesiv', ppp: 'quaesit' } },
  { inf: 'regere',     rijtje: 'mk', stam: { pra: 'reg',     pft: 'rex',     ppp: 'rect' } },
  { inf: 'sumere',     rijtje: 'mk', stam: { pra: 'sum',     pft: 'sumps',   ppp: 'sumpt' } },
  { inf: 'tollere',    rijtje: 'mk', stam: { pra: 'toll',    pft: 'sustul',  ppp: 'sublat' } },
  { inf: 'currere',    rijtje: 'mk', stam: { pra: 'curr',    pft: 'cucurr',  ppp: 'curs' } },
 
  // --- gem-rijtje (3e conjugatie, -io) ---
  { inf: 'capere',     rijtje: 'gem', stam: { pra: 'capi',     pft: 'cep',    ppp: 'capt' } },
  { inf: 'facere',     rijtje: 'gem', stam: { pra: 'faci',     pft: 'fec',    ppp: 'fact' } },
  { inf: 'iacere',     rijtje: 'gem', stam: { pra: 'iaci',     pft: 'iec',    ppp: 'iact' } },
  { inf: 'fugere',     rijtje: 'gem', stam: { pra: 'fugi',     pft: 'fug',    ppp: 'fugit' } },
  { inf: 'cupere',     rijtje: 'gem', stam: { pra: 'cupi',     pft: 'cupiv',  ppp: 'cupit' } },
  { inf: 'rapere',     rijtje: 'gem', stam: { pra: 'rapi',     pft: 'rapu',   ppp: 'rapt' } },
  { inf: 'accipere',   rijtje: 'gem', stam: { pra: 'accipi',   pft: 'accep',  ppp: 'accept' } },
  { inf: 'incipere',   rijtje: 'gem', stam: { pra: 'incipi',   pft: 'incep',  ppp: 'incept' } },
 
  // --- i-rijtje (4e conjugatie) ---
  { inf: 'audire',     rijtje: 'i', stam: { pra: 'audi',     pft: 'audiv',   ppp: 'audit' } },
  { inf: 'venire',     rijtje: 'i', stam: { pra: 'veni',     pft: 'ven',     ppp: 'vent' } },
  { inf: 'scire',      rijtje: 'i', stam: { pra: 'sci',      pft: 'sciv',    ppp: 'scit' } },
  { inf: 'dormire',    rijtje: 'i', stam: { pra: 'dormi',    pft: 'dormiv',  ppp: 'dormit' } },
  { inf: 'sentire',    rijtje: 'i', stam: { pra: 'senti',    pft: 'sens',    ppp: 'sens' } },
  { inf: 'aperire',    rijtje: 'i', stam: { pra: 'aperi',    pft: 'aperu',   ppp: 'apert' } },
  { inf: 'punire',     rijtje: 'i', stam: { pra: 'puni',     pft: 'puniv',   ppp: 'punit' } },
  { inf: 'finire',     rijtje: 'i', stam: { pra: 'fini',     pft: 'finiv',   ppp: 'finit' } },
  { inf: 'custodire',  rijtje: 'i', stam: { pra: 'custodi',  pft: 'custodiv',ppp: 'custodit' } },
  { inf: 'invenire',   rijtje: 'i', stam: { pra: 'inveni',   pft: 'inven',   ppp: 'invent' } },
]
uitgang = {
    act: {
        pra: [
            ['o','s','t'],
            ['mus', 'tis', 'nt']
        ],
        imp: [
            ['m', 's', 't'],
            ['mus', 'tis', 'nt']
        ],
        fut: [
            ['am', 's', 't'],
            ['mus', 'tis', 'nt']
        ],
        pft: [
            ['i', 'isti', 'it'],
            ['imus', 'istis', 'erunt']
        ],
        plq: [
            ['eram','eras','erat'],
            ['eramus','eratis','erant']
        ],
        ftx: [
            ['ero','eris','erit'],
            ['erimus','eritis','erunt']
        ]
    },
    pas: {
        pra: [
            ['(o)r','ris','tur'],
            ['mur', 'mini', 'ntur']
        ],
        imp: [
            ['r', 'ris', 'tur'],
            ['mur', 'mini', 'ntur']
        ],
        fut: [
            ['(o)r','eris','itur'],
            ['imur','imini','untur']
        ]
    }
}
esse = {
    ind: {
        pra: [
            ['sum','es','est'],
            ['sumus','estis','sunt']
        ],
        imp: [
            ['eram','eras','erat'],
            ['eramus','eratis','erant']
        ],
        fut: [
            ['ero','eris','erit'],
            ['erimus','eritis','erint']
        ]
    },
    con: {
        pra: [
            ['sim','sis','sit'],
            ['simus','sitis','sint']
        ],
        imp: [
            ['essem','esses','esset'],
            ['essemus','essetis','essent']
        ]
    }
}

function copy_text() {
    let str = '';
    document.querySelectorAll('.output').forEach(element => {
        if (element.classList.contains('form_str')) {
            str+=`	${element.innerHTML.replace(/<[^>]*>/g, '')}`;
        } else {
            str+=`\n${element.innerHTML.replace(/<[^>]*>/g, '')}`;
        }
    });
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(str);
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    copyContent();
    alert('Gekopieerd!');
}




const output = document.getElementById('output');

let output_str = [];
let form_str = [];
function r(str) {
    output_str.push(str);
    // output.innerHTML += `<i>${str}</i><br>`;
}

function release() { 
    let release_str = `<table class="table"><thead><tr><th>Woord</th><th>Herkomst</th></tr></thead><tbody>`
    for (let i=0;i<output_str.length;i++) {
        console.log(output_str[i]);
        release_str += `<tr><td class="output output_str"><i>${output_str[i]}</i></td>
        <td class="output form_str">${form_str[i]}</td>
        </tr>`;
    }
    release_str+='</tbody></table>';
    output.innerHTML=release_str;
}

function calculate(v, arr, amount) {
    output_str=[];
    form_str=[];

    let verb;
    if (v != 'random') {
        verb = ww_lijst.find(v => v.inf === select.value);
    }

    for (let i=0;i<parseInt(amount);i++) {
        console.log('ran')
        if (v=='random'){
            const values = Object.values(ww_lijst);
            verb = values[Math.floor(Math.random() * values.length)];
        }
        const aantal = Math.floor(Math.random() * 2); // 0=ev 1=mv
        const persoon = Math.floor(Math.random() * 3); // 0=1e 1=2e 2=3e
        let modus;
        let diathese;
        let tijd;

        if (arr[0]=='all'){
            do {
                modus = Math.floor(Math.random() * 2); // 0=ind 1=con
                diathese = Math.floor(Math.random() * 2); // 0=act 1=pas
                tijd = Math.floor(Math.random() * 6) // 0=pra 1=imp 2=pft 3=plq 4=fut 5=ftx
            } while (((modus==1&&tijd==4) || (modus==1&&tijd==5)));
        } else {
            let possibilities = {
                diathese: [],
                modus: [],
                tijd: []
            };
            for (let j=0;j<arr.length;j++){
                parts = arr[j].split('-');
                
                if(parts[0]=='pas'){
                    possibilities.diathese.push(0);                
                } else {
                    possibilities.diathese.push(1);   
                }
                if(parts[1]=='ind'){
                    possibilities.modus.push(0);
                } else {
                    possibilities.modus.push(1);
                }
                if(parts[2]=='pra'){
                    possibilities.tijd.push(0);
                } else if (parts[2]=='imp'){
                    possibilities.tijd.push(1);
                } else if (parts[2]=='pft'){
                    possibilities.tijd.push(2);
                } else if (parts[2]=='plq'){
                    possibilities.tijd.push(3);
                } else if (parts[2]=='fut'){
                    possibilities.tijd.push(4);
                } else if (parts[2]=='ftx'){
                    possibilities.tijd.push(5);
                }
            }

            modus = possibilities.modus[Math.floor(Math.random() * possibilities.modus.length)];
            diathese = possibilities.diathese[Math.floor(Math.random() * possibilities.diathese.length)];
            tijd = possibilities.modus[Math.floor(Math.random() * possibilities.tijd.length)];
        }

        let form = vorm.persoon[persoon] + ' ' + vorm.aantal[aantal] + ' ' + vorm.modus[modus] + ' ' + vorm.diathese[diathese] + ' ' + vorm.tijd[tijd];
        form_str.push(form);

        if (diathese == 0) {
            if (modus == 0) {
                switch (tijd) {
                    case 0:
                        // act ind pra
                        r(verb.stam.pra + uitgang.act.pra[aantal][persoon]);
                        break
                    case 1:
                        // act ind imp
                        r(verb.stam.pra + 'ba' + uitgang.act.imp[aantal][persoon]);
                        break
                    case 2:
                        // act ind pft
                        r(verb.stam.pft + uitgang.act.pft[aantal][persoon]);
                        break
                    case 3:
                        // act ind plq
                        r(verb.stam.pft + uitgang.act.plq[aantal][persoon]);
                        break
                    case 4:
                        // act ind fut
                        if (verb.rijtje == 'a' || verb.rijtje == 'e') {
                            r(verb.stam.pra + 'b' + uitgang.act.fut[aantal][persoon]);
                        } else {
                            if (verb.persoon==0 && verb.aantal==0){
                                r(verb.stam.pra + uitgang.act.fut[aantal][persoon]);
                            } else {
                                r(verb.stam.pra + 'e' + uitgang.act.fut[aantal][persoon]);
                            }
                        }
                        break
                    case 5:
                        // act ind ftx
                        r(verb.stam.pft + uitgang.act.ftx[aantal][persoon]);
                        break
                }

            } else {
                switch (tijd) {
                    case 0:
                        // act con pra
                        if (verb.rijtje == 'a') {
                            r(verb.stam.pra + 'e' + uitgang.act.pra[aantal][persoon]);
                        } else {
                            r(verb.stam.pra + 'a' + uitgang.act.pra[aantal][persoon]);
                        }
                        break
                    case 1:
                        // act con imp
                        r(verb.inf + uitgang.act.pra[aantal][persoon]);
                        break
                    case 2:
                        // act con pft
                        if (persoon==0 && aantal==0) {
                            r(verb.stam.pft + 'erim');
                        } else {
                            r(verb.stam.pft + uitgang.act.ftx[aantal][persoon]);
                        }
                        break
                    case 3:
                        // act con plq
                        r(verb.stam.pft + 'isse' + uitgang.act.pra[aantal][persoon]);
                        break
                }
            }
        } else {
            if (modus == 0) {
                switch (tijd) {
                    case 0:
                        // pas ind pra
                        r(verb.stam.pra + uitgang.pas.pra[aantal][persoon]);
                        break
                    case 1:
                        // pas ind imp
                        r(verb.stam.pra + 'ba' + uitgang.pas.pra[aantal][persoon]);
                        break
                    case 2:
                        // pas ind pft
                        if (aantal==0) {
                            r(verb.stam.ppp + 'us' + ' ' + esse.ind.pra[aantal][persoon]);
                        } else{
                            r(verb.stam.ppp + 'i' + ' ' + esse.ind.pra[aantal][persoon]);
                        }
                        break
                    case 3:
                        // pas ind plq
                        if (aantal==0) {
                            r(verb.stam.ppp + 'us' + ' ' + esse.ind.imp[aantal][persoon]);
                        } else{
                            r(verb.stam.ppp + 'i' + ' ' + esse.ind.imp[aantal][persoon]);
                        }
                        break
                    case 4:
                        // pas ind fut
                        if (verb.rijtje=='a' || verb.rijtje=='i') { 
                            r(verb.stam.pra + 'b' + uitgang.pas.fut[aantal][persoon]);
                        } else {
                            if (persoon==0&&aantal==0) {
                                r(verb.stam.pra + 'ar');
                            } else {
                                r(verb.stam.pra + 'e' + uitgang.pas.pra[aantal][persoon]);
                            }
                        }
                        break
                    case 5:
                        // pas ind ftx
                        if (aantal==0) {
                            r(verb.stam.ppp + 'us ' + esse.ind.fut[aantal][persoon]);
                        } else {
                            r(verb.stam.ppp + 'i ' + esse.ind.fut[aantal][persoon]);
                        }
                        break
                }

            } else {
                switch (tijd) {
                    case 0:
                        // pas con pra
                        if (verb.rijtje =='a') {
                            r(verb.stam.pra + 'e' + uitgang.pas.pra[aantal][persoon]);
                        } else {
                            r(verb.stam.pra + 'a' + uitgang.pas.pra[aantal][persoon]);
                        }
                        break
                    case 1:
                        // pas con imp
                        r(verb.inf + uitgang.pas.pra[aantal][persoon])
                        break
                    case 2:
                        // pas con pft
                        if (aantal==0) {
                            r(verb.stam.ppp + 'us ' + esse.con.pra[aantal][persoon]);
                        } else {
                            r(verb.stam.ppp + 'i ' + esse.con.pra[aantal][persoon]);
                        }
                        break
                    case 3:
                        // pas con plq
                        if (aantal==0) {
                            r(verb.stam.ppp + 'us ' + esse.ind.imp[aantal][persoon]);
                        } else {
                            r(verb.stam.ppp + 'i ' + esse.ind.imp[aantal][persoon]);
                        }
                        break
                }
            }
        }
    }

    release();
}