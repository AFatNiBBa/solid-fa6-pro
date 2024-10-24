
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=light ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ellipsis-stroke-vertical.svg)
 */
const EllipsisStrokeVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 96A64 64 0 1 1 96 32a64 64 0 1 1 0 128zm32 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 32 256zm96 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 32 416z" />
    </Icon>
);

export default EllipsisStrokeVertical;