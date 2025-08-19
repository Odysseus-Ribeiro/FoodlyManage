import { InputCustom, Typography } from '@/components';
import { AtSign, Calendar, CreditCard, DollarSign, Eye, EyeOff, Globe, Hash, Lock, MapPin, Phone, Search, Shield, Star, User } from 'lucide-react';
import { useState } from 'react';

function InputDemo({
  description,
  variants,
  ...props
}: {
  description: string;
  variants: string;
} & React.ComponentProps<typeof InputCustom>) {
  return (
    <div className='relative group space-y-1'>
      <InputCustom {...props} containerClassName='transition-all duration-200 group-hover:ring-2 group-hover:ring-primary/20 group-hover:rounded-md' />

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

export function InputCustomExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const getEmailState = () => {
    if (!email) return 'default';
    return email.includes('@') ? 'success' : 'error';
  };

  const getPasswordState = () => {
    if (!password) return 'default';
    if (password.length < 6) return 'error';
    if (password.length < 8) return 'warning';
    return 'success';
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <article className='max-w-6xl mx-auto p-8 space-y-8'>
      <section className='p-6 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5'>
        <Typography variant='h2' color='primary' className='mb-3'>
          🎯 InputCustom - Tous les États
        </Typography>
        <Typography variant='body' color='muted' className='mb-2'>
          Survolez n'importe quel input pour voir les variants utilisés !
        </Typography>
        <Typography variant='small' color='muted'>
          Composant professionnel avec gestion complète des états, icônes, loading, validation, etc.
        </Typography>
      </section>

      <SectionTitle>📏 Tailles (Sizes)</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <InputDemo size='sm' placeholder='Small input' leftIcon={<User className='h-3 w-3' />} description='Petit input' variants='size="sm" leftIcon={<User />}' />
        <InputDemo size='md' placeholder='Medium input (défaut)' leftIcon={<User className='h-4 w-4' />} description='Medium input' variants='size="md" leftIcon={<User />}' />
        <InputDemo size='lg' placeholder='Large input' leftIcon={<User className='h-5 w-5' />} description='Grand input' variants='size="lg" leftIcon={<User />}' />
      </section>

      <SectionTitle>🎨 États (States)</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <InputDemo state='default' placeholder='État par défaut' leftIcon={<User className='h-4 w-4' />} description='État normal' variants='state="default"' />
        <InputDemo
          state='error'
          placeholder="État d'erreur"
          leftIcon={<AtSign className='h-4 w-4' />}
          helperText='Email requis'
          description="État d'erreur"
          variants='state="error" helperText="..."'
        />
        <InputDemo
          state='success'
          placeholder='État de succès'
          leftIcon={<Shield className='h-4 w-4' />}
          value='Validé ✓'
          readOnly
          description='État de succès'
          variants='state="success" value="Validé"'
        />
        <InputDemo
          state='warning'
          placeholder="État d'alerte"
          leftIcon={<Star className='h-4 w-4' />}
          helperText='Mot de passe faible'
          description="État d'alerte"
          variants='state="warning" helperText="..."'
        />
      </section>

      <SectionTitle>🎭 Variants Visuels</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <InputDemo variant='default' placeholder='Variant par défaut' leftIcon={<Globe className='h-4 w-4' />} description='Style par défaut' variants='variant="default"' />
        <InputDemo variant='filled' placeholder='Variant rempli' leftIcon={<Globe className='h-4 w-4' />} description='Style rempli' variants='variant="filled"' />
        <InputDemo variant='ghost' placeholder='Variant fantôme' leftIcon={<Globe className='h-4 w-4' />} description='Style fantôme' variants='variant="ghost"' />
      </section>

      <SectionTitle>⏳ États de Chargement</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <InputDemo loading placeholder='Chargement...' leftIcon={<Search className='h-4 w-4' />} disabled description='Input en loading' variants='loading={true} disabled' />
        <div className='space-y-2'>
          <InputDemo
            placeholder='Test de chargement'
            leftIcon={<User className='h-4 w-4' />}
            loading={loading}
            disabled={loading}
            description='Loading dynamique'
            variants='loading={loading} disabled={loading}'
          />
          <button onClick={handleSubmit} className='px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors'>
            {loading ? 'Chargement...' : 'Tester Loading'}
          </button>
        </div>
      </section>

      <SectionTitle>🔐 Formulaires d'Authentification</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-4 p-6 border rounded-lg'>
          <Typography variant='h4' className='mb-4'>
            Connexion
          </Typography>

          <InputDemo
            label='Email'
            type='email'
            placeholder='votre@email.com'
            leftIcon={<AtSign className='h-4 w-4' />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            state={getEmailState()}
            clearable
            onClear={() => setEmail('')}
            description='Email avec validation'
            variants='type="email" state={validationState} clearable'
          />

          <InputDemo
            label='Mot de passe'
            type={showPassword ? 'text' : 'password'}
            placeholder='••••••••'
            leftIcon={<Lock className='h-4 w-4' />}
            rightIcon={showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
            onRightIconClick={() => setShowPassword(!showPassword)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            state={getPasswordState()}
            helperText={password ? `${password.length}/8 caractères minimum` : ''}
            description='Password avec toggle'
            variants='type="password" rightIcon={<Eye />} onRightIconClick'
          />
        </div>

        <div className='space-y-4 p-6 border rounded-lg'>
          <Typography variant='h4' className='mb-4'>
            Inscription
          </Typography>

          <InputDemo
            label="Nom d'utilisateur"
            placeholder='johndoe'
            leftIcon={<User className='h-4 w-4' />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            clearable
            onClear={() => setUsername('')}
            description='Username simple'
            variants='leftIcon={<User />} clearable'
          />

          <InputDemo
            label='Téléphone'
            type='tel'
            placeholder='+33 6 12 34 56 78'
            leftIcon={<Phone className='h-4 w-4' />}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            description='Numéro de téléphone'
            variants='type="tel" leftIcon={<Phone />}'
          />
        </div>
      </section>

      <SectionTitle>🛍️ Recherche & Commerce</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <InputDemo
          placeholder='Rechercher des produits...'
          leftIcon={<Search className='h-4 w-4' />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          clearable
          onClear={() => setSearch('')}
          variant='filled'
          description='Barre de recherche'
          variants='leftIcon={<Search />} variant="filled" clearable'
        />

        <InputDemo
          label='Numéro de carte'
          placeholder='1234 5678 9012 3456'
          leftIcon={<CreditCard className='h-4 w-4' />}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          state={cardNumber.length >= 16 ? 'success' : 'default'}
          description='Carte de crédit'
          variants='leftIcon={<CreditCard />} state={validation}'
        />
      </section>

      {/* Complex Forms */}
      <SectionTitle>📋 Formulaires Complexes</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <InputDemo
          label='Adresse'
          placeholder='123 Rue de la Paix'
          leftIcon={<MapPin className='h-4 w-4' />}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          description='Adresse géographique'
          variants='leftIcon={<MapPin />}'
        />

        <InputDemo label='Date' type='date' leftIcon={<Calendar className='h-4 w-4' />} description='Sélecteur de date' variants='type="date" leftIcon={<Calendar />}' />

        <InputDemo
          label='Montant'
          type='number'
          placeholder='0.00'
          leftIcon={<DollarSign className='h-4 w-4' />}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          helperText='€ EUR'
          description='Input numérique'
          variants='type="number" leftIcon={<DollarSign />}'
        />
      </section>

      {/* Disabled & Special States */}
      <SectionTitle>🚫 États Spéciaux</SectionTitle>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <InputDemo
          placeholder='Input désactivé'
          leftIcon={<User className='h-4 w-4' />}
          disabled
          value='Champ verrouillé'
          description='Input désactivé'
          variants='disabled value="..." leftIcon={<User />}'
        />

        <InputDemo
          placeholder='Input en lecture seule'
          leftIcon={<Hash className='h-4 w-4' />}
          readOnly
          value='ID-123456789'
          description='Lecture seule'
          variants='readOnly value="..." leftIcon={<Hash />}'
        />
      </section>

      {/* All Features Combined */}
      <SectionTitle>🚀 Exemple Complet</SectionTitle>
      <section className='max-w-md mx-auto p-6 border-2 border-primary/20 rounded-lg bg-primary/5'>
        <Typography variant='h4' className='mb-6 text-center'>
          Profil Utilisateur
        </Typography>

        <div className='space-y-4'>
          <InputDemo
            label='Email professionnel'
            type='email'
            placeholder='nom@entreprise.com'
            leftIcon={<AtSign className='h-4 w-4' />}
            state='success'
            value='jean.dupont@entreprise.fr'
            clearable
            onClear={() => {}}
            helperText='Email vérifié ✓'
            description='Email complet'
            variants='label type="email" leftIcon state="success" clearable helperText'
          />

          <InputDemo
            label='Mot de passe sécurisé'
            type='password'
            placeholder='••••••••••••'
            leftIcon={<Lock className='h-4 w-4' />}
            rightIcon={<Eye className='h-4 w-4' />}
            onRightIconClick={() => {}}
            state='warning'
            helperText='Utilisez des caractères spéciaux'
            size='lg'
            variant='filled'
            description='Password complet'
            variants='label type="password" leftIcon rightIcon state size variant helperText'
          />
        </div>
      </section>
    </article>
  );
}
