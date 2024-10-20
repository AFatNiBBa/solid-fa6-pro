
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=thin stop}
 * @preview ![stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stop.svg)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 80c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l256 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64z" />
    </Icon>
);

export default Stop;