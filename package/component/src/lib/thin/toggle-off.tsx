
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=thin toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 112c79.5 0 144 64.5 144 144s-64.5 144-144 144l-256 0C80.5 400 16 335.5 16 256s64.5-144 144-144l256 0zM576 256c0-88.4-71.6-160-160-160L160 96C71.6 96 0 167.6 0 256s71.6 160 160 160l256 0c88.4 0 160-71.6 160-160zm-336 0A80 80 0 1 1 80 256a80 80 0 1 1 160 0zM64 256a96 96 0 1 0 192 0A96 96 0 1 0 64 256z" />
    </Icon>
);

export default ToggleOff;