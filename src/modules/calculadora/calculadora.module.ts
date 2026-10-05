import { Module } from '@nestjs/common';
import { CalculadoraController } from './calculadora.controller.js';
import { CalculadoraService } from './calculadora.service.js';
import { CALCULADORA_SERVICIOS } from './tokens.js';

@Module({
  controllers: [CalculadoraController],
  providers: [
    {
      provide: CALCULADORA_SERVICIOS,
      useClass: CalculadoraService,
    },
  ],
})
export class CalculadoraModule {}
