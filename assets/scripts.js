// --- Données produits ---
const products = [
  {
    id: 'airpods',
    name: 'AirPods Pro',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    description: 'Écouteurs sans fil Apple AirPods Pro avec réduction de bruit active.'
  },
  {
    id: 'powerbank',
    name: 'Power Bank 20000mAh',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
    description: 'Batterie externe haute capacité pour tous vos appareils.'
  },
  {
    id: 'chargeur-usb',
    name: 'Chargeur USB Rapide',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Chargeur mural USB 20W compatible tous smartphones.'
  },
  {
    id: 'cable-lightning',
    name: 'Câble Lightning',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    description: 'Câble Apple Lightning certifié MFi, 1m.'
  },
  {
    id: 'ecouteurs-bluetooth',
    name: 'Écouteurs Bluetooth',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Écouteurs sans fil Bluetooth, autonomie 8h.'
  },
  {
    id: 'support-tel',
    name: 'Support Téléphone Voiture',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
    description: 'Support magnétique universel pour voiture.'
  },
  {
    id: 'adaptateur-usb-c',
    name: 'Adaptateur USB-C',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    description: 'Adaptateur USB-C vers USB-A, transfert rapide.'
  },
  {
    id: 'chargeur-induction',
    name: 'Chargeur à Induction',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Chargeur sans fil Qi, compatible iPhone et Android.'
  },
  {
    id: 'cle-usb',
    name: 'Clé USB 64Go',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
    description: 'Clé USB 3.0 haute vitesse, 64Go.'
  },
  {
    id: 'housse-tablette',
    name: 'Housse Tablette',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    description: 'Housse de protection universelle pour tablette.'
  },
  {
    id: 'station-charge',
    name: 'Station de Charge',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Station de charge multi-appareils, 5 ports.'
  },
  {
    id: 'mini-ventilateur',
    name: 'Mini Ventilateur USB',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
    description: 'Ventilateur portable USB, silencieux.'
  }
];

// --- Génération de la grille produits (Store) ---
if (document.getElementById('productsGrid')) {
  const grid = document.getElementById('productsGrid');
  
  // Icônes par catégorie de produit
  const productIcons = {
    'airpods': 'fas fa-headphones',
    'powerbank': 'fas fa-battery-three-quarters',
    'chargeur-usb': 'fas fa-plug',
    'cable-lightning': 'fas fa-usb',
    'ecouteurs-bluetooth': 'fas fa-headphones-alt',
    'support-tel': 'fas fa-mobile-alt',
    'adaptateur-usb-c': 'fas fa-usb',
    'chargeur-induction': 'fas fa-charging-station',
    'cle-usb': 'fas fa-save',
    'housse-tablette': 'fas fa-tablet-alt',
    'station-charge': 'fas fa-charging-station',
    'mini-ventilateur': 'fas fa-fan'
  };
  
  function renderProducts(list) {
    grid.innerHTML = '';
    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fas fa-search fs-1 text-muted mb-3"></i>
          <h4 class="text-muted">Aucun produit trouvé</h4>
          <p class="text-muted">Essayez avec d'autres mots-clés</p>
        </div>
      `;
      return;
    }
    
    list.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'col-md-4 col-lg-3 mb-4 fade-in';
      const icon = productIcons[p.id] || 'fas fa-box';
      card.innerHTML = `
        <div class="card h-100 shadow-sm hover-lift">
          <div class="position-relative">
            <img src="${p.image}" class="card-img-top" alt="${p.name}" style="height: 200px; object-fit: cover;">
            <div class="position-absolute top-0 end-0 m-2">
              <span class="badge bg-primary rounded-pill">
                <i class="${icon} me-1"></i>Nouveau
              </span>
            </div>
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title d-flex align-items-center">
              <i class="${icon} me-2 text-primary"></i>${p.name}
            </h5>
            <p class="card-text text-muted small flex-grow-1">${p.description}</p>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span class="fw-bold fs-5 text-success">${p.price.toFixed(2)} €</span>
              <button class="btn btn-outline-primary btn-sm" onclick="generateProductLink('${p.id}')">
                <i class="fas fa-eye me-1"></i>Voir
              </button>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    
    // Animation fade-in avec effet de cascade
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach((el, idx) => {
        setTimeout(() => {
          el.classList.add('visible');
          el.style.animationDelay = `${idx * 0.1}s`;
        }, idx * 100);
      });
    }, 100);
  }
  renderProducts(products);
  
  // Recherche dynamique avec animation
  const searchBar = document.getElementById('searchBar');
  let searchTimeout;
  
  searchBar.addEventListener('input', function() {
    const val = this.value.toLowerCase();
    
    // Ajouter effet de chargement
    if (searchTimeout) clearTimeout(searchTimeout);
    
    // Animation de recherche
    searchBar.style.transform = 'scale(1.02)';
    setTimeout(() => {
      searchBar.style.transform = 'scale(1)';
    }, 150);
    
    searchTimeout = setTimeout(() => {
      const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(val) || 
        p.description.toLowerCase().includes(val)
      );
      renderProducts(filteredProducts);
    }, 300);
  });
  
  // Animation au focus de la barre de recherche
  searchBar.addEventListener('focus', function() {
    this.parentElement.style.transform = 'scale(1.02)';
  });
  
  searchBar.addEventListener('blur', function() {
    this.parentElement.style.transform = 'scale(1)';
  });
}

