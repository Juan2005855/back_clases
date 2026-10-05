import { Module } from '@nestjs/common';
import { SaludosController } from './saludos.controller.js';
import { GreetServiceService } from './greet-service.service.js';
import { SALUDOS_SERVICIOS } from './tokens.js';

@Module({
  controllers: [SaludosController],
  providers: [
    {
      provide: SALUDOS_SERVICIOS,
      useClass: GreetServiceService,
    },
  ]
})
export class SaludosModule {}