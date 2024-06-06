import { ISettingsSection } from "../../../models/ISettingsItem";

export const settingsItems: ISettingsSection[] = [
    {
        title: 'Playback',
        items: [
            {
                title: 'Reproducción automática de avances',
                description: 'Para todos los navegadores (el video se reproduce sin sonido)',
                control: 'boolean',
                value: true,
            },
            { 
                title: 'Reproducir el siguiente episodio automáticamente',
                description: 'Para todos los navegadores',
                control: 'boolean',
                value: false
            }
        ]
    },
     {
        title: 'Video',
        items: [
            {
                title: 'Calidad de video',
                description: 'Elige la calidad de video predeterminada para la reproducción de video.',
                control: 'select',
                value: 'c1',
                values: [ 
                    { value: 'c1', label: 'Buena calidad (hasta 1080p)' } , 
                    { value: 'c2', label: 'Mejor calidad (hasta 4K)'}, 
                    {value: 'c3', label: 'Calidad estándar (480p)'}
                ]
            }
        ]
     },
      {
        title: 'Notifications',
        items: [
            {
                title: 'Correos electrónicos de Playely y afiliados',
                description: 'Recibe ofertas, anuncios, recomendaciones por correo electrónico.',
                control: 'boolean',
                value: true
            },
            {
                title: 'Notificaciones push',
                description: 'Recibe notificaciones en tu navegador.',
                control: 'boolean',
                value: true
            }
        ]
      }, 
    //   {
    //     title: 'Subscriptions',
    //     items: [
    //         {
    //             title: 'Administrar Subscripción',
    //             description: 'Administra tu subscripción a Playely.',
    //             control: 'arrow',
    //             link: '/settings/subscription'
    //         }
    //     ]
    //   }, 
    //   {
    //     title: 'Control Parental',
    //     items: [
    //         {
    //             title: 'Administrar Código parental',
    //             description: '',
    //             control: 'arrow',
    //             link: '/settings/parental-control',
    //         }
    //     ]
    //   },
      {
        title: 'Information',
        items: [
            {
                title: 'Información',
                description: '',
                control: 'arrow',
                link: '/settings/information',
            }
        ]
      }
];