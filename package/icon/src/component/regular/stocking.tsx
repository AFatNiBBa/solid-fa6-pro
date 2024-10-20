
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=regular stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 0C78.3 0 64 14.3 64 32l0 32c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L96 0zm48 238.9L144 128l-48 0 0 110.9c0 10.7-5.3 20.7-14.2 26.6L55.7 282.9C20.9 306.1 0 345.1 0 386.9l0 2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L295 422c35.6-23.7 57-63.7 57-106.5L352 128l-48 0 0 187.5c0 26.7-13.4 51.7-35.6 66.6L164.3 451.4C152 459.6 137.6 464 122.8 464C81.5 464 48 430.5 48 389.2l0-2.2c0-25.8 12.9-49.8 34.3-64.1l26.1-17.4c22.3-14.8 35.6-39.8 35.6-66.6z" />
    </Icon>
);

export default Stocking;