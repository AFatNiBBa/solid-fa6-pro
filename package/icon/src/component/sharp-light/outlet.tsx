
import { Icon } from "../../index";

/**
 * A component that renders the `outlet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=sharp-light outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM96 256c0 35.7 12.8 61 25.5 77.6c6.4 8.4 12.7 14.5 17.3 18.4l170.5 0c4.6-3.9 10.9-10 17.3-18.4C339.2 317 352 291.7 352 256s-12.8-61-25.5-77.6c-6.4-8.4-12.7-14.5-17.3-18.4l-170.5 0c-4.6 3.9-10.9 10-17.3 18.4C108.8 195 96 220.3 96 256zm-32 0c0-88 64-128 64-128l192 0s64 40 64 128s-64 128-64 128l-192 0s-64-40-64-128zm128-64l0 16 0 48 0 16-32 0 0-16 0-48 0-16 32 0zm96 0l0 16 0 48 0 16-32 0 0-16 0-48 0-16 32 0zm-64 96c13.3 0 24 10.7 24 24l0 24-48 0 0-24c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Outlet;