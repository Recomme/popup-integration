class RecommePopup {

    recommePopup;
    recommeAList = [];
    recommePopupEl;
    recommeIframeEl;
    config = {
        mainElId: "main",
        iframeWidth: "600px",
        iframeHeight: "100%"
    };

    constructor() {

        //TODO catch main element from config for blur 

        this.buildPopupEl();
    }

    init = function() {
        this.addListeners();
        var body = document.querySelector('body');
    }


    buildPopupEl = function() {
        var p = document.getElementById('r-popup');
        p.addEventListener('click', this.closePopup);

        var i = document.getElementById("r-popup-iframe");
        i.width = this.config.iframeWidth;
        i.height = this.config.iframeHeight;
    
        // p.appendChild(i);

        this.recommeIframeEl = i;
        this.recommePopupEl = p;
    }

    addListeners = function() {
        var aList = document.querySelectorAll('a')
        for (var i = 0; i < aList.length ; i++) {
            if(typeof aList[i].dataset.rPopup !== "undefined") {
                this.recommeAList.push(aList[i]);
                var el = this;
                aList[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    var rPopupIframe = document.getElementById('r-popup-iframe');
                    rPopupIframe.src=this.dataset.rPopup;
                    rPopupIframe.onload = function() {
                        el.showPopup();
                    };

                })
            }
        }
    }

    closePopup = function() {
        this.style.visibility = "hidden";
        this.style.opacity = "0";

        var body = document.querySelector('#main');
        body.classList.remove('blur-filter');
    }

    showPopup = function() {

        var body = document.querySelector('#main');
        body.classList.add('blur-filter');
        // console.log(this.recommePopupEl);
        this.recommePopupEl.style.visibility = "visible";
        this.recommePopupEl.style.opacity = "1";
    }

    // runPopup = function(e) {
    //     e.preventDefault();
    //     var rPopupIframe = document.querySelector('#r-iframe');
    //     rPopupIframe.src=this.dataset.rPopup;

    //     this.showPopup();

    //     // var popup = document.getElementById('r-popup');
    //     // popup.style.display = "block"
    //     // this.recommePopupEl.style.display = "block";
    // }
};

var recommePopup = new RecommePopup();
recommePopup.init();