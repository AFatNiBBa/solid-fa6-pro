
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ship` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ship?s=duotone ship}
 * @preview ![ship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ship.svg)
 */
const Ship: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 2.4 .3 4.8 .8 7.3C4.3 502 17.4 512 32 512c2.4 0 4.8-.3 7.3-.8c24.5-5.7 44.9-16.5 58.2-25C126.5 501.7 159 512 192 512c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c2.4 .6 4.9 .8 7.3 .8c14.5 0 27.7-10 31.1-24.7c4-17.2-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-5.9-5-13.3-7.6-20.7-7.6c-6.5 0-12.9 2-18.5 5.9C439.4 437.2 410.9 448 384 448c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0C247 437.4 219.5 448 192 448c-26.9 0-55.3-10.8-77.4-26.1C109 418 102.5 416 96 416c-7.4 0-14.8 2.6-20.7 7.6c-14.4 11.9-32.5 21-50.6 25.2C10 452.3 0 465.4 0 480z" />
        <path d="M224 0c-17.7 0-32 14.3-32 32l0 32-48 0c-26.5 0-48 21.5-48 48l0 128L51.6 254.8c-23.1 7.7-29.5 37.5-11.5 53.9l101 92.6c16.2 9.4 34.7 15.1 50.9 15.1c21.1 0 42-8.5 59.2-20.3c22.1-15.5 51.6-15.5 73.7 0c18.4 12.7 39.6 20.3 59.2 20.3c16.2 0 34.7-5.7 50.9-15.1l101-92.6c18-16.5 11.6-46.2-11.5-53.9L480 240l0-128c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32L224 0zm43.8 182.7L160 218.7l0-90.7 256 0 0 90.7L308.2 182.7c-13.1-4.4-27.3-4.4-40.5 0z" />
    </Icon>
);

export default Ship;