
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=thin square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48l320 0c26.5 0 48 21.5 48 48l0 68.6c5.2-1.5 10.5-2.7 16-3.5L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l256 0 0-16L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48zm167.2 84.4c-1.4-2.7-4.1-4.4-7.2-4.4s-5.8 1.7-7.2 4.4l-120 240c-2 4-.4 8.8 3.6 10.7s8.8 .4 10.7-3.6L136.9 328l174.1 0 9.2 18.4c.7-8.2 3-15.9 6.4-22.9L231.2 132.4zM224 153.9L303.1 312l-158.1 0L224 153.9zM464 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-16 80l16 0 16 0 96 0 16 0 16 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default SquareALock;