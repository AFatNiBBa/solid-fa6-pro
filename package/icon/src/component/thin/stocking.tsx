
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=thin stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 16l256 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16L96 96c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM64 32l0 48c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32L96 0C78.3 0 64 14.3 64 32zm48 206.9l0-94.9-16 0 0 94.9c0 10.7-5.3 20.7-14.2 26.6L55.7 282.9C20.9 306.1 0 345.1 0 386.9l0 2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L295 422c35.6-23.7 57-63.7 57-106.5L352 144l-16 0 0 171.5c0 37.4-18.7 72.4-49.9 93.2L182.1 478.1c-17.5 11.7-38.2 17.9-59.3 17.9C63.8 496 16 448.2 16 389.2l0-2.2c0-36.5 18.2-70.5 48.6-90.7l26.1-17.4c13.4-8.9 21.4-23.9 21.4-39.9z" />
    </Icon>
);

export default Stocking;