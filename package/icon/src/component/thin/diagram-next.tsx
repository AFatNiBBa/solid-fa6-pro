
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=thin diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 160c0 26.5-21.5 48-48 48L64 208c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 64zm-48 64c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l184 0 0 124.7-50.3-50.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0l64-64c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 348.7 264 224l184 0zm64 192l0-64c0-35.3-28.7-64-64-64l-48 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l48 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l48 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-48 0c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64z" />
    </Icon>
);

export default DiagramNext;