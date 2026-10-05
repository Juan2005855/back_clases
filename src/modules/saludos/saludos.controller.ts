import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import type { GreetServiceService } from './greet-service.service.js';
import { SALUDOS_SERVICIOS } from './tokens.js';
import { get } from 'http';
import { SaludarGrupoInDto } from './dto/saludar-grupo-in-dto.js';

@Controller('saludos')
export class SaludosController {
    constructor(
        @Inject(SALUDOS_SERVICIOS)
        private readonly greetService: GreetServiceService

    ) {}
    @Get('')
    greetByname(@Query('name') name: string){
        return this.greetService.saludarpersona(name);
    }
    @Post('')
    greetGroup(@Body() dto: SaludarGrupoInDto){
        return this.greetService.saludarpersonas(dto);
    }
}