// --- Génération de lien unique produit ---
function generateUUID() {
  // Simple UUID v4
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function getDeviceFingerprint() {
  return btoa(navigator.userAgent + (navigator.language || ''));
}

// Fonction pour nettoyer les anciens liens expirés d'un produit
function cleanExpiredLinksForProduct(productId) {
  const keys = Object.keys(localStorage);
  const oneHour = 3600000; // 1 heure en millisecondes
  
  keys.forEach(key => {
    if (key.startsWith('productlink_')) {
      try {
        const linkData = JSON.parse(localStorage.getItem(key));
        if (linkData && linkData.productId === productId) {
          const timeElapsed = Date.now() - linkData.timestamp;
          // Supprimer les liens expirés (plus d'1 heure) et non utilisés
          if (timeElapsed > oneHour && !linkData.purchaseCompleted) {
            localStorage.removeItem(key);
          }
        }
      } catch (e) {
        // Supprimer les données corrompues
        localStorage.removeItem(key);
      }
    }
  });
}

// Fonction pour générer automatiquement un nouveau lien après expiration
function autoGenerateNewLinkAfterExpiry(productId) {
  const oneHour = 3600000; // 1 heure en millisecondes
  
  // Vérifier s'il n'y a pas de lien actif pour ce produit
  const keys = Object.keys(localStorage);
  let hasActiveLinkForProduct = false;
  
  keys.forEach(key => {
    if (key.startsWith('productlink_')) {
      try {
        const linkData = JSON.parse(localStorage.getItem(key));
        if (linkData && linkData.productId === productId) {
          const timeElapsed = Date.now() - linkData.timestamp;
          if (timeElapsed <= oneHour && !linkData.used && !linkData.purchaseCompleted && !linkData.expired) {
            hasActiveLinkForProduct = true;
          }
        }
      } catch (e) {
        localStorage.removeItem(key);
      }
    }
  });
  
  // Si aucun lien actif, générer automatiquement un nouveau lien
  if (!hasActiveLinkForProduct) {
    const newUuid = generateUUID();
    const newTimestamp = Date.now();
    const device = getDeviceFingerprint();
    const newLinkData = { 
      uuid: newUuid, 
      timestamp: newTimestamp, 
      used: false, 
      device,
      productId,
      isUnique: true,
      purchaseCompleted: false,
      expired: false,
      createdAt: new Date().toISOString(),
      autoGenerated: true // Marquer comme généré automatiquement
    };
    localStorage.setItem('productlink_' + newUuid, JSON.stringify(newLinkData));
    
    console.log(`🔗 Nouveau lien automatique généré pour le produit ${productId}:`);
    console.log(`   UUID: ${newUuid}`);
    console.log(`   URL: product.html?id=${productId}&uuid=${newUuid}`);
    
    // Programmer la génération automatique du prochain lien après expiration
    setTimeout(() => {
      autoGenerateNewLinkAfterExpiry(productId);
    }, oneHour + 1000);
  }
}

// Fonction utilitaire pour afficher tous les liens actifs (pour débogage)
function showActiveLinks() {
  const keys = Object.keys(localStorage);
  const activeLinks = [];
  const oneHour = 3600000;
  
  keys.forEach(key => {
    if (key.startsWith('productlink_')) {
      try {
        const linkData = JSON.parse(localStorage.getItem(key));
        if (linkData) {
          const timeElapsed = Date.now() - linkData.timestamp;
          const isActive = timeElapsed <= oneHour && !linkData.used && !linkData.purchaseCompleted && !linkData.expired;
          activeLinks.push({
            uuid: linkData.uuid,
            productId: linkData.productId,
            isActive,
            timeRemaining: isActive ? Math.max(0, oneHour - timeElapsed) : 0,
            autoGenerated: linkData.autoGenerated || false,
            url: `product.html?id=${linkData.productId}&uuid=${linkData.uuid}`
          });
        }
      } catch (e) {
        localStorage.removeItem(key);
      }
    }
  });
  
  console.log('📋 Liens disponibles:', activeLinks);
  return activeLinks;
}

function generateProductLink(productId) {
  // Nettoyer les anciens liens expirés pour ce produit
  cleanExpiredLinksForProduct(productId);
  
  const uuid = generateUUID();
  const timestamp = Date.now();
  const device = getDeviceFingerprint();
  const linkData = { 
    uuid, 
    timestamp, 
    used: false, 
    device,
    productId,
    isUnique: true, // Marquer comme lien unique
    purchaseCompleted: false,
    expired: false,
    createdAt: new Date().toISOString(),
    autoGenerated: false
  };
  localStorage.setItem('productlink_' + uuid, JSON.stringify(linkData));
  
  // Programmer la génération automatique d'un nouveau lien après expiration (1 heure)
  setTimeout(() => {
    autoGenerateNewLinkAfterExpiry(productId);
  }, 3600000 + 1000); // 1 heure + 1 seconde
  
  // Afficher une notification de création de lien
  const notification = document.createElement('div');
  notification.className = 'alert alert-info position-fixed top-0 start-50 translate-middle-x mt-5';
  notification.style.zIndex = '9999';
  notification.innerHTML = `
    <i class="fas fa-link me-2"></i>
    <strong>Lien unique généré !</strong>
    <br><small>Vous pouvez maintenant acheter le produit. Le lien expire dans 1 heure.</small>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
  
  // Redirige avec paramètres après un court délai
  setTimeout(() => {
    window.location.href = `product.html?id=${productId}&uuid=${uuid}`;
  }, 1000);
}

// --- Page produit : vérification du lien ---
if (window.location.pathname.endsWith('product.html')) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const uuid = params.get('uuid');
  const detailsDiv = document.getElementById('productDetails');
  const expiredDiv = document.getElementById('expiredMessage');
  function showExpired() {
    detailsDiv.innerHTML = '';
    expiredDiv.classList.remove('d-none');
  }
  function checkLink() {
    if (!uuid) return showExpired();
    const linkData = JSON.parse(localStorage.getItem('productlink_' + uuid) || 'null');
    if (!linkData) return showExpired();
    if (linkData.used || linkData.purchaseCompleted || linkData.expired) return showExpired();
    if (linkData.device !== getDeviceFingerprint()) return showExpired();
    
    // Vérifier que le lien est bien marqué comme unique
    if (!linkData.isUnique) {
      expiredDiv.innerHTML = `
        <div class="alert alert-danger text-center">
          <i class="fas fa-exclamation-triangle me-2"></i>
          <strong>Lien invalide !</strong>
          <p class="mb-0 mt-2">Ce lien n'est pas un lien unique valide.</p>
        </div>
      `;
      expiredDiv.classList.remove('d-none');
      return;
    }
    
    const timeElapsed = Date.now() - linkData.timestamp;
    const oneHour = 3600000; // 1 heure en millisecondes
    
    // Si le lien a expiré (plus d'1 heure), afficher message d'expiration
    if (timeElapsed > oneHour) {
      expiredDiv.innerHTML = `
        <div class="alert alert-danger text-center">
          <i class="fas fa-clock me-2"></i>
          <strong>Lien expiré !</strong>
          <p class="mb-0 mt-2">Ce lien a expiré après 1 heure. Un nouveau lien sera généré automatiquement.</p>
          <small class="text-muted d-block mt-2">Retournez à la boutique pour obtenir un nouveau lien.</small>
        </div>
      `;
      expiredDiv.classList.remove('d-none');
      return;
    }
    
    // Le lien est encore valide, afficher le produit avec possibilité d'achat immédiat
    const prod = products.find(p => p.id === productId);
    if (!prod) return showExpired();
    
    // Calculer le temps restant
    const timeRemaining = oneHour - timeElapsed;
    const hoursLeft = Math.floor(timeRemaining / 3600000);
    const minutesLeft = Math.floor((timeRemaining % 3600000) / 60000);
    const secondsLeft = Math.floor((timeRemaining % 60000) / 1000);
    
    const productIcon = {
      'airpods': 'fas fa-headphones',
      'powerbank': 'fas fa-battery-three-quarters',
      'chargeur-usb': 'fas fa-plug',
      'cable-lightning': 'fas fa-usb',
      'ecouteurs-bluetooth': 'fas fa-headphones-alt',
      'support-tel': 'fas fa-mobile-alt',
      'adaptateur-usb-c': 'fas fa-usb',
      'chargeur-induction': 'fas fa-charging-station',
      'cle-usb': 'fas fa-save',
      'housse-tablette': 'fas fa-tablet-alt',
      'station-charge': 'fas fa-charging-station',
      'mini-ventilateur': 'fas fa-fan'
    }[prod.id] || 'fas fa-box';
    
    detailsDiv.innerHTML = `
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-lg mb-4 glass-effect">
          <div class="position-relative">
            <img src="${prod.image}" class="card-img-top" alt="${prod.name}" style="height: 300px; object-fit: cover;">
            <div class="position-absolute top-0 start-0 m-3">
              <span class="badge bg-success rounded-pill fs-6">
                <i class="${productIcon} me-1"></i>Disponible
              </span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title mb-3 gradient-text d-flex align-items-center">
              <i class="${productIcon} me-2"></i>${prod.name}
            </h3>
            <p class="card-text mb-3">${prod.description}</p>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <span class="fw-bold fs-4 text-success">
                <i class="fas fa-euro-sign me-1"></i>${prod.price.toFixed(2)}
              </span>
              <div class="text-end">
                <small class="text-muted d-block">
                  <i class="fas fa-shipping-fast me-1"></i>Livraison gratuite
                </small>
                <small class="text-muted">
                  <i class="fas fa-shield-alt me-1"></i>Garantie 2 ans
                </small>
              </div>
            </div>
            <!-- Compte à rebours -->
            <div class="alert alert-warning text-center mb-4">
              <i class="fas fa-clock me-2"></i>
              <strong>Temps restant avant expiration :</strong>
              <div class="fs-4 mt-2" id="countdown">
                <span class="badge bg-danger me-1">${hoursLeft.toString().padStart(2, '0')}</span>:
                <span class="badge bg-danger me-1">${minutesLeft.toString().padStart(2, '0')}</span>:
                <span class="badge bg-danger">${secondsLeft.toString().padStart(2, '0')}</span>
              </div>
              <small class="d-block mt-2 text-muted">
                <i class="fas fa-info-circle me-1"></i>
                Le lien expirera automatiquement après ce délai
              </small>
            </div>
            
            <div class="alert alert-success text-center mb-4">
              <i class="fas fa-shopping-cart me-2"></i>
              <strong>Achat disponible maintenant !</strong>
              <p class="mb-0 mt-2">
                Ce lien est à usage unique. Vous pouvez acheter le produit immédiatement.
                <br><small>Le lien sera désactivé après l'achat ou après expiration.</small>
              </p>
            </div>
            
            <h5 class="mb-3">
              <i class="fas fa-credit-card me-2 text-primary"></i>Choisissez votre mode de paiement
            </h5>
            <div class="mb-3 d-grid gap-2">
              <button class="btn btn-success btn-lg" onclick="showPayment('card')">
                <i class='fas fa-credit-card me-2'></i>Carte bancaire
                <small class="d-block">Paiement sécurisé instantané</small>
              </button>
              <button class="btn btn-primary btn-lg" onclick="showPayment('paypal')">
                <i class='fab fa-paypal me-2'></i>PayPal
                <small class="d-block">Paiement rapide et sécurisé</small>
              </button>
              <button class="btn btn-secondary btn-lg" onclick="showPayment('bank')">
                <i class='fas fa-university me-2'></i>Virement bancaire
                <small class="d-block">Paiement par virement SEPA</small>
              </button>
            </div>
            <div id="paymentOptions" class="mt-4"></div>
          </div>
        </div>
      </div>
    `;
    
    // Démarrer le compte à rebours en temps réel
    startCountdown(timeRemaining, uuid);
  }
  

  
  // Fonction pour le compte à rebours en temps réel
  function startCountdown(initialTime, uuid) {
    let timeLeft = initialTime;
    
    const countdownInterval = setInterval(() => {
      timeLeft -= 1000;
      
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        // Marquer le lien comme expiré et recharger la page
        const linkData = JSON.parse(localStorage.getItem('productlink_' + uuid) || 'null');
        if (linkData && !linkData.purchaseCompleted) {
          linkData.expired = true;
          localStorage.setItem('productlink_' + uuid, JSON.stringify(linkData));
        }
        window.location.reload();
        return;
      }
      
      const hours = Math.floor(timeLeft / 3600000);
      const minutes = Math.floor((timeLeft % 3600000) / 60000);
      const seconds = Math.floor((timeLeft % 60000) / 1000);
      
      const countdownElement = document.getElementById('countdown');
      if (countdownElement) {
        countdownElement.innerHTML = `
          <span class="badge bg-danger me-1">${hours.toString().padStart(2, '0')}</span>:
          <span class="badge bg-danger me-1">${minutes.toString().padStart(2, '0')}</span>:
          <span class="badge bg-danger">${seconds.toString().padStart(2, '0')}</span>
        `;
      }
    }, 1000);
  }
  
  checkLink();
  window.showPayment = function(method) {
    const paymentDiv = document.getElementById('paymentOptions');
    if (method === 'card') {
      paymentDiv.innerHTML = `
        <div class="card glass-effect">
          <div class="card-header">
            <h6 class="mb-0"><i class="fas fa-credit-card me-2"></i>Paiement par carte bancaire</h6>
          </div>
          <div class="card-body">
            <form onsubmit="event.preventDefault(); markLinkUsed('${uuid}'); this.innerHTML='<div class=\'alert alert-success\'><i class=\'fas fa-check-circle me-2\'></i>Paiement validé. Merci !</div>';">
              <div class='mb-3'>
                <label class="form-label"><i class="fas fa-credit-card me-1"></i>Numéro de carte</label>
                <input class='form-control' type='text' pattern='[0-9 ]{16,19}' maxlength='19' placeholder='1234 5678 9012 3456' required>
              </div>
              <div class='mb-3'>
                <label class="form-label"><i class="fas fa-user me-1"></i>Nom sur la carte</label>
                <input class='form-control' type='text' placeholder='Jean Dupont' required>
              </div>
              <div class='row mb-3'>
                <div class='col'>
                  <label class="form-label"><i class="fas fa-calendar me-1"></i>Expiration</label>
                  <input class='form-control' type='text' pattern='[0-9]{2}/[0-9]{2}' maxlength='5' placeholder='MM/AA' required>
                </div>
                <div class='col'>
                  <label class="form-label"><i class="fas fa-lock me-1"></i>CVC</label>
                  <input class='form-control' type='text' pattern='[0-9]{3,4}' maxlength='4' placeholder='123' required>
                </div>
              </div>
              <button class='btn btn-success w-100 btn-lg'>
                <i class="fas fa-lock me-2"></i>Payer maintenant
              </button>
            </form>
          </div>
        </div>
      `;
    } else if (method === 'paypal') {
      paymentDiv.innerHTML = `
        <div class="card glass-effect">
          <div class="card-header">
            <h6 class="mb-0"><i class="fab fa-paypal me-2"></i>Paiement PayPal</h6>
          </div>
          <div class="card-body">
            <form onsubmit="event.preventDefault(); markLinkUsed('${uuid}'); this.innerHTML='<div class=\'alert alert-success\'><i class=\'fas fa-check-circle me-2\'></i>Paiement PayPal validé. Merci !</div>';">
              <div class='mb-3'>
                <label class="form-label"><i class="fas fa-envelope me-1"></i>Email PayPal</label>
                <input class='form-control' type='email' required placeholder='email@exemple.com'>
              </div>
              <button class='btn btn-primary w-100 btn-lg'>
                <i class="fab fa-paypal me-2"></i>Payer avec PayPal
              </button>
            </form>
          </div>
        </div>
      `;
    } else if (method === 'bank') {
      paymentDiv.innerHTML = `
        <div class="card glass-effect">
          <div class="card-header">
            <h6 class="mb-0"><i class="fas fa-university me-2"></i>Virement bancaire</h6>
          </div>
          <div class="card-body">
            <form onsubmit="event.preventDefault(); markLinkUsed('${uuid}'); this.innerHTML='<div class=\'alert alert-success\'><i class=\'fas fa-check-circle me-2\'></i>Virement validé. Merci !</div>';">
              <div class='mb-3'>
                <label class="form-label"><i class="fas fa-user me-1"></i>Nom complet</label>
                <input class='form-control' required placeholder='Jean Dupont'>
              </div>
              <div class='mb-3'>
                <label class="form-label"><i class="fas fa-university me-1"></i>IBAN de destination</label>
                <input class='form-control' value='FR76 3000 6000 0112 3456 7890 189' readonly>
                <small class="form-text text-muted">Copiez cet IBAN pour effectuer le virement</small>
              </div>
              <button class='btn btn-secondary w-100 btn-lg'>
                <i class="fas fa-check me-2"></i>Confirmer le virement
              </button>
            </form>
          </div>
        </div>
      `;
    }
  };
  window.markLinkUsed = function(uuid) {
    const linkData = JSON.parse(localStorage.getItem('productlink_' + uuid) || 'null');
    if (linkData) {
      linkData.used = true;
      linkData.purchaseCompleted = true;
      linkData.purchaseDate = Date.now();
      linkData.expired = true; // Marquer comme expiré immédiatement après achat
      localStorage.setItem('productlink_' + uuid, JSON.stringify(linkData));
      
      // Programmer la génération d'un nouveau lien pour ce produit
      setTimeout(() => {
        autoGenerateNewLinkAfterExpiry(linkData.productId);
      }, 5000); // Générer un nouveau lien 5 secondes après l'achat
    }
    
    // Animation de chargement
    const paymentDiv = document.getElementById('paymentOptions');
    paymentDiv.innerHTML = `
      <div class="text-center py-4">
        <div class="spinner-border text-primary mb-3" role="status">
          <span class="visually-hidden">Traitement...</span>
        </div>
        <p>Traitement de votre paiement...</p>
      </div>
    `;
    
    setTimeout(() => {
      detailsDiv.innerHTML = `
        <div class="alert alert-success text-center">
          <i class="fas fa-check-circle fs-1 mb-3 d-block text-success"></i>
          <h4>🎉 Achat validé avec succès !</h4>
          <p class="mb-3">Votre commande a été confirmée et sera traitée dans les plus brefs délais.</p>
          <div class="row text-start">
            <div class="col-md-6">
              <h6><i class="fas fa-receipt me-2"></i>Détails de la commande :</h6>
              <ul class="list-unstyled">
                <li><strong>Référence :</strong> ${uuid.substring(0, 8).toUpperCase()}</li>
                <li><strong>Date :</strong> ${new Date().toLocaleDateString('fr-FR')}</li>
                <li><strong>Statut :</strong> <span class="badge bg-success">Confirmé</span></li>
              </ul>
            </div>
            <div class="col-md-6">
              <h6><i class="fas fa-truck me-2"></i>Livraison :</h6>
              <ul class="list-unstyled">
                <li><i class="fas fa-check text-success me-1"></i>Expédition sous 24h</li>
                <li><i class="fas fa-check text-success me-1"></i>Suivi par email</li>
                <li><i class="fas fa-check text-success me-1"></i>Livraison gratuite</li>
              </ul>
            </div>
          </div>
          <hr>
          <div class="alert alert-info mt-3">
            <i class="fas fa-info-circle me-2"></i>
            <strong>Information :</strong> Ce lien est maintenant expiré. Un nouveau lien sera automatiquement généré pour ce produit.
          </div>
          <p class="text-muted mb-0">
            <i class="fas fa-heart me-1 text-danger"></i>
            Merci pour votre confiance !
          </p>
        </div>
      `;
    }, 2000);
  };
}

// Rendre les fonctions utilitaires disponibles globalement
window.showActiveLinks = showActiveLinks;
window.autoGenerateNewLinkAfterExpiry = autoGenerateNewLinkAfterExpiry;
window.cleanExpiredLinksForProduct = cleanExpiredLinksForProduct;

// --- Animations pour la page d'accueil ---
document.addEventListener('DOMContentLoaded', function() {
  // Animation des éléments fade-in au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observer tous les éléments fade-in
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // Animation du logo au chargement
  const logo = document.querySelector('.navbar-brand i');
  if (logo) {
    logo.style.animation = 'pulse 2s infinite';
  }
  
  // Effet parallax léger sur le hero
  const hero = document.querySelector('.hero-section');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }
  
  // Animation des icônes au hover
  document.querySelectorAll('.icon-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.animation = 'float 0.6s ease-in-out';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.animation = '';
    });
  });
  
  // Effet de typing sur le titre principal (si présent)
  const mainTitle = document.querySelector('.hero-section h1');
  if (mainTitle && !sessionStorage.getItem('titleAnimated')) {
    const text = mainTitle.textContent;
    mainTitle.textContent = '';
    mainTitle.style.borderRight = '2px solid var(--main-blue)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        mainTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        mainTitle.style.borderRight = 'none';
        sessionStorage.setItem('titleAnimated', 'true');
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
});
