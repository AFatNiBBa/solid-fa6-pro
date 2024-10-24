
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cedi-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cedi-sign?s=sharp-duotone-solid cedi-sign}
 * @preview ![cedi-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cedi-sign.svg)
 */
const CediSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 0l64 0 0 32 0 34.7c-5.2-.9-10.5-1.5-15.8-2c-2.7-.2-5.4-.4-8-.5c-1.3-.1-2.7-.1-4.1-.1s-2.7 0-4.1 0c-10.9 0-21.6 .9-32 2.7L192 32l0-32zm0 132c5.1-1.3 10.3-2.3 15.7-3c2.7-.3 5.4-.6 8.1-.8c1.4-.1 2.7-.2 4.1-.2s2.7-.1 4.1-.1c11 0 21.8 1.4 32 4L256 380c-5.1 1.3-10.4 2.3-15.7 3c-2.7 .3-5.4 .6-8.1 .8c-1.4 .1-2.7 .2-4.1 .2s-2.7 .1-4.1 .1c-11 0-21.8-1.4-32-4L192 132zm0 313.3c5.2 .9 10.5 1.5 15.8 2c2.7 .2 5.4 .4 8.1 .5c1.3 .1 2.7 .1 4.1 .1s2.7 0 4.1 0c10.9 0 21.6-.9 32-2.7l0 34.7 0 32-64 0 0-32 0-34.7z" />
        <path d="M224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c41.9 0 79-20.1 102.4-51.2l51.2 38.4C342.6 417.8 286.8 448 224 448C118 448 32 362 32 256S118 64 224 64c62.8 0 118.6 30.2 153.6 76.8l-51.2 38.4C303 148.1 265.9 128 224 128z" />
    </Icon>
);

export default CediSign;