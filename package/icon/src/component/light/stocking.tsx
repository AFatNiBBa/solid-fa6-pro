
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=light stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 32l256 0 0 48L96 80l0-48zM64 32l0 48c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32L96 0C78.3 0 64 14.3 64 32zm64 206.9l0-94.9-32 0 0 94.9c0 10.7-5.3 20.7-14.2 26.6L55.7 282.9C20.9 306.1 0 345.1 0 386.9l0 2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L295 422c35.6-23.7 57-63.7 57-106.5L352 144l-32 0 0 171.5c0 32.1-16 62.1-42.7 79.9L173.2 464.7c-14.9 9.9-32.4 15.3-50.4 15.3C72.7 480 32 439.3 32 389.2l0-2.2c0-31.1 15.6-60.2 41.4-77.4l26.1-17.4c17.8-11.9 28.5-31.9 28.5-53.3z" />
    </Icon>
);

export default Stocking;