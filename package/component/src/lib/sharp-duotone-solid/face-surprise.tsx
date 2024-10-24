
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-surprise` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-surprise?s=sharp-duotone-solid face-surprise}
 * @preview ![face-surprise](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-surprise.svg)
 */
const FaceSurprise: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144.4-48c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zM320 352a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm48.4-144a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceSurprise;