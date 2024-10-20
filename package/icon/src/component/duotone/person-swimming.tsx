
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-swimming` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-swimming?s=duotone person-swimming}
 * @preview ![person-swimming](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-swimming.svg)
 */
const PersonSwimming: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 2.4 .3 4.8 .8 7.3c4 17.2 21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 405.7 159 416 192 416c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9c.6-2.4 .8-4.9 .8-7.3c0-14.5-10-27.7-24.7-31.1c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.4-27.3-10.1-39.2-1.7C439.4 341.2 410.9 352 384 352c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0C247 341.4 219.5 352 192 352c-26.9 0-55.3-10.8-77.4-26.1c-12-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2C10 356.3 0 369.4 0 384z" />
        <path d="M447.9 297.1L309.5 178.4C331.7 166.6 357.1 160 384 160l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-121.8 0-220.9 97.2-223.9 218.2c10.8 4 21.8 6.2 31.9 6.2c21.1 0 42-8.5 59.2-20.3c22.1-15.5 51.6-15.5 73.7 0c18.4 12.7 39.6 20.3 59.2 20.3c19 0 41.2-7.9 59.2-20.3c1.6-1.1 3.1-2.1 4.8-3zM96 224A64 64 0 1 0 96 96a64 64 0 1 0 0 128z" />
    </Icon>
);

export default PersonSwimming;