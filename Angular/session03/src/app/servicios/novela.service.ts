import { Inovela } from '../modelos/inovela';

export class NovelaService {
    novelas: Array<Inovela> = [
        {
            titulo: "El Perfume",
            descripcion: "Historia de un asesino que mata mujeres para extraer sus escencia y crear perfumes",
            autor: "Patrick Suskind",
            anno: 1990
        },
        {
            titulo: "Jason y los argonautas",
            descripcion: "Narra la historia del viaje de Jason para obtener el vellocino de oro",
            autor: "Herodoto",
            anno: 1950
        },
        {
            titulo: "El caballero carmelo",
            descripcion: "Cuenta la historia de un gallo viejo que se ve forzado a luchar con el 'Aji seco'",
            autor: "Abraham Valdelomar",
            anno: 1910
        }
    ]
}