window.ashTwinTheme = window.ashTwinTheme || {};

window.ashTwinTheme.toggle = (button) => {
    const wrapper = button.closest('.page-wrapper');

    if (!wrapper) {
        return;
    }

    const isLightMode = wrapper.classList.toggle('back-mode');
    button.classList.toggle('flipped', isLightMode);
    button.setAttribute('aria-pressed', String(!isLightMode));

    const timerKey = 'ashTwinShimmerTimer';
    const previousTimer = button.dataset[timerKey];

    if (previousTimer) {
        window.clearTimeout(Number(previousTimer));
    }

    button.classList.remove('sand-shimmer');
    void button.offsetWidth;
    button.classList.add('sand-shimmer');

    button.dataset[timerKey] = String(window.setTimeout(() => {
        button.classList.remove('sand-shimmer');
        delete button.dataset[timerKey];
    }, 900));
};

