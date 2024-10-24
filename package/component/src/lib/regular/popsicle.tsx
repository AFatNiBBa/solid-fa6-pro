
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=regular popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 160c0-61.9-50.1-112-112-112S48 98.1 48 160l0 176 88 0 0-152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 152 88 0 0-176zM136 384l-88 0c-26.5 0-48-21.5-48-48L0 160C0 71.6 71.6 0 160 0s160 71.6 160 160l0 176c0 26.5-21.5 48-48 48l-88 0 0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104z" />
    </Icon>
);

export default Popsicle;