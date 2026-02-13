# Cahier des Charges - Concert Privé de Tayc pour Livia - Saint-Valentin

## 1. Description du Projet
Création d'une expérience web immersive et romantique simulant un concert privé de l'artiste Tayc, dédié spécifiquement à une personne prénommée **Livia**. L'application offrira une ambiance visuelle et sonore personnalisée, recréant l'atmosphère d'une scène de concert intime.

## 2. Objectifs
- Offrir une expérience utilisateur unique et émouvante pour la Saint-Valentin.
- Simuler une présence virtuelle de l'artiste Tayc.
- Personnaliser le contenu (prénom, messages, playlist).
- Créer une interface visuellement attrayante et "premium".

## 3. Fonctionnalités Principales

### 3.1 Page d'Accueil & Introduction
- **Message d'accueil personnalisé** : "Concert Exclusif pour Livia".
- **Design Romantique** : Utilisation d'une palette de couleurs inspirée de l'univers de Tayc (Bleu nuit, Violet profond, Noir, touches de Rose/Rouge pour la Saint-Valentin).
- **Ambiance Visuelle** : Arrière-plan animé ou vidéo subtile, effets de particules ou de lueurs douces.

### 3.2 La Scène Virtuelle (Concert Hall)
- **Représentation graphique** d'une scène de concert.
- **Éclairage dynamique** : Projecteurs, jeux de lumières qui peuvent réagir ou bouger (CSS animations).
- **Visuel de l'artiste** : Silhouette ou image stylisée de Tayc au centre de la scène.
- **Atmosphère** : Effets de fumée (canvas ou CSS), spots lumineux.

### 3.3 Lecteur Audio & Playlist (Le Concert)
- **Playlist Curatée** : Sélection de 3 à 5 titres phares de Tayc (ex: "Le Temps", "N'y pense plus", "Doudou"...).
- **Contrôles** : Lecture, Pause, Suivant, Précédent, Volume.
- **Affichage** : Titre en cours, durée, barre de progression visuelle.
- **Visualiseur Audio (Optionnel/Simulé)** : Barres qui bougent au rythme de la musique (si possible via Web Audio API ou animation CSS simulée).

### 3.4 Éléments de Personnalisation & Dédicaces
- **Message Spécial Saint-Valentin** : Une section dédiée avec un texte émouvant écrit par l'utilisateur pour Livia.
- **Mise en scène du message** : Apparition fluide, belle typographie.
- **Signature** : "Avec tout mon amour, [Nom de l'utilisateur]".

### 3.5 Interactions Utilisateur
- **"Allumer les bougies"** : Un bouton qui active une animation de bougies ou une lueur chaleureuse sur l'écran.
- **Contrôle des effets** : Possibilité de changer l'intensité des lumières de la scène.
- **Responsive Design** : L'expérience doit être parfaite sur mobile et desktop.

## 4. Spécifications Techniques

### 4.1 Structure (HTML5)
- Code sémantique et accessible.
- Utilisation des balises `<audio>` pour la gestion sonore.
- Sections clairement définies : Header, Stage, Player, Message, Footer.

### 4.2 Style & Design (CSS3)
- **Palette de couleurs** :
  - Fond : `#0f0f23` (Bleu nuit très sombre)
  - Accents : `#6a11cb` (Violet), `#2575fc` (Bleu électrique), `#ff4d8d` (Rose romantique).
- **Typographie** : Polices modernes et élégantes (ex: 'Montserrat', 'Playfair Display' pour les titres).
- **Animations** : Transitions douces, keyframes pour les lumières et les éléments flottants.
- **Responsive** : Flexbox et Grid pour l'adaptation aux écrans.

### 4.3 Logique & Interactivité (JavaScript)
- Gestion du DOM pour les interactions.
- Contrôle de l'élément `HTMLAudioElement`.
- Gestion de la playlist (tableau d'objets : titre, source, durée).
- Stockage local (localStorage) pour mémoriser si l'intro a déjà été vue (optionnel).
- Animations dynamiques synchronisées avec les actions (ex: play = lumières s'activent).

## 5. Livrables
- `index.html` : Structure de la page.
- `style.css` : Feuille de style complète.
- `script.js` : Logique de l'application.
- `README.md` : Guide d'installation et d'utilisation rapide.

## 6. Échéance
- Projet à finaliser avant le **14 février**.
