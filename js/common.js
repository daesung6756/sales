const UI = {
    init: function() {
        if(document.querySelectorAll("[data-tooltip]").length > 0 ){
            this.tooltips()
        }
    },
    tooltips: function() {
        const tooltipGroup = [];
        document.querySelectorAll("[data-tooltip]").forEach(function(value){
            tooltipGroup.push(value.dataset.tooltip)
        })

        tooltipGroup.forEach( function (value){
            const element = document.querySelector("[data-tooltip='" + value + "']");
            element.addEventListener("mouseup",function (){

            })
        })
````
    }
}

document.addEventListener("DOMContentLoaded", function (){
    //common js start
    UI.init();
})