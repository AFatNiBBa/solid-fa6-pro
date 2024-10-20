
import { Icon } from "../../index";

/**
 * A component that renders the `square-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=sharp-light square-right}
 * @preview ![square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-right.svg)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64L32 64l0 384 384 0 0-384zm32-32l0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0zM224 224l-96 0 0 64 96 0 32 0 0 32 0 18.7L338.7 256 256 173.3l0 18.7 0 32-32 0zm160 32l-22.6 22.6L256 384l-32 0 0-32 0-32-32 0-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0-32 0-32 32 0L361.4 233.4 384 256z" />
    </Icon>
);

export default SquareRight;