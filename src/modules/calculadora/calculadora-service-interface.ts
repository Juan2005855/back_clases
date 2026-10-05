import { OperacionInDto } from './dto/operacion-in-dto.js';
import { OperacionOutDto } from './dto/operacion-out-dto.js';

export interface CalculadoraServiceInterface {
    sumar(dto: OperacionInDto): OperacionOutDto;
    restar(dto: OperacionInDto): OperacionOutDto;
    multiplicar(dto: OperacionInDto): OperacionOutDto;
    dividir(dto: OperacionInDto): OperacionOutDto;
}
