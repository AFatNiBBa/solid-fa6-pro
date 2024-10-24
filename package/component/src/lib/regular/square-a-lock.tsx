
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=regular square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80l320 0c8.8 0 16 7.2 16 16l0 84.1c14-9.8 30.3-16.4 48-18.9L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l256 0 0-48L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16zm181.8 61.9c-3.9-8.5-12.4-13.9-21.8-13.9s-17.9 5.4-21.8 13.9l-96 208c-5.6 12-.3 26.3 11.7 31.8s26.3 .3 31.8-11.7l12-26.1 124.4 0 12 26.1c4 8.8 12.7 13.9 21.8 13.9l0-32c0-11.4 3-22.1 8.2-31.4L245.8 141.9zM224 209.3L264 296l-80 0 40-86.7zM464 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default SquareALock;