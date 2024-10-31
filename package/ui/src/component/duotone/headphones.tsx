
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headphones` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=duotone headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 48c0-1 0-2.1 .1-3.1s.1-2.1 .2-3.1c.2-2 .4-4.1 .7-6.1c.6-4 1.5-7.9 2.7-11.7c2.4-7.6 5.8-14.7 10.2-21.1c8.8-12.8 21.2-23 35.7-29C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c29.1 12 49.6 40.6 49.6 74l0-48C512 146.6 397.4 32 256 32S0 146.6 0 288z" />
        <path d="M80 256c-44.2 0-80 35.8-80 80l0 64c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48zm352 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80l0-64c0-44.2-35.8-80-80-80z" />
    </Icon>
);

export default Headphones;