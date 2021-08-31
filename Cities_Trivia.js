function guessCity(capital, coastal, famous, ancient) {
    if (capital === true && coastal === false && famous === true && ancient == true) {
        return "Jerusalem";
    } else if (capital === false && coastal === true && famous === true && ancient === false) {
        return "Tel Aviv";
    } else if (capital === false && coastal === true && famous === false && ancient === true) {
        return "Acre";
    } else if (famous === false && coastal === false && famous === false && ancient === true) {
        return "Katzrin";
    } else if (ancient === false && coastal === true && famous === false && ancient === false) {
        return "Zikim";
    } else {
        return 'Musmus';
    }
}
console.log(guessCity(true, false, false, false));