
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cup-straw-swoosh` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-straw-swoosh?s=duotone cup-straw-swoosh}
 * @preview ![cup-straw-swoosh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cup-straw-swoosh.svg)
 */
const CupStrawSwoosh: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 192l320 0-6.4 64c-50.7 .6-85.3 8.9-111.2 22.8c-25.7 13.9-40.8 32.5-53.1 47.7l-1.9 2.3c-12.7 15.6-23.5 28.1-42.8 37.6C119.3 375 93.5 382 51.2 383.6L32 192zM55.9 431.5c45.2-2 77.3-9.8 101.9-22c29.2-14.4 45.4-34 58.7-50.4l.7-.8c13-16 22.7-28 39.9-37.2c16.1-8.7 40.9-15.9 83.6-17L324.3 468.8c-2.5 24.5-23.1 43.2-47.8 43.2l-169.1 0c-24.7 0-45.3-18.7-47.8-43.2l-3.7-37.3z" />
        <path d="M249.3 0c-26 0-48.6 17.9-54.5 43.2l-20 84.8L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-127.8 0 17.4-73.8c.9-3.6 4.1-6.2 7.8-6.2L280 48c13.3 0 24-10.7 24-24s-10.7-24-24-24L249.3 0z" />
    </Icon>
);

export default CupStrawSwoosh;