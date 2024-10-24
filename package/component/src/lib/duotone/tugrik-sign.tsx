
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tugrik-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tugrik-sign?s=duotone tugrik-sign}
 * @preview ![tugrik-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tugrik-sign.svg)
 */
const TugrikSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M33 263.8c4.3 17.1 21.7 27.6 38.8 23.3L160 265l0-66L56.2 225c-17.1 4.3-27.6 21.7-23.3 38.8zm0 96C36.6 374.3 49.6 384 64 384c2.6 0 5.2-.3 7.8-1L160 361l0-66L56.2 321c-17.1 4.3-27.6 21.7-23.3 38.8zM224 183c0 22 0 44 0 66L327.8 223c14.5-3.6 24.2-16.7 24.2-31c0-2.6-.3-5.2-1-7.8c-4.3-17.1-21.7-27.6-38.8-23.3L224 183zm0 96c0 22 0 44 0 66L327.8 319c14.5-3.6 24.2-16.7 24.2-31c0-2.6-.3-5.2-1-7.8c-4.3-17.1-21.7-27.6-38.8-23.3L224 279z" />
        <path d="M0 64C0 46.3 14.3 32 32 32l160 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L224 96l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352L32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default TugrikSign;