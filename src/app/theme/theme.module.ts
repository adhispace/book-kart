import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { ACTIVE_THEME, ThemeOptions, THEMES } from './symbols';
import { ThemeService } from './theme.service';



@NgModule({
  declarations: [ThemeDirective],
  imports: [CommonModule],
  exports: [ThemeDirective],
  providers: [ThemeService]
})
export class ThemeModule {

  static forRoot(options: ThemeOptions): ModuleWithProviders<any> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEMES,
          useValue: options.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: options.activeTheme
        }
      ]
    }
  }
}
