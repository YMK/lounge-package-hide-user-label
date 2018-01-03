module.exports = {
    thelounge: {
        name: "Hide User Label",
        type: "package",
        run: function (lounge) {
            lounge.addCustomCss("hide-user-label.css");
        }
    }
};