import { Injectable } from '@nestjs/common';
import { CalculadoraServiceInterface } from './calculadora-service-interface.js';
import { OperacionInDto } from './dto/operacion-in-dto.js';
import { OperacionOutDto } from './dto/operacion-out-dto.js';

@Injectable()
export class CalculadoraService implements CalculadoraServiceInterface {
    private sonValidos(dto: OperacionInDto): boolean {
        return (
            dto != null &&
            dto != undefined &&
            typeof dto.numero1 === 'number' &&
            typeof dto.numero2 === 'number' &&
            !isNaN(dto.numero1) &&
            !isNaN(dto.numero2)
        );
    }

    sumar(dto: OperacionInDto): OperacionOutDto {
        if (!this.sonValidos(dto)) {
            return {
                resultado: null,
                successful: false,
                mensaje: 'numero1 y numero2 deben ser numeros validos',
            };
        }
        return {
            resultado: dto.numero1 + dto.numero2,
            successful: true,
        };
    }

    restar(dto: OperacionInDto): OperacionOutDto {
        if (!this.sonValidos(dto)) {
            return {
                resultado: null,
                successful: false,
                mensaje: 'numero1 y numero2 deben ser numeros validos',
            };
        }
        return {
            resultado: dto.numero1 - dto.numero2,
            successful: true,
        };
    }

    multiplicar(dto: OperacionInDto): OperacionOutDto {
        if (!this.sonValidos(dto)) {
            return {
                resultado: null,
                successful: false,
                mensaje: 'numero1 y numero2 deben ser numeros validos',
            };
        }
        return {
            resultado: dto.numero1 * dto.numero2,
            successful: true,
        };
    }

    dividir(dto: OperacionInDto): OperacionOutDto {
        if (!this.sonValidos(dto)) {
            return {
                resultado: null,
                successful: false,
                mensaje: 'numero1 y numero2 deben ser numeros validos',
            };
        }
        if (dto.numero2 === 0) {
            return {
                resultado: null,
                successful: false,
                mensaje: 'No se puede dividir entre cero',
            };
        }
        return {
            resultado: dto.numero1 / dto.numero2,
            successful: true,
        };
    }
}
