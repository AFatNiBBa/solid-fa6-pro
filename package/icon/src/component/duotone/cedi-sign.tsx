
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cedi-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cedi-sign?s=duotone cedi-sign}
 * @preview ![cedi-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cedi-sign.svg)
 */
const CediSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 34.7c-5.2-.9-10.5-1.5-15.8-2c-2.7-.2-5.4-.4-8-.5c-1.3-.1-2.7-.1-4.1-.1s-2.7 0-4.1 0c-10.9 0-21.6 .9-32 2.7L192 32zm0 100c5.1-1.3 10.3-2.3 15.7-3c2.7-.3 5.4-.6 8.1-.8c1.4-.1 2.7-.2 4.1-.2s2.7-.1 4.1-.1c11.1 0 21.8 1.4 32 4L256 380c-5.1 1.3-10.3 2.3-15.7 3c-2.7 .3-5.4 .6-8.1 .8c-1.4 .1-2.7 .2-4.1 .2s-2.7 .1-4.1 .1c-11 0-21.8-1.4-32-4L192 132zm0 313.3c5.2 .9 10.5 1.5 15.8 2c2.7 .2 5.4 .4 8.1 .5c1.3 .1 2.7 .1 4.1 .1s2.7 0 4.1 0c10.9 0 21.6-.9 32-2.7l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7z" />
        <path d="M224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c28.9 0 55.4-9.5 76.8-25.6c14.1-10.6 34.2-7.8 44.8 6.4s7.8 34.2-6.4 44.8C307.1 433.7 267.2 448 224 448C118 448 32 362 32 256S118 64 224 64c43.2 0 83.1 14.3 115.2 38.4c14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4C279.4 137.5 252.9 128 224 128z" />
    </Icon>
);

export default CediSign;