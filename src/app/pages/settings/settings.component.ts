import { Component } from '@angular/core';
import { ISettingsSection } from '@models/ISettingsItem';
import { settingsItems } from './settings-menu/settings-items';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  list: ISettingsSection[] =  settingsItems;
}
