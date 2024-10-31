
import { Icon, generic } from "../../index";

/**
 * A component that renders the `utensils-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utensils-slash?s=duotone utensils-slash}
 * @preview ![utensils-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/utensils-slash.svg)
 */
const UtensilsSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96.1 171.7c1.9 44.2 36.3 80 79.9 83.9L176 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-194.9L96.1 171.7zM116.5 66c14.5 11.4 29 22.7 43.5 34.1L160 16c0-8.2-6.1-15-14.3-15.9s-15.6 4.5-17.4 12.4L116.5 66zm66.2 51.9c41.3 32.3 82.5 64.7 123.8 97c8.6-13.6 13.6-29.7 13.6-47c0-6.4-.7-12.8-2.1-19.1L287.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S256 7.8 256 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L223.9 14.6C223.2 6.3 216.3 0 208 0s-15.2 6.3-15.9 14.6l-9.4 103.3zM384 176l0 99.7c53.3 41.8 106.7 83.6 160 125.4l0-49.1 0-112 0-208c0-17.7-14.3-32-32-32C496 0 384 32 384 176z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default UtensilsSlash;