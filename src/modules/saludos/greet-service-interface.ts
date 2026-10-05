import { SaludarGrupoInDto } from "./dto/saludar-grupo-in-dto.js";
import { SaludarGrupoOutDto } from "./dto/saludar-grupo-out-dto.js";
import { SaludarPersonaOutDto } from "./dto/saludar-persona-out-dto.js";
export interface GreetServiceInterface {
    saludarpersona(name: string): SaludarPersonaOutDto;
    saludarpersonas(saludarGrupoInDto: SaludarGrupoInDto): SaludarGrupoOutDto;
}
