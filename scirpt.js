function nolasa (m1, m2, m3){
    const malas = document.getElementsByClassName("mala");
     m1 = parseFLoat(mala1.value);
     m2 = parseFLoat(mala2.value);
     m3 = parseFLoat(mala3.value);
    

    if (m1 > 0 && m2 > 0 && m3 > 0){
        console.log({m1, m2, m3});
        return {m1, m2, m3};
    } else {
        console.log(false);
    return false;
    }
}