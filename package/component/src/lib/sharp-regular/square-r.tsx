
import { Icon } from "../../index";

/**
 * A component that renders the `square-r` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=sharp-regular square-r}
 * @preview ![square-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-r.svg)
 */
const SquareR: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm128 96l24 0 104 0c44.2 0 80 35.8 80 80l0 24-3.7 0c-8.4 26.7-30.4 47.4-57.9 53.9L337.1 384l-57 0-61.3-96L176 288l0 72 0 24-48 0 0-24 0-96 0-112 0-24zm48 112l56 0 24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0 64z" />
    </Icon>
);

export default SquareR;