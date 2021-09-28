const cupones= [
    "cup1",
    "cup2",
    "cup3",
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento= 100-descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100; 

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice= document.getElementById("InputPrice");
    const priceValue= inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    switch (cuponValue) {
        case cupones[0]:
            descuento=15;
            break;
        case cupones[1]:
            descuento=30;
            break;
        case cupones[2]:
            descuento=25;
            break;                           
    }

    const precioConDescuento= calcularPrecioConDescuento(priceValue, descuento);

    const ResultP= document.getElementById("ResultP");
    ResultP.innerText= "El precio con descuento es: "+precioConDescuento+"$";
}