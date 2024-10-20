
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=sharp-light square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l384 0 0 106.8c9.9-4.7 20.7-8 32-9.6L448 64l0-32-32 0L32 32 0 32 0 64 0 448l0 32 32 0 288 0 0-32L32 448 32 64zm206.5 73.2l-4.3-9.2-20.4 0-4.3 9.2L94 384l35.3 0 30-64 129.5 0 30 64 1.3 0 0-72.7L238.5 137.2zM224 181.7L273.8 288l-99.5 0L224 181.7zM464 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default SquareALock;