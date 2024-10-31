
import { Icon } from "../../index";

/**
 * A component that renders the `display` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=thin display}
 * @preview ![display](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/display.svg)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 16c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-167.8 0-.3 0-111.7 0-.3 0L64 400c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l448 0zM64 416l158.6 0-13.3 80L136 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 144 0 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-73.2 0-13.3-80L512 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64zm161.4 80l13.3-80 98.4 0 13.3 80-125.1 0zM80 80l416 0 0 256L80 336 80 80zM64 80l0 256c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L80 64c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Display;