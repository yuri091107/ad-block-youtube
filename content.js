function removeAds() {
  // Contêineres de anúncios conhecidos
  const adSelectors = [
    '.ytp-ad-module',          // Contêiner de anúncio do player
    '.ytp-ad-player-overlay',  // Overlay do player de anúncio
    '.ad-container',           // Contêineres gerais de anúncios
    '.video-ads',              // Contêiner de anúncios em vídeo
    '#player-ads',             // Contêiner de anúncios no player
    '.ytp-ad-overlay-slot',    // Sobreposições de banner
    '.ytp-ad-skip-button',     // Botão de pular anúncio
    '.ytp-ad-interrupting'     // Anúncios interrompendo o vídeo
  ];

  adSelectors.forEach(selector => {
    const ads = document.querySelectorAll(selector);
    ads.forEach(ad => ad.remove()); // Remove elementos de anúncio encontrados
  });

  // Verifica se um anúncio está em reprodução e avança o vídeo
  const videoPlayer = document.querySelector('.video-stream');
  
  if (document.querySelector('.ad-showing')) {
    if (videoPlayer && videoPlayer.readyState >= 3 && !isNaN(videoPlayer.duration) && videoPlayer.duration > 0) {
      // Verifica se o vídeo está pronto e a duração é válida
      videoPlayer.currentTime = videoPlayer.duration; // Pula o anúncio inteiro
      console.log('Anúncio detectado e pulado.');
    } else {
      console.log('O player não está pronto ou a duração do vídeo é inválida.');
    }
  }

  // Fecha sobreposições de anúncios
  const adOverlay = document.querySelector('.ytp-ad-overlay-close-button');
  if (adOverlay) {
    adOverlay.click(); // Fecha sobreposição de anúncio
    console.log('Sobreposição de anúncio fechada.');
  }

  // Esconde qualquer interação de anúncio
  const interactiveAds = document.querySelectorAll('.ytp-ad-action-interstitial');
  interactiveAds.forEach(ad => ad.remove());
}

// Observador de mudanças no DOM
const observer = new MutationObserver(removeAds);

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Executa repetidamente para garantir que os anúncios sejam removidos rapidamente
setInterval(removeAds, 500);  // Checa a cada meio segundo