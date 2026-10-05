import { Module } from '@nestjs/common';
import { SaludosModule } from './modules/saludos/saludos.module.js';
import { PersonasModule } from './modules/personas/personas.module.js';
import { CuentasModule } from './modules/cuentas/cuentas.module.js';
import { PurchasesModule } from './modules/purchases/purchases.module.js';
import { MysqlModule } from './modules/compartidos/infrastructura/mysql/mysql.module.js';

@Module({
  imports: [SaludosModule, PersonasModule, CuentasModule, PurchasesModule, MysqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
