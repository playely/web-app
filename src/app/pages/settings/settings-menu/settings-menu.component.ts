import { Component } from '@angular/core';
import { ISettingsSection } from '@models/ISettingsItem';
import { settingsItems } from './settings-items';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, MatButtonModule, MatSelectModule, RouterModule],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.scss'
})
export class SettingsMenuComponent {
  list: ISettingsSection[] =  settingsItems;
}
