-- Supprimer les anciennes politiques
DROP POLICY IF EXISTS "Lecture publique des résultats" ON resultats;
DROP POLICY IF EXISTS "Admins peuvent tout faire sur résultats" ON resultats;
DROP POLICY IF EXISTS "Admins peuvent gérer leur compte" ON admin_users;

-- Nouvelles politiques plus permissives pour notre système
-- Permettre la lecture publique des résultats
CREATE POLICY "Public peut lire les résultats" ON resultats
  FOR SELECT USING (true);

-- Permettre l'insertion publique (pour notre système d'admin simple)
CREATE POLICY "Public peut insérer des résultats" ON resultats
  FOR INSERT WITH CHECK (true);

-- Permettre la mise à jour publique
CREATE POLICY "Public peut modifier les résultats" ON resultats
  FOR UPDATE USING (true);

-- Permettre la suppression publique
CREATE POLICY "Public peut supprimer les résultats" ON resultats
  FOR DELETE USING (true);

-- Pour la table admin_users, on peut la désactiver pour l'instant
ALTER TABLE admin_users DISABLE ROW LEVEL SECURITY;

-- Optionnel : Si vous voulez complètement désactiver RLS sur resultats
-- (plus simple mais moins sécurisé)
-- ALTER TABLE resultats DISABLE ROW LEVEL SECURITY;
