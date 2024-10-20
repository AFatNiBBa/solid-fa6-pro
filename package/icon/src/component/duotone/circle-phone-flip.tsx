
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=duotone circle-phone-flip}
 * @preview ![circle-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-phone-flip.svg)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 64c0-7.9 4.7-15.3 12.3-18.5c16-6.7 32-13.3 48-20c8.2-3.4 17.6-1 23.2 5.8c6.7 8.2 13.4 16.4 20.2 24.7c35.2-16.6 63.7-45.1 80.3-80.3c-8.2-6.7-16.4-13.4-24.7-20.2c-6.8-5.6-9.2-15-5.8-23.2c6.7-16 13.3-32 20-48c3.2-7.6 10.6-12.3 18.5-12.3c1.7 0 3.5 .2 5.3 .7c14.7 4 29.3 8 44 12C378 143.1 384 151 384 160c0 123.7-100.3 224-224 224c-9 0-16.9-6-19.3-14.7l-12-44c-.5-1.8-.7-3.5-.7-5.3z" />
        <path d="M301.5 140.3c3.9-9.3 14-14.2 23.7-11.6l44 12C378 143.1 384 151 384 160c0 123.7-100.3 224-224 224c-9 0-16.9-6-19.3-14.7l-12-44c-2.6-9.7 2.3-19.9 11.6-23.7l48-20c8.2-3.4 17.6-1 23.2 5.8L231.7 312c35.2-16.6 63.7-45.1 80.3-80.3l-24.7-20.2c-6.8-5.6-9.2-15-5.8-23.2l20-48z" />
    </Icon>
);

export default CirclePhoneFlip;