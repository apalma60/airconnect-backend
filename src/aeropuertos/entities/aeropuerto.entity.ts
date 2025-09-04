export class Aeropuerto {
    private id: number;
    private nombre: string;
    private codigo: string;
    private ciudad: string;

    constructor (id: number, nombre: string, codigo: string, ciudad: string) {
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.ciudad = ciudad;
    }
}
