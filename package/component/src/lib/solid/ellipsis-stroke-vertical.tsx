
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=solid ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ellipsis-stroke-vertical.svg)
 */
const EllipsisStrokeVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 96A72 72 0 1 1 96 24a72 72 0 1 1 0 144zm24 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96 0a72 72 0 1 1 144 0A72 72 0 1 1 24 256zm96 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96 0a72 72 0 1 1 144 0A72 72 0 1 1 24 416z" />
    </Icon>
);

export default EllipsisStrokeVertical;