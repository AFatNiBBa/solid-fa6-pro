
import { Icon, generic } from "../../index";

/**
 * A component that renders the `utensils-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utensils-slash?s=sharp-duotone-solid utensils-slash}
 * @preview ![utensils-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/utensils-slash.svg)
 */
const UtensilsSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96.8 172.2c5.3 42 37.8 75.5 79.2 82.4L176 480l0 32 64 0 0-32 0-194.9L96.8 172.2zm18-105.9C129.8 78 144.9 89.7 160 101.4L160 0 128 0 114.7 66.3zm65.5 50.9c41.2 32 82.4 64 123.6 96C314.1 198 320 179.7 320 160L288 0 256 0l0 160-16 0L224 0 192 0 180.3 117.2zM384 176l0 99.4c53.3 41.4 106.7 82.8 160 124.2l0-47.6 0-112 0-32L544 0C512 0 384 32 384 176z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default UtensilsSlash;