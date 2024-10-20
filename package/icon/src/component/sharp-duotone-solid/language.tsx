
import { Icon, generic } from "../../index";

/**
 * A component that renders the `language` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/language?s=sharp-duotone-solid language}
 * @preview ![language](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/language.svg)
 */
const Language: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l320 0 0-384L0 64zM68.1 352l1.4-3.4L93.3 289c.1-.3 .2-.6 .4-.9l47.8-119.6 3.4-8.6 30.3 0 3.4 8.6 47.8 119.6c.1 .3 .2 .6 .3 .9l23.8 59.6 1.4 3.4-43.1 0-14.4-36-68.9 0-14.4 36-43.1 0zm73.5-76l36.9 0L160 229.9 141.5 276z" />
        <path d="M640 64L320 64l0 384 320 0 0-384zM500 184l0 4 44 0 16 0 20 0 0 40-20 0-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3 17.1 10.3-20.6 34.3-17.2-10.3-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6-18.3 8.1-16.2-36.6 18.3-8.1 3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2L427.7 272 456 243.7l14.1 14.1 14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L480 228l-72 0-20 0 0-40 20 0 52 0 0-4 0-20 40 0 0 20zM175.1 160l-30.3 0-3.4 8.6L93.6 288.1c-.1 .3-.2 .6-.4 .9L69.4 348.6 68.1 352l43.1 0 14.4-36 68.9 0 14.4 36 43.1 0-1.4-3.4L226.7 289c-.1-.3-.2-.6-.3-.9L178.6 168.6l-3.4-8.6zm3.3 116l-36.9 0L160 229.9 178.5 276z" />
    </Icon>
);

export default Language;