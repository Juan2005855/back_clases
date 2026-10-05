import { Injectable } from '@nestjs/common';
import { GreetServiceInterface } from './greet-service-interface.js';
import { SaludarGrupoInDto } from './dto/saludar-grupo-in-dto.js';
import { SaludarGrupoOutDto } from './dto/saludar-grupo-out-dto.js';
import { SaludarPersonaOutDto } from './dto/saludar-persona-out-dto.js';

@Injectable()
export class GreetServiceService implements GreetServiceInterface {
    saludarpersona(name: string): SaludarPersonaOutDto {
        if (name=='')  {
            return {
                saludo: '',
                successful: false
            } 
        }
        return {
            saludo: `Hola ${name}!`,
            successful: true
        };
    }
        saludarpersonas(saludarGrupoInDto: SaludarGrupoInDto): SaludarGrupoOutDto {
            if (saludarGrupoInDto == null 
                || saludarGrupoInDto == undefined || saludarGrupoInDto.personas.length == null 
                || saludarGrupoInDto.personas == undefined || saludarGrupoInDto.personas.length == 0) { {
                return {
                    saludos: '',
                    successful: false
                }
            }
        }
        let out:string = "hola";
        saludarGrupoInDto.personas.forEach((persona) => {
            out += ` ${persona},`;
        });
            return {
                saludos: out,
                successful: true
            }
    }
}
