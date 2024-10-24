
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tugrik-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tugrik-sign?s=sharp-duotone-solid tugrik-sign}
 * @preview ![tugrik-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tugrik-sign.svg)
 */
const TugrikSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M25.2 232.7l15.5 62.1 31-7.8L160 265l0-66L56.2 225l-31 7.8zm0 96l15.5 62.1 31-7.8L160 361l0-66L56.2 321l-31 7.8zM224 183l0 66L327.8 223l31-7.8-15.5-62.1-31 7.8L224 183zm0 96l0 66L327.8 319l31-7.8-15.5-62.1-31 7.8L224 279z" />
        <path d="M0 32l32 0 160 0 160 0 32 0 0 64-32 0L224 96l0 352 0 32-64 0 0-32 0-352L32 96 0 96 0 32z" />
    </Icon>
);

export default TugrikSign;