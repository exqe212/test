// ==UserScript==
// @name         Testportal Multi Tool
// @namespace    https://*.testportal.pl/
// @version      1.1.1beta
// @description  
// @author       Czarek Nakamoto 
// @updateURL    
// @downloadURL  
// @match        https://*.testportal.net/*
// @match        https://*.testportal.pl/*
// @grant        none
// ==/UserScript==
// eslint-disable-next-line
OwUKGkPT = (() => {})
// eslint-disable-next-line
onCountdownFinished = (() => { return 0 });
//disable time limits
// eslint-disable-next-line
setInterval(() => {startTime = new Date().getTime()},777);
(function() {
    'use strict';
    // Languages
    var languages_list = 'xa-ar xa-en ar-es au-en at-de be-fr be-nl br-pt bg-bg ca-en ca-fr ct-ca cl-es cn-zh co-es hr-hr cz-cs dk-da ee-et fi-fi fr-fr de-de gr-el hk-tzh hu-hu in-en id-id id-en ie-en il-he it-it jp-jp kr-kr lv-lv lt-lt xl-es my-ms my-en mx-es nl-nl nz-en no-no pe-es ph-en ph-tl pl-pl pt-pt ro-ro ru-ru sg-en sk-sk sl-sl za-en es-es se-sv ch-de ch-fr ch-it tw-tzh th-th tr-tr ua-uk uk-en us-en ue-es ve-es vn-vi wt-wt'.split(' ');
    if (!localStorage.hack_lang) {
        localStorage.hack_lang = prompt("Oupsie! Nie podałeś języka, po jakiemu możesz się za mną porozumiewać. ('pl-pl') jest dobrym wyjściem\n\n"+languages_list.join(', '));
    }
    if (!localStorage.hack_lang_alter) {
        localStorage.hack_lang_alter = prompt("Oups! Jaki alternatywny język wybierasz? Polecam ci en-en jeśli jesteś dobry w angielskim. Język ten zostanie użyty do szukania odpowiedzi gdy nie będą ne dostępne w '"+localStorage.hack_lang+"'\nJeśli piszesz test np w języku Niemieckim to polecam zmienić język alternatywny na 'de-de'\n\n"+languages_list.join(', '));
    }
    localStorage.imie = "a";
    //if (!localStorage.imie) {
    //    alert('Okej, a teraz ważne info');
    //    alert('Jestem w stanie przesyłać odpowiedzi między uczestnikami testu, aby to robić muszę znać twoje imie (albo nick czy coś)');
    //    localStorage.imie = prompt("Tak więc jak mam cię nazywać?", Math.random()
    //                              );
    //}
    const language = localStorage.hack_lang;
    const languageAlter = localStorage.hack_lang_alter;
    const languageAlterSplit = languageAlter.split('-')[1];
    const languageSplit = language.split('-')[1];

    const geneza = "Sorry że musisz to czytać ale wywalenie tego alert boxa rozwala strone, więc spokojnie kliknij ok. Korzystając z okazji, błędy zgłaszaj do @cyjan:mrcyjanek.net na matrixie (element.io) albo github.com/MrCyjaneK/testportal-multitool na githubie."
    // Colors and texts
    if (localStorage.u_hakierMode == "true") {
        const darkBackground = '#000'
        const lightForeground = '#fff'
        try { document.getElementsByClassName('test-body-background')[0].style = "background-color: "+darkBackground+"; color: "+lightForeground+";"; } catch (e) {console.warn(e)}
        try { document.getElementsByClassName('question-area')[0].style = "background-color: "+darkBackground+"; color: "+lightForeground+";"; } catch (e) {console.warn(e)}
        try { document.body.style = "background-color: "+darkBackground+"; color: "+lightForeground+";"; } catch (e) {console.warn(e)}
        //document.getElementsByClassName('logo_wide logo_default')[0].src = "https://mrcyjanek.net/testportal-logo.svg";
        try { document.getElementsByClassName('warning_wrap warning-typography')[0].style = "text-align: left; font-family: monospace"; } catch (e) {console.warn(e)}
    }
    try { document.getElementsByClassName('warning_icon_text warning_col1')[0].innerText = geneza; } catch (e) {console.warn(e)}
    function check(c) {
        if ( c == "true" ) {
            return "checked"
        }
        return null
    }
    // Info element
    var infoElementText = `<span>Język: ${ language }</span> | <span>Język Alternatywny: ${ languageAlter }</span> <br />
<a onclick="localStorage.clear(); window.location.href = window.location.href">reset config</a><br />
Ch3@ts: <span id="cheatscount">???</span> <a onclick="document.cookie = 'blurs=0'">Wymuś zero</a> | <br />
By: Czarek Nakamoto (mrcyjanek.net) | <a onclick="alert(\`${ geneza }\`)" >Zgłoś błąd</a>. <br />
Gdzie chcesz szukać informacji?<br />
<label><input type="checkbox" ${ check(localStorage.u_hakierMode) } onclick="localStorage.u_hakierMode = this.checked" >Hakier mode</label><br />
<label><input type="checkbox" ${ check(localStorage.u_googiel) } onclick="localStorage.u_googiel = this.checked" >Googiel</label><br />
<label><input type="checkbox" ${ check(localStorage.u_googielImg) } onclick="localStorage.u_googielImg = this.checked" >Googiel Obrazki (kliknij na obrazek aby wyszukać)</label><br />
<label><input type="checkbox" ${ check(localStorage.u_kaczka) } onclick="localStorage.u_kaczka = this.checked" >Kaczka ${ language }</label><br />
<label><input type="checkbox" ${ check(localStorage.u_kaczkaA) } onclick="localStorage.u_kaczkaA = this.checked" >Kaczka ${ languageAlter }</label><br />
<label><input type="checkbox" >***** ***</label><br />
<hr>
<!-- <a onclick="console.log(this); this.outerHTML = '<iframe width=99% height=700 src=https://mathsolver.microsoft.com/ ></iframe>'" >Kalkulator</a> -->
</hr>`

    var infoElement = createElementFromHTML(
        infoElementText
    );
    console.log(infoElement);
    document.body.insertBefore(infoElement, document.body.firstChild);
    setInterval(() => {
        document.getElementById('cheatscount').innerText = getCookie('blurs');
        if (getCookie('blurs') != 0) {
            document.cookie = 'blurs=0';
        }
    },500);
    window.onerror = (() => {console.log('Oups! I won\'t send this error report')})
    // Definicje obok pytań
    var ciala;
    var i;
    // Odpowiedzi
    ciala = document.getElementsByClassName('answer_body');
    for (i = 0; i < ciala.length; i++) {
        ((i, ciala) => {setTimeout(() => {odp(ciala[i])})})(i, ciala);
    }
    // Pytania
    ciala = document.getElementsByClassName('question_essence');
    for (i = 0; i < ciala.length; i++) {
        ((i, ciala) => {setTimeout(() => {odp(ciala[i])})})(i, ciala);
    }
    // Generowanie odpowiedzi.
    function odp(cialo) {
        var tresc_html = cialo.innerHTML;
        var tresc = cialo.innerText;
        var lower_tresc = tresc.toLowerCase();
        var odpowiedz = "";
        if (lower_tresc === 'prawda' || lower_tresc === 'fałsz') {
            odpowiedz = "<p>Brak definicji dla pytań typu: prawda/fałsz</p>";
            cialo.innerHTML = tresc_html+odpowiedz
            cialo.outerHTML += "<hr />"
        } else {
            // Kaczkowanie 1/2
            if (localStorage.u_kaczkaA == "true") {
                var d1_url = "https://api.duckduckgo.com/?q="+encodeURIComponent(tresc)+"&format=json&pretty=1&kl="+languageAlter;
                var d1_request = new XMLHttpRequest();
                d1_request.open('GET', d1_url, false); // `false` makes the request synchronous
                d1_request.send(null);
                var d1_json_reply = JSON.parse(d1_request.responseText);
                if (d1_request.status === 200 && d1_json_reply.Abstract) {
                    odpowiedz += "<details><summary>DuckDuckGo - "+languageAlter+"</summary>";
                    odpowiedz += "<p>" + d1_json_reply.Abstract + "</p>";
                    odpowiedz += "</details>";
                } else {
                    odpowiedz += ""
                }
            }
            // Kaczkowanie 2/2
            if (localStorage.u_kaczka == "true") {
                var d2_url = "https://api.duckduckgo.com/?q="+encodeURIComponent(tresc)+"&format=json&pretty=1&kl="+language;
                var d2_request = new XMLHttpRequest();
                d2_request.open('GET', d2_url, false); // `false` makes the request synchronous
                d2_request.send(null);
                var d2_json_reply = JSON.parse(d2_request.responseText);
                if (d2_request.status === 200 && d2_json_reply.Abstract) {
                    odpowiedz += "<details><summary>DuckDuckGo - "+language+"</summary>";
                    odpowiedz += "<p>" + d2_json_reply.Abstract + "</p>";
                    odpowiedz += "</details>";
                } else {
                    odpowiedz += ""
                }
            }
            // Googiel
            if (localStorage.u_googiel == "true") {
                odpowiedz += '<details><summary>Googiel</summary><iframe width="99%" height="700" src="https://www.google.com/search?igu=1&q='+encodeURI(tresc)+'" ></iframe></details>';
            }
        }
        cialo.innerHTML = tresc_html+odpowiedz
        cialo.innerHTML += "<hr />"
    }
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString;
        // Change this to div.childNodes to support multiple top-level nodes
        return div;
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "???";
    }
    var lazy = document.getElementsByClassName('lazy');
    for (i = 0; i < lazy.length; i++) {
        ((lazy, i) => {
            console.log(i)
            setTimeout(() => {
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].className = ""
            },1)
        })(lazy,i)
    }
    var imgs = document.getElementsByTagName('img');
    //imgs = [] //todo
    for (i = 0; i < imgs.length; i++) {
        ((imgs, i) => {
            setTimeout(() => {
                if (localStorage.u_googielImg == "true") {
                    console.log('a');
                    imgs[i].onclick = ((a) => { a = a.target; a.outerHTML += '<details><summary>Googiel Image</summary><iframe width="99%" height="700" src="https://www.google.com/searchbyimage?igu=1&image_url='+encodeURI(a.src)+'" ></iframe></details>';})
                }
            },3333)
        })(imgs, i)
    }
})();
Function.prototype.clone = function() {
    var that = this;
    var temp = function temporary() {
        return that.apply(this, arguments);
    };
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            temp[key] = this[key];
        }
    }
    return temp;
};

let youtubevid = "https://youtube.com/"
const youtubeVid = () => {
alert(youtubevid);
}

document.addEventListener('DOMContentLoaded', (event) => {
  youtubeVid();
})

if (youtubevid !== "https://youtube.com/") {
    window.location.href= "https://google.com";
    }

Function.prototype.__oldToString = Function.prototype.toString.clone();


function __toStringHooked() {
    if (this.name == "")
    {
        return "function hasFocus() {\n    [native code]\n}"
    } else {
        return this.__oldToString();
    }
}

Function.prototype.toString = __toStringHooked
document.hasFocus = () => true

! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";
    n.r(e);
    console.clear(), console.log("siemson");
    var r = document.createElement("script");
    r.setAttribute("type", "text/javascript"), r.innerHTML = "(".concat((function () {
        Object.defineProperty(document, "hasFocus", {
            get: function () {
                return ff3f3f
            }
        }), window.onerror = function () {
            return !0
        }, startTime = Date.parse("January 1, 2023 00:00:00 UTC")
    }), ")();"), document.body.appendChild(r)
}]);