const products = [];
let reqid = 1;

class ProductManager {

    constructor(Title, Description, Price, Image, Id, Stock) {
        this.Title = Title;
        this.Description = Description
        this.Price = Price;
        this.Image = Image;
        this.Id = Id;
        this.Stock = Stock;
    }

    //Metodos
    //Metodo nuevo producto
    addProduct() {
        const ProductNew = new ProductManager(
            "", //Ingrese el nombre del nuevo producto
            "", //Ingrese la descripcion del nuevo producto
            parseInt("0"), //ingrese el precio del nuevo producto
            "", //ingrese extencion de imagen del producto
            reqid += 1, //Ingrese id del producto
            parseInt("0"), //Ingrese numero de stock del producto
        )
        return (ProductNew)
    }

    //Metodo que muestra los productos
    getProduct() {
        return (products)

    }

}

const Product1 = new ProductManager(
    "Cerveza Mestiza Panzenú",
    "Cerveza clasica hecha con los sabores tipos colombianos como el maiz y lúpulo",
    8000,
    "https://scontent.feoh4-4.fna.fbcdn.net/v/t39.30808-6/269623123_134127492385408_867247191007009107_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHebtDhuABHISV9LVsxUHzcBSN9lz4YFnoFI32XPhgWekAcbPOVa8wKBykdx-Z655DI7dy13vlxtcDnO__q5Tkc&_nc_ohc=xC0cy5qutrcAX-yCTce&_nc_ht=scontent.feoh4-4.fna&oh=00_AfAVSmGMXuBQkkzitCBX_keX9ajbpYHUJzlW1Lm9pcyWww&oe=63FFD659",
    reqid += 1,
    17
)
products.push(Product1)

const Product2 = new ProductManager(
    "Cerveza Mestiza",
    "Cerveza clasica hecha con los sabores tipos colombianos como el lúpulo y batata",
    8000,
    "https://ennuestrocampo.co/wp-content/uploads/2022/02/CervezadelValleSinu-Panzenu.jpg",
    reqid += 1,
    13
)
products.push(Product2)

const newProduct = new ProductManager()

// if (newProduct.addProduct()) {
products.push(newProduct.addProduct())
// } else {
//     console.log("Todas las variables del pruducto nuevo son requeridas, comprueba los campos")
// }

console.log(newProduct.getProduct())
