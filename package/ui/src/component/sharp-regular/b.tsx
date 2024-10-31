
import { Icon } from "../../index";

/**
 * A component that renders the `b` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=sharp-regular b}
 * @preview ![b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/b.svg)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32L0 32 0 56 0 232l0 24 0 24L0 456l0 24 24 0 172 0c68.5 0 124-55.5 124-124c0-48.2-27.5-90-67.8-110.5c22.1-21.8 35.8-52 35.8-85.5l0-8c0-66.3-53.7-120-120-120L24 32zM168 232L48 232 48 80l120 0c39.8 0 72 32.2 72 72l0 8c0 39.8-32.2 72-72 72zM48 280l120 0 24 0 4 0c42 0 76 34 76 76s-34 76-76 76L48 432l0-152z" />
    </Icon>
);

export default B;