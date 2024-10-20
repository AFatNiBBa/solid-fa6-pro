
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=duotone square-phone}
 * @preview ![square-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-phone.svg)
 */
const SquarePhone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm96 64c0-9 6-16.9 14.7-19.3l44-12c1.8-.5 3.5-.7 5.3-.7c7.9 0 15.3 4.7 18.5 12.3l20 48c3.4 8.2 1 17.6-5.8 23.2c-8.2 6.7-16.4 13.5-24.7 20.2c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8c16 6.7 32 13.3 48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160z" />
        <path d="M178.5 140.3c-3.9-9.3-14-14.2-23.7-11.6l-44 12C102 143.1 96 151 96 160c0 123.7 100.3 224 224 224c9 0 16.9-6 19.3-14.7l12-44c2.6-9.7-2.3-19.9-11.6-23.7l-48-20c-8.2-3.4-17.6-1-23.2 5.8L248.3 312c-35.2-16.6-63.7-45.1-80.3-80.3l24.7-20.2c6.8-5.6 9.2-15 5.8-23.2l-20-48z" />
    </Icon>
);

export default SquarePhone;