import { Typography } from '@/components';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

function CardDemo({
  description,
  variants,
  children,
  ...props
}: {
  description: string;
  variants: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Card>) {
  return (
    <div className='relative group'>
      <Card {...props} className={`transition-all duration-200 group-hover:ring-2 group-hover:ring-primary/20 group-hover:rounded-md ${props.className || ''}`}>
        {children}
      </Card>

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

export function CardExample() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className='max-w-6xl mx-auto p-8 space-y-8'>
      <div className='p-6 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5'>
        <Typography variant='h2' color='primary' className='mb-3'>
          🎴 Composants Card - Système de Cartes
        </Typography>
        <Typography variant='body' color='muted' className='mb-2'>
          Survolez n'importe quelle carte pour voir les variants utilisés !
        </Typography>
        <Typography variant='small' color='muted'>
          Système de cartes modulaire avec Header, Content, Footer et Action. Chaque composant peut être utilisé indépendamment.
        </Typography>
      </div>

      <SectionTitle>📋 Structure Basique</SectionTitle>
      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <CardDemo description='Carte simple' variants='<Card><CardContent>...</CardContent></Card>'>
          <CardContent className='pt-6'>
            <Typography variant='h4' className='mb-2'>
              Carte Simple
            </Typography>
            <Typography variant='small' color='muted'>
              Une carte basique avec juste du contenu. Parfait pour afficher des informations simples.
            </Typography>
          </CardContent>
        </CardDemo>

        <CardDemo description='Carte avec style personnalisé' variants='<Card className="bg-primary/5 border-primary/20">' className='bg-primary/5 border-primary/20'>
          <CardContent className='pt-6'>
            <Typography variant='h4' color='primary' className='mb-2'>
              Carte Colorée
            </Typography>
            <Typography variant='small' color='muted'>
              Une carte avec un style personnalisé utilisant les classes Tailwind.
            </Typography>
          </CardContent>
        </CardDemo>

        <CardDemo description='Carte avec ombre' variants='<Card className="shadow-lg">' className='shadow-lg'>
          <CardContent className='pt-6'>
            <Typography variant='h4' className='mb-2'>
              Carte avec Ombre
            </Typography>
            <Typography variant='small' color='muted'>
              Une carte avec une ombre plus prononcée pour un effet de profondeur.
            </Typography>
          </CardContent>
        </CardDemo>
      </section>

      <SectionTitle>📝 Header & Description</SectionTitle>
      <section className='grid md:grid-cols-2 gap-6'>
        <CardDemo description='Carte avec header complet' variants='<CardHeader><CardTitle><CardDescription>'>
          <CardHeader>
            <CardTitle>
              <Typography variant='h3'>Titre de la Carte</Typography>
            </CardTitle>
            <CardDescription>
              <Typography variant='small' color='muted'>
                Description de la carte avec des informations supplémentaires
              </Typography>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Typography variant='body'>Le header peut contenir un titre et une description pour organiser le contenu.</Typography>
          </CardContent>
        </CardDemo>

        <CardDemo description='Carte avec header et action' variants='<CardHeader><CardAction>'>
          <CardHeader>
            <CardTitle>
              <Typography variant='h3'>Carte avec Action</Typography>
            </CardTitle>
            <CardAction>
              <Button variant='ghost' size='sm'>
                ⋮
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Typography variant='body'>CardAction permet d'ajouter des éléments interactifs dans le header.</Typography>
          </CardContent>
        </CardDemo>
      </section>

      <SectionTitle>🦶 Footer & Actions</SectionTitle>
      <section className='grid md:grid-cols-2 gap-6'>
        <CardDemo description='Carte avec footer et boutons' variants='<CardFooter> avec boutons'>
          <CardContent className='pt-6'>
            <Typography variant='body'>Cette carte montre l'utilisation du composant CardFooter pour les actions.</Typography>
          </CardContent>
          <CardFooter>
            <div className='flex gap-2'>
              <Button variant='outline' size='sm'>
                Annuler
              </Button>
              <Button size='sm'>Confirmer</Button>
            </div>
          </CardFooter>
        </CardDemo>

        <CardDemo description='Carte avec footer et texte' variants='<CardFooter> avec texte'>
          <CardContent className='pt-6'>
            <Typography variant='body'>Le footer peut aussi contenir du texte informatif ou des liens.</Typography>
          </CardContent>
          <CardFooter>
            <Typography variant='small' color='muted'>
              Dernière mise à jour : il y a 2 heures
            </Typography>
          </CardFooter>
        </CardDemo>
      </section>

      <SectionTitle>🎨 Variants & Styles</SectionTitle>
      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <CardDemo description='Carte avec bordure colorée' variants='<Card className="border-primary">'>
          <Card className='border-primary'>
            <CardContent className='pt-6'>
              <Typography variant='h4' color='primary' className='mb-2'>
                Bordure Colorée
              </Typography>
              <Typography variant='small' color='muted'>
                Une carte avec une bordure colorée pour mettre en valeur le contenu.
              </Typography>
            </CardContent>
          </Card>
        </CardDemo>

        <CardDemo description='Carte avec fond coloré' variants='<Card className="bg-primary/10">'>
          <Card className='bg-primary/10'>
            <CardContent className='pt-6'>
              <Typography variant='h4' className='mb-2'>
                Fond Coloré
              </Typography>
              <Typography variant='small' color='muted'>
                Une carte avec un fond coloré subtil pour différencier les sections.
              </Typography>
            </CardContent>
          </Card>
        </CardDemo>

        <CardDemo description='Carte avec ombre personnalisée' variants='<Card className="shadow-2xl">'>
          <Card className='shadow-2xl'>
            <CardContent className='pt-6'>
              <Typography variant='h4' className='mb-2'>
                Ombre Prononcée
              </Typography>
              <Typography variant='small' color='muted'>
                Une carte avec une ombre très prononcée pour un effet de profondeur maximal.
              </Typography>
            </CardContent>
          </Card>
        </CardDemo>
      </section>

      <SectionTitle>🔧 Utilisation Avancée</SectionTitle>
      <section className='grid md:grid-cols-2 gap-6'>
        <CardDemo description='Carte avec tous les composants' variants='<Card><CardHeader><CardContent><CardFooter>'>
          <Card>
            <CardHeader>
              <CardTitle>
                <Typography variant='h3'>Carte Complète</Typography>
              </CardTitle>
              <CardDescription>
                <Typography variant='small' color='muted'>
                  Exemple d'utilisation de tous les composants Card ensemble
                </Typography>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant='body'>Cette carte utilise tous les composants disponibles : Header, Content et Footer.</Typography>
            </CardContent>
            <CardFooter>
              <div className='flex gap-2'>
                <Button variant='outline' size='sm'>
                  Voir plus
                </Button>
                <Button size='sm'>Action</Button>
              </div>
            </CardFooter>
          </Card>
        </CardDemo>

        <CardDemo description='Carte avec action dans le header' variants='<CardAction> dans <CardHeader>'>
          <Card>
            <CardHeader>
              <CardTitle>
                <Typography variant='h3'>Carte avec Action</Typography>
              </CardTitle>
              <CardDescription>
                <Typography variant='small' color='muted'>
                  Cette carte montre l'utilisation du composant CardAction
                </Typography>
              </CardDescription>
              <CardAction>
                <Button variant='ghost' size='sm'>
                  ⋮
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Typography variant='body'>CardAction permet d'ajouter des éléments interactifs dans le header.</Typography>
            </CardContent>
          </Card>
        </CardDemo>
      </section>

      <SectionTitle>🎯 Démo Interactive</SectionTitle>
      <section className='max-w-2xl mx-auto p-6 border-2 border-primary/20 rounded-lg bg-primary/5'>
        <Typography variant='h4' className='mb-6 text-center'>
          Testez les Composants Card
        </Typography>

        <div className='space-y-4 mb-6'>
          <div className='flex gap-2 justify-center flex-wrap'>
            {['simple', 'header', 'footer', 'action'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedCard(type)}
                className={`px-3 py-1 rounded text-sm transition-colors ${selectedCard === type ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <Typography variant='small' color='muted' className='text-center'>
            Type sélectionné : <span className='font-medium'>{selectedCard || 'Aucun'}</span>
          </Typography>
        </div>

        <div className='space-y-4'>
          {selectedCard === 'simple' && (
            <CardDemo description='Carte simple interactive' variants='<Card><CardContent>'>
              <CardContent className='pt-6'>
                <Typography variant='h4' className='mb-2'>
                  Carte Simple
                </Typography>
                <Typography variant='small' color='muted'>
                  Cliquez sur les boutons ci-dessus pour voir différents types de cartes !
                </Typography>
              </CardContent>
            </CardDemo>
          )}

          {selectedCard === 'header' && (
            <CardDemo description='Carte avec header' variants='<CardHeader><CardTitle><CardDescription>'>
              <CardHeader>
                <CardTitle>
                  <Typography variant='h3'>Carte avec Header</Typography>
                </CardTitle>
                <CardDescription>
                  <Typography variant='small' color='muted'>
                    Cette carte montre l'utilisation du composant CardHeader
                  </Typography>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant='body'>Le header peut contenir un titre et une description pour organiser le contenu.</Typography>
              </CardContent>
            </CardDemo>
          )}

          {selectedCard === 'footer' && (
            <CardDemo description='Carte avec footer' variants='<CardFooter> avec boutons'>
              <CardContent className='pt-6'>
                <Typography variant='body'>Cette carte montre l'utilisation du composant CardFooter pour les actions.</Typography>
              </CardContent>
              <CardFooter>
                <div className='flex gap-2'>
                  <Button variant='outline' size='sm'>
                    Annuler
                  </Button>
                  <Button size='sm'>Confirmer</Button>
                </div>
              </CardFooter>
            </CardDemo>
          )}

          {selectedCard === 'action' && (
            <CardDemo description='Carte avec action dans le header' variants='<CardAction> dans <CardHeader>'>
              <CardHeader>
                <CardTitle>
                  <Typography variant='h3'>Carte avec Action</Typography>
                </CardTitle>
                <CardDescription>
                  <Typography variant='small' color='muted'>
                    Cette carte montre l'utilisation du composant CardAction
                  </Typography>
                </CardDescription>
                <CardAction>
                  <Button variant='ghost' size='sm'>
                    ⋮
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <Typography variant='body'>CardAction permet d'ajouter des éléments interactifs dans le header.</Typography>
              </CardContent>
            </CardDemo>
          )}
        </div>
      </section>
    </div>
  );
}
