import { Body, Controller, Inject, Post } from '@nestjs/common';
import type { CalculadoraService } from './calculadora.service.js';
import { CALCULADORA_SERVICIOS } from './tokens.js';
import { OperacionInDto } from './dto/operacion-in-dto.js';

@Controller('calculadora')
export class CalculadoraController {
    constructor(
        @Inject(CALCULADORA_SERVICIOS)
        private readonly calculadoraService: CalculadoraService,
    ) {}

    @Post('sumar')
    sumar(@Body() dto: OperacionInDto) {
        return this.calculadoraService.sumar(dto);
    }

    @Post('restar')
    restar(@Body() dto: OperacionInDto) {
        return this.calculadoraService.restar(dto);
    }

    @Post('multiplicar')
    multiplicar(@Body() dto: OperacionInDto) {
        return this.calculadoraService.multiplicar(dto);
    }

    @Post('dividir')
    dividir(@Body() dto: OperacionInDto) {
        return this.calculadoraService.dividir(dto);
    }
}
