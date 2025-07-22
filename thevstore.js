<script>
window.addEventListener('scroll', function() {
    const header = document.querySelector('.page__header');
    const scrollY = window.scrollY;

    const maxScroll = 200;
    const shrinkStart = 80;

    // Opacity
    const opacity = Math.min(scrollY / maxScroll, 1);
    header.style.setProperty('--header-opacity', opacity);

    // Scale
    const scale = 1 - Math.min(Math.max((scrollY - shrinkStart) / (maxScroll - shrinkStart), 0), 0.3);
    header.style.setProperty('--header-scale', scale);

    // Logo scale
    const logoScale = 1 - Math.min(Math.max((scrollY - shrinkStart) / (maxScroll - shrinkStart), 0), 0.2);
    header.style.setProperty('--logo-scale', logoScale);

    // Padding transition
    const paddingTopStart = 28;
    const paddingTopEnd = 10;

    const paddingBottomStart = 28;
    const paddingBottomEnd = 45;

    const paddingTopDiff = paddingTopStart - paddingTopEnd;
    const paddingBottomDiff = paddingBottomStart - paddingBottomEnd;

    const progress = Math.min(Math.max((scrollY - shrinkStart) / (maxScroll - shrinkStart), 0), 1);

    const paddingTop = paddingTopStart - progress * paddingTopDiff;
    const paddingBottom = paddingBottomStart - progress * paddingBottomDiff;

    document.documentElement.style.setProperty('--header-padding-top', `${paddingTop}px`);
    document.documentElement.style.setProperty('--header-padding-bottom', `${paddingBottom}px`);

});
</script>