
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-slash?s=thin laptop-slash}
 * @preview ![laptop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/laptop-slash.svg)
 */
const LaptopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM487.3 480l-20.3-16L76.8 464C43.2 464 16 436.8 16 403.2c0-1.8 1.4-3.2 3.2-3.2L386 400l-20.3-16L19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l410.5 0zM560 352l16 0 0-256c0-35.3-28.7-64-64-64L152.3 32l20.3 16L512 48c26.5 0 48 21.5 48 48l0 256zM64 145.8L64 352l16 0 0-193.6L64 145.8z" />
    </Icon>
);

export default LaptopSlash;