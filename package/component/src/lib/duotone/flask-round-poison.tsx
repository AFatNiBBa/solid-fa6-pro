
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask-round-poison` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-round-poison?s=duotone flask-round-poison}
 * @preview ![flask-round-poison](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flask-round-poison.svg)
 */
const FlaskRoundPoison: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 352c0 56 22.1 106.9 58.2 144.3C84.5 507 99.3 512 114.2 512l219.6 0c15 0 29.7-5 40.1-15.7C409.9 458.9 432 408 432 352c0-76.8-41.6-143.8-103.5-179.9c-5.2-3-8.5-8.4-8.5-14.4L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L304 0 256 0 192 0 144 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 93.7c0 6-3.3 11.4-8.5 14.4c-5.3 3.1-10.4 6.4-15.4 9.9C50.8 219.7 16 281.8 16 352zm96-40c0-48.6 50.1-88 112-88s112 39.4 112 88c0 25.5-13.9 48.6-36 64.6c-7.1 5.2-12 13-12 21.8l0 9.6c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-9.6c0-8.8-4.9-16.7-12-21.8c-22.1-16.1-36-39.1-36-64.6z" />
        <path d="M288 398.4c0-8.8 4.9-16.7 12-21.8c22.1-16.1 36-39.1 36-64.6c0-48.6-50.1-88-112-88s-112 39.4-112 88c0 25.5 13.9 48.6 36 64.6c7.1 5.2 12 13 12 21.8l0 9.6c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-9.6zM160 312a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FlaskRoundPoison;