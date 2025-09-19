import { TabsCustom, type TabItem, Typography } from '@/components';
import { BarChart3, FileText, Home, Package, ShoppingCart, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

function TabsDemo({
  description,
  variants,
  ...props
}: {
  description: string;
  variants: string;
} & React.ComponentProps<typeof TabsCustom>) {
  return (
    <div className='relative group space-y-1'>
      <TabsCustom {...props} className={`transition-all duration-200 group-hover:ring-2 group-hover:ring-primary/20 group-hover:rounded-md ${props.className || ''}`} />

      <div className='absolute top-full left-0 mt-1 px-2 py-1 bg-popover/95 border rounded text-xs font-mono text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 backdrop-blur-sm whitespace-nowrap'>
        <div className='font-semibold text-primary mb-1'>{description}</div>
        <div className='text-muted-foreground'>{variants}</div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-center gap-4 my-8'>
      <Typography variant='h3' color='primary'>
        {children}
      </Typography>
      <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent'></div>
    </div>
  );
}

export function TabsExample() {
  const [activeTab, setActiveTab] = useState('overview');

  const basicTabs: TabItem[] = [
    {
      value: 'home',
      label: 'Accueil',
      content: () => (
        <div className='p-4'>
          <Typography variant='h4' className='mb-2'>
            🏠 Page d'accueil
          </Typography>
          <Typography variant='body' color='muted'>
            Bienvenue sur votre tableau de bord. Ici vous pouvez voir un aperçu de toutes vos données importantes.
          </Typography>
        </div>
      ),
    },
    {
      value: 'analytics',
      label: 'Analytiques',
      content: () => (
        <div className='p-4'>
          <Typography variant='h4' className='mb-3'>
            📊 Analytiques
          </Typography>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-muted p-3 rounded'>
              <Typography variant='small' weight='medium'>
                Revenus
              </Typography>
              <Typography variant='h3' color='primary'>
                €2,430
              </Typography>
            </div>
            <div className='bg-muted p-3 rounded'>
              <Typography variant='small' weight='medium'>
                Commandes
              </Typography>
              <Typography variant='h3' color='primary'>
                127
              </Typography>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: 'settings',
      label: 'Paramètres',
      content: () => (
        <div className='p-4'>
          <Typography variant='h4' className='mb-3'>
            ⚙️ Paramètres
          </Typography>
          <div className='space-y-3'>
            <label className='flex items-center space-x-2'>
              <input type='checkbox' className='rounded' defaultChecked />
              <Typography variant='small'>Notifications push</Typography>
            </label>
            <label className='flex items-center space-x-2'>
              <input type='checkbox' className='rounded' />
              <Typography variant='small'>Emails marketing</Typography>
            </label>
          </div>
        </div>
      ),
    },
  ];

  const dashboardTabs: TabItem[] = [
    {
      value: 'overview',
      label: "Vue d'ensemble",
      content: () => (
        <div className='p-6 space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border'>
              <div className='flex items-center gap-3'>
                <Home className='h-6 w-6 text-blue-600' />
                <div>
                  <Typography variant='small' color='muted'>
                    Total Visiteurs
                  </Typography>
                  <Typography variant='h3'>12,543</Typography>
                </div>
              </div>
            </div>
            <div className='bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg border'>
              <div className='flex items-center gap-3'>
                <TrendingUp className='h-6 w-6 text-green-600' />
                <div>
                  <Typography variant='small' color='muted'>
                    Croissance
                  </Typography>
                  <Typography variant='h3'>+23.4%</Typography>
                </div>
              </div>
            </div>
            <div className='bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg border'>
              <div className='flex items-center gap-3'>
                <BarChart3 className='h-6 w-6 text-purple-600' />
                <div>
                  <Typography variant='small' color='muted'>
                    Revenus
                  </Typography>
                  <Typography variant='h3'>€4,291</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: 'sales',
      label: 'Ventes',
      content: () => (
        <div className='p-6'>
          <Typography variant='h4' className='mb-4'>
            Rapport des ventes
          </Typography>
          <div className='space-y-3'>
            <div className='flex justify-between items-center p-3 bg-muted rounded'>
              <Typography weight='medium'>Produit A</Typography>
              <Typography variant='price' color='primary'>
                €234
              </Typography>
            </div>
            <div className='flex justify-between items-center p-3 bg-muted rounded'>
              <Typography weight='medium'>Produit B</Typography>
              <Typography variant='price' color='primary'>
                €187
              </Typography>
            </div>
            <div className='flex justify-between items-center p-3 bg-muted rounded'>
              <Typography weight='medium'>Produit C</Typography>
              <Typography variant='price' color='primary'>
                €156
              </Typography>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: 'customers',
      label: 'Clients',
      content: () => (
        <div className='p-6'>
          <Typography variant='h4' className='mb-4'>
            Gestion des clients
          </Typography>
          <div className='space-y-3'>
            <div className='flex items-center gap-3 p-3 border rounded'>
              <Users className='h-5 w-5 text-muted-foreground' />
              <div>
                <Typography weight='medium'>Jean Dupont</Typography>
                <Typography variant='small' color='muted'>
                  jean.dupont@email.com
                </Typography>
              </div>
            </div>
            <div className='flex items-center gap-3 p-3 border rounded'>
              <Users className='h-5 w-5 text-muted-foreground' />
              <div>
                <Typography weight='medium'>Marie Martin</Typography>
                <Typography variant='small' color='muted'>
                  marie.martin@email.com
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const ecommerceTabs: TabItem[] = [
    {
      value: 'products',
      label: 'Produits',
      content: () => (
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Package className='h-5 w-5' />
            <Typography variant='h4'>Catalogue Produits</Typography>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='border rounded-lg p-4'>
              <Typography variant='h4' className='mb-2'>
                MacBook Pro 16"
              </Typography>
              <Typography variant='price' color='primary' className='mb-2 block'>
                €2,499
              </Typography>
              <Typography variant='small' color='success'>
                En stock (23 unités)
              </Typography>
            </div>
            <div className='border rounded-lg p-4'>
              <Typography variant='h4' className='mb-2'>
                iPhone 15 Pro
              </Typography>
              <Typography variant='price' color='primary' className='mb-2 block'>
                €1,199
              </Typography>
              <Typography variant='small' color='warning'>
                Stock faible (3 unités)
              </Typography>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: 'orders',
      label: 'Commandes',
      content: () => (
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <ShoppingCart className='h-5 w-5' />
            <Typography variant='h4'>Commandes Récentes</Typography>
          </div>
          <div className='space-y-3'>
            <div className='flex justify-between items-center p-3 border rounded'>
              <div>
                <Typography weight='medium'>Commande #1234</Typography>
                <Typography variant='small' color='muted'>
                  Il y a 2 heures
                </Typography>
              </div>
              <div className='text-right flex flex-col items-end'>
                <Typography variant='price' className='block'>
                  €156.99
                </Typography>
                <Typography variant='small' color='success'>
                  Complétée
                </Typography>
              </div>
            </div>
            <div className='flex justify-between items-center p-3 border rounded'>
              <div>
                <Typography weight='medium'>Commande #1235</Typography>
                <Typography variant='small' color='muted'>
                  Il y a 1 heure
                </Typography>
              </div>
              <div className='text-right flex flex-col items-end'>
                <Typography variant='price' className='block'>
                  €89.50
                </Typography>
                <Typography variant='small' color='warning'>
                  En préparation
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: 'reports',
      label: 'Rapports',
      content: () => (
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <FileText className='h-5 w-5' />
            <Typography variant='h4'>Rapports & Analyses</Typography>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-4 bg-muted rounded'>
              <Typography variant='small' color='muted'>
                Ventes du mois
              </Typography>
              <Typography variant='h3' color='primary'>
                €12,543
              </Typography>
              <Typography variant='small' color='success'>
                +15.3% vs mois dernier
              </Typography>
            </div>
            <div className='p-4 bg-muted rounded'>
              <Typography variant='small' color='muted'>
                Nouveaux clients
              </Typography>
              <Typography variant='h3' color='primary'>
                127
              </Typography>
              <Typography variant='small' color='success'>
                +8.2% vs mois dernier
              </Typography>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <article className='max-w-6xl mx-auto p-8 space-y-8'>
      <section className='p-6 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5'>
        <Typography variant='h2' color='primary' className='mb-3'>
          🎯 TabsCustom - Composant de Tabs Réutilisable
        </Typography>
        <Typography variant='body' color='muted' className='mb-2'>
          Survolez n'importe quel composant de tabs pour voir les variants utilisés !
        </Typography>
        <Typography variant='small' color='muted' className='mb-3'>
          Système de tabs moderne avec animations Framer Motion et support de personnalisation complète.
        </Typography>
        <div className='flex items-center gap-2 text-xs text-muted-foreground flex-wrap'>
          <span className='flex items-center gap-1'>
            ⚡ <span>Framer Motion</span>
          </span>
          <span className='flex items-center gap-1'>
            ✨ <span>Barre qui glisse</span>
          </span>
          <span className='flex items-center gap-1'>
            🚀 <span>Animation spring</span>
          </span>
          <span className='flex items-center gap-1'>
            💫 <span>layoutId magic</span>
          </span>
        </div>
      </section>

      <SectionTitle>📝 Utilisation Basique</SectionTitle>
      <section className='space-y-6'>
        <TabsDemo tabs={basicTabs} description='Tabs simples' variants='tabs={basicTabs}' />

        <TabsDemo tabs={basicTabs} defaultValue='analytics' description='Avec onglet par défaut' variants='tabs={basicTabs} defaultValue="analytics"' />
      </section>

      <SectionTitle>🎨 Styles Personnalisés</SectionTitle>
      <section className='space-y-6'>
        <TabsDemo
          tabs={basicTabs}
          className='bg-card rounded-lg p-4 border'
          tabsListClassName='border-b-2 border-primary/20'
          description='Style avec arrière-plan'
          variants='className="bg-card rounded-lg p-4" tabsListClassName="border-b-2"'
        />

        <TabsDemo
          tabs={basicTabs}
          tabsTriggerClassName='font-bold px-6'
          tabsContentClassName='mt-6 p-6 border rounded'
          description='Triggers et contenu personnalisés'
          variants='tabsTriggerClassName="font-bold px-6" tabsContentClassName="mt-6 p-6"'
        />
      </section>

      <SectionTitle>📊 Exemple Dashboard</SectionTitle>
      <section className='bg-gradient-to-br from-background to-muted/20 p-6 rounded-lg border'>
        <TabsDemo
          tabs={dashboardTabs}
          className='w-full'
          tabsListClassName='mb-6'
          tabsTriggerClassName='data-[state=active]:font-semibold'
          description='Dashboard interactif'
          variants='tabs={dashboardTabs} tabsListClassName="mb-6" tabsTriggerClassName="font-semibold"'
        />
      </section>

      <SectionTitle>🛒 Exemple E-commerce</SectionTitle>
      <section className='space-y-6'>
        <TabsDemo
          tabs={ecommerceTabs}
          className='border rounded-lg overflow-hidden'
          tabsListClassName='bg-muted/30 px-4'
          tabsTriggerClassName='data-[state=active]:bg-background data-[state=active]:shadow-sm'
          tabsContentClassName='bg-background'
          description='Interface e-commerce'
          variants='className="border rounded-lg" tabsListClassName="bg-muted/30" tabsTriggerClassName="active:bg-background"'
        />
      </section>

      <SectionTitle>🚀 Exemple Avancé avec État</SectionTitle>
      <section className='max-w-2xl mx-auto p-6 border-2 border-primary/20 rounded-lg bg-primary/5'>
        <Typography variant='h4' className='mb-6 text-center'>
          Contrôle Programmique des Tabs
        </Typography>

        <div className='space-y-4 mb-6'>
          <div className='flex gap-2 justify-center flex-wrap'>
            {dashboardTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3 py-1 rounded text-sm transition-colors ${activeTab === tab.value ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}>
                {tab.label}
              </button>
            ))}
          </div>
          <Typography variant='small' color='muted' className='text-center'>
            Onglet actuel : <span className='font-medium'>{dashboardTabs.find((t) => t.value === activeTab)?.label}</span>
          </Typography>
        </div>

        <TabsDemo
          tabs={dashboardTabs}
          defaultValue={activeTab}
          className='border rounded'
          description='Tabs avec contrôle externe'
          variants='defaultValue={activeTab} // Synchronisé avec état externe'
        />
      </section>
    </article>
  );
}
