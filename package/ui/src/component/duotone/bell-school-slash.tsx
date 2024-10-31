
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-school-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school-slash?s=duotone bell-school-slash}
 * @preview ![bell-school-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bell-school-slash.svg)
 */
const BellSchoolSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 208c0 114.9 93.1 208 208 208c36.7 0 71.1-9.5 101-26.1L71.5 152.4C66.6 170.1 64 188.7 64 208zM118.5 67.6L220 147.2c14-11.9 32.1-19.2 52-19.2c44.2 0 80 35.8 80 80c0 12.9-3.1 25.1-8.5 35.9c33.8 26.5 67.7 53 101.5 79.6c22.1-33 35-72.8 35-115.5C480 93.1 386.9 0 272 0C211.2 0 156.6 26.1 118.5 67.6zM128 400l0 64c0 26.5 21.5 48 48 48l208 0 32 0 40 0c19.3 0 37.3-5.7 52.3-15.5L465.8 463c-3.2 .7-6.4 1-9.8 1l-40 0 0-40.2-16.1-12.7C362.9 434.5 319 448 272 448c-54 0-103.9-17.9-144-48zM246.1 167.6c23.8 18.6 47.6 37.3 71.3 55.9c1.7-4.9 2.6-10.1 2.6-15.5c0-26.5-21.5-48-48-48c-9.5 0-18.4 2.8-25.9 7.6zM496.5 363.8c24.7 19.4 49.5 38.8 74.2 58.2c3.4-6.6 5.3-14.1 5.3-22c0-26.5-21.5-48-48-48c-12.1 0-23.1 4.5-31.5 11.8z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BellSchoolSlash;