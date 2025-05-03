export function initAds() {
    const adUnits = document.querySelectorAll('.ad-unit');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function loadVisibleAds() {
        adUnits.forEach(ad => {
            if (isElementInViewport(ad) && !ad.dataset.loaded) {
                const ins = ad.querySelector('ins.adsbygoogle');
                if (ins && ins.offsetWidth > 0) {
                    console.log('Carregando anúncio:', ad.className);
                    ad.dataset.loaded = 'true';

                    try {
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    } catch (e) {
                        console.error("Erro ao carregar anúncio:", e);
                    }
                }
            }
        });
    }

    document.addEventListener('DOMContentLoaded', loadVisibleAds);
    window.addEventListener('scroll', loadVisibleAds);
    window.addEventListener('resize', loadVisibleAds);
}