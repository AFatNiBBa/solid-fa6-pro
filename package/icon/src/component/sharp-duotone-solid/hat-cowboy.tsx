
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-cowboy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-cowboy?s=sharp-duotone-solid hat-cowboy}
 * @preview ![hat-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hat-cowboy.svg)
 */
const HatCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M141.1 290.8C186.8 307.1 246.2 320 320 320c2.3 0 4.6 0 6.9 0s4.5-.1 6.8-.1c4.5-.1 8.9-.2 13.3-.4c8.8-.4 17.3-1 25.7-1.7c16.7-1.5 32.4-3.6 47.3-6.2c29.8-5.3 56.1-12.6 78.9-20.7l-20.4-70.5C431.8 243 377.7 256 320 256s-111.8-13-158.5-35.7l-20.4 70.5z" />
        <path d="M216 32L161.5 220.3C208.2 243 262.3 256 320 256s111.8-13 158.5-35.7L424 32 320 80 216 32zM24 224L0 256s96 192 320 192s320-192 320-192l-24-32s-94.5 96-296 96s-296-96-296-96z" />
    </Icon>
);

export default HatCowboy;