
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=thin diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 352c0-26.5-21.5-48-48-48L64 304c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-64zm-48-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l184 0 0-124.7-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l64-64c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L264 163.3 264 288l184 0zM512 96l0 64c0 35.3-28.7 64-64 64l-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l48 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L64 48C37.5 48 16 69.5 16 96l0 64c0 26.5 21.5 48 48 48l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64z" />
    </Icon>
);

export default DiagramPrevious;