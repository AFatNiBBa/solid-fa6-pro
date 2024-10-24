
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hospital-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-user?s=duotone hospital-user}
 * @preview ![hospital-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hospital-user.svg)
 */
const HospitalUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 48C0 21.5 21.5 0 48 0L272 0c26.5 0 48 21.5 48 48l0 223.8 0 95.9c-38.2 21.4-64 62.3-64 109.2c0 12.9 3.6 24.9 9.9 35.1L48 512c-26.5 0-48-21.5-48-48l0-80 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 352l0-64 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 256 0 48zm96 72l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16z" />
        <path d="M432 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm-50.9 32c-51.4 0-93.1 41.7-93.1 93.1c0 19.3 15.6 34.9 34.9 34.9l218.2 0c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1l-101.8 0z" />
    </Icon>
);

export default HospitalUser;