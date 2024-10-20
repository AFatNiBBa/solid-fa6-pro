
import { Icon } from "../../index";

/**
 * A component that renders the `draw-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-square?s=sharp-regular draw-square}
 * @preview ![draw-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/draw-square.svg)
 */
const DrawSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 96A16 16 0 1 1 48 96a16 16 0 1 1 32 0zM64 32C28.7 32 0 60.7 0 96c0 26.9 16.5 49.9 40 59.3l0 201.3C16.5 366.1 0 389.1 0 416c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l201.3 0c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3l0-201.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40L123.3 72C113.9 48.5 90.9 32 64 32zM360 356.7c-16 6.5-28.9 19.3-35.3 35.3l-201.3 0c-6.5-16-19.3-28.9-35.3-35.3l0-201.3c16-6.5 28.9-19.3 35.3-35.3l201.3 0c6.5 16 19.3 28.9 35.3 35.3l0 201.3zM64 400a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM400 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM384 400a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default DrawSquare;