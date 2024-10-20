
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-phone-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-flip?s=duotone square-phone-flip}
 * @preview ![square-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-phone-flip.svg)
 */
const SquarePhoneFlip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM96 320c0-7.9 4.7-15.3 12.3-18.5c16-6.7 32-13.3 48-20c8.2-3.4 17.6-1 23.2 5.8c6.7 8.2 13.4 16.4 20.2 24.7c35.2-16.6 63.7-45.1 80.3-80.3c-8.2-6.7-16.4-13.4-24.7-20.2c-6.8-5.6-9.2-15-5.8-23.2c6.7-16 13.3-32 20-48c3.2-7.6 10.6-12.3 18.5-12.3c1.7 0 3.5 .2 5.3 .7c14.7 4 29.3 8 44 12C346 143.1 352 151 352 160c0 123.7-100.3 224-224 224c-9 0-16.9-6-19.3-14.7l-12-44c-.5-1.8-.7-3.5-.7-5.3z" />
        <path d="M269.5 140.3c3.9-9.3 14-14.2 23.7-11.6l44 12C346 143.1 352 151 352 160c0 123.7-100.3 224-224 224c-9 0-16.9-6-19.3-14.7l-12-44c-2.6-9.7 2.3-19.9 11.6-23.7l48-20c8.2-3.4 17.6-1 23.2 5.8L199.7 312c35.2-16.6 63.7-45.1 80.3-80.3l-24.7-20.2c-6.8-5.6-9.2-15-5.8-23.2l20-48z" />
    </Icon>
);

export default SquarePhoneFlip;