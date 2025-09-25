# CV Integration

## Comment ajouter votre CV

1. **Placez votre fichier CV** dans ce dossier (`public/cv/`)
2. **Renommez-le** en `cv-oussama-kbaili.pdf`
3. **Vérifiez** que le fichier est accessible via `/cv/cv-oussama-kbaili.pdf`

## Structure recommandée

```
public/
└── cv/
    └── cv-oussama-kbaili.pdf
```

## Fonctionnalités

- ✅ **Téléchargement direct** : Bouton "Télécharger PDF"
- ✅ **Visualisation en ligne** : Bouton "Voir en ligne" 
- ✅ **Design responsive** : Adaptation mobile/desktop
- ✅ **Animations** : Effets hover et transitions
- ✅ **Mode sombre** : Support complet du thème sombre

## Personnalisation

Pour modifier le nom du fichier ou les textes, éditez `components/about-section.tsx` :

```tsx
// Ligne 295-296 : Chemin du fichier
href="/cv/cv-oussama-kbaili.pdf"
download="CV-Oussama-Kbaili.pdf"

// Ligne 271-272 : Titre et sous-titre
<h4 className="text-lg font-bold text-foreground">CV - Oussama Kbaili</h4>
<p className="text-sm text-muted-foreground">Software Engineer</p>
```
