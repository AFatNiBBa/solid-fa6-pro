
import { Icon } from "../../index";

/**
 * A component that renders the `b` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=regular b}
 * @preview ![b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/b.svg)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M56 32C25.1 32 0 57.1 0 88L0 256 0 424c0 30.9 25.1 56 56 56l140 0c68.5 0 124-55.5 124-124c0-48.9-28.3-91.1-69.3-111.3c23-22.5 37.3-53.9 37.3-88.7c0-68.5-55.5-124-124-124L56 32zM164 232L48 232 48 88c0-4.4 3.6-8 8-8l108 0c42 0 76 34 76 76s-34 76-76 76zM48 280l116 0 28 0 4 0c42 0 76 34 76 76s-34 76-76 76L56 432c-4.4 0-8-3.6-8-8l0-144z" />
    </Icon>
);

export default B;