
import { Icon, generic } from "../../index";

/**
 * A component that renders the `luchador-mask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/luchador-mask?s=sharp-duotone-solid luchador-mask}
 * @preview ![luchador-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/luchador-mask.svg)
 */
const LuchadorMask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 160l0 48c0 44.2 35.8 80 80 80l0 34c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64c0-29.8-20.4-54.9-48-62l0-34c44.2 0 80-35.8 80-80l0-48-80 0c-44.2 0-80 35.8-80 80c0-44.2-35.8-80-80-80l-80 0zm32 32l48 0c20.9 0 38.7 13.4 45.3 32c1.8 5 2.7 10.4 2.7 16l0 16-48 0c-20.9 0-38.7-13.4-45.3-32C97 219 96 213.6 96 208l0-16zm32 192c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32zm48-80l48-48 48 48 0 16-96 0 0-16zm80-64c0-5.6 1-11 2.7-16c6.6-18.6 24.4-32 45.3-32l48 0 0 16c0 5.6-1 11-2.7 16c-6.6 18.6-24.4 32-45.3 32l-48 0 0-16z" />
        <path d="M224 0C100.3 0 0 100.3 0 224L0 512l448 0 0-288C448 100.3 347.7 0 224 0zM352 384c0 35.3-28.7 64-64 64l-128 0c-35.3 0-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-34c-44.2 0-80-35.8-80-80l0-48 80 0c44.2 0 80 35.8 80 80c0-44.2 35.8-80 80-80l80 0 0 48c0 44.2-35.8 80-80 80l0 34c27.6 7.1 48 32.2 48 62z" />
    </Icon>
);

export default LuchadorMask;