-- Création de la table pour les résultats
CREATE TABLE IF NOT EXISTS resultats (
  id BIGSERIAL PRIMARY KEY,
  athlete VARCHAR(255) NOT NULL,
  competition VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  distance VARCHAR(100) NOT NULL,
  position INTEGER NOT NULL CHECK (position > 0),
  temps VARCHAR(50) NOT NULL,
  categorie VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création de la table pour l'authentification des admins
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_resultats_date ON resultats(date DESC);
CREATE INDEX IF NOT EXISTS idx_resultats_position ON resultats(position);
CREATE INDEX IF NOT EXISTS idx_resultats_athlete ON resultats(athlete);

-- RLS (Row Level Security) pour sécuriser l'accès
ALTER TABLE resultats ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre la lecture publique des résultats
CREATE POLICY "Lecture publique des résultats" ON resultats
  FOR SELECT USING (true);

-- Politique pour permettre aux admins authentifiés de tout faire
CREATE POLICY "Admins peuvent tout faire sur résultats" ON resultats
  FOR ALL USING (auth.role() = 'authenticated');

-- Politique pour les admins sur leur propre table
CREATE POLICY "Admins peuvent gérer leur compte" ON admin_users
  FOR ALL USING (auth.uid()::text = id::text);
