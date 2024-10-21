
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=thin copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 368l-160 0c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l108.1 0c8.5 0 16.6 3.4 22.6 9.4l67.9 67.9c6 6 9.4 14.1 9.4 22.6L432 320c0 26.5-21.5 48-48 48zM224 384l160 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L224 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-32-16 0 0 32c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l64 0 0-16-64 0z" />
    </Icon>
);

export default Copy;