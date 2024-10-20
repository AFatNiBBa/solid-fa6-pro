
import { Icon, generic } from "../../index";

/**
 * A component that renders the `guarani-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guarani-sign?s=duotone guarani-sign}
 * @preview ![guarani-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/guarani-sign.svg)
 */
const GuaraniSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 34.7c-5.2-.9-10.5-1.5-15.8-2c-2.7-.2-5.4-.4-8.1-.5c-1.3-.1-2.7-.1-4.1-.1s-2.7 0-4.1 0c-10.9 0-21.6 .9-32 2.7L160 32zm0 100c5.1-1.3 10.3-2.3 15.7-3c2.7-.3 5.4-.6 8.1-.8c1.4-.1 2.7-.2 4.1-.2s2.7-.1 4.1-.1c11.1 0 21.8 1.4 32 4l0 92 0 64 0 92c-5.1 1.3-10.4 2.3-15.7 3c-2.7 .3-5.4 .6-8.1 .8c-1.4 .1-2.7 .2-4.1 .2s-2.7 .1-4.1 .1c-11 0-21.8-1.4-32-4L160 132zm0 313.3c5.2 .9 10.5 1.5 15.8 2c2.7 .2 5.4 .4 8.1 .5c1.3 .1 2.7 .1 4.1 .1s2.7 0 4.1 0c10.9 0 21.6-.9 32-2.7l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7z" />
        <path d="M192 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c59.6 0 109.8-40.8 124-96l-92 0 0-64 128 0c17.7 0 32 14.3 32 32c0 106-86 192-192 192S0 362 0 256S86 64 192 64c52.3 0 99.8 21 134.4 54.9c12.6 12.4 12.8 32.6 .5 45.3s-32.6 12.8-45.3 .4C258.5 141.9 226.9 128 192 128z" />
    </Icon>
);

export default GuaraniSign;