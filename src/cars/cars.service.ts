import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './interfaces/car.interfaces';

@Injectable()
export class CarsService {
    private cars: Car[] = [{
        id: uuidv4(),
        brand: 'Toyota',
        model: 'Corolla'
    },
     {
        id: uuidv4(),
        brand: 'Honda',
        model: 'Civic'
    }, 
    {
        id: uuidv4(),
        brand: 'Jeep',
        model: 'Cherokee'
    }]

    findAll(){
        return this.cars;
    }
    findById( id: string){
        const car = this.cars.find( car => car.id === id );
        if ( !car ) throw new NotFoundException(`Car with id '${ id }' not found`);
        
        return car;
    }
}
