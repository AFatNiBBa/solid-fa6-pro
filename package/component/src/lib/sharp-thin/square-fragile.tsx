
import { Icon } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=sharp-thin square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm320 80l-100.7 0 34.3 34.3 6.9 6.9-8.1 5.4-39.1 26.1 39.8 33.1 6.1 5.1L249 235.3l-6.1-5.1-48-40-8.2-6.9 8.9-5.9 39.9-26.6L196.7 112 128 112l0 96c0 53 43 96 96 96s96-43 96-96l0-96zM128 96l192 0 16 0 0 16 0 96c0 59.2-45.9 107.6-104 111.7l0 80.3 56 0 0 16-128 0 0-16 56 0 0-80.3c-58.1-4.1-104-52.6-104-111.7l0-96 0-16 16 0z" />
    </Icon>
);

export default SquareFragile;