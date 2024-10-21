
import { Icon } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=thin square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm305.1 16l-85.8 0 34.3 34.3c1.7 1.7 2.5 4.1 2.3 6.4s-1.5 4.5-3.5 5.9l-39.1 26.1 39.8 33.1c3.4 2.8 3.9 7.9 1 11.3s-7.9 3.9-11.3 1l-48-40c-1.9-1.6-3-4.1-2.9-6.6s1.5-4.8 3.6-6.2l39.9-26.6L196.7 112l-53.8 0c-8.2 0-14.9 6.7-14.9 14.9l0 81.1c0 53 43 96 96 96s96-43 96-96l0-81.1c0-8.2-6.7-14.9-14.9-14.9zM142.9 96l162.2 0c17.1 0 30.9 13.8 30.9 30.9l0 81.1c0 59.2-45.9 107.6-104 111.7l0 80.3 48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l48 0 0-80.3c-58.1-4.1-104-52.6-104-111.7l0-81.1c0-17.1 13.8-30.9 30.9-30.9z" />
    </Icon>
);

export default SquareFragile;