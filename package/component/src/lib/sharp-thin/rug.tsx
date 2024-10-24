
import { Icon } from "../../index";

/**
 * A component that renders the `rug` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rug?s=sharp-thin rug}
 * @preview ![rug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rug.svg)
 */
const Rug: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64l8 0 24 0 8 0 8 0 544 0 8 0 8 0 24 0 8 0 0 16-8 0-24 0 0 80 24 0 8 0 0 16-8 0-24 0 0 72 24 0 8 0 0 16-8 0-24 0 0 72 24 0 8 0 0 16-8 0-24 0 0 80 24 0 8 0 0 16-8 0-24 0-8 0-8 0L48 448l-8 0-8 0L8 448l-8 0 0-16 8 0 24 0 0-80L8 352l-8 0 0-16 8 0 24 0 0-72L8 264l-8 0 0-16 8 0 24 0 0-72L8 176l-8 0 0-16 8 0 24 0 0-80L8 80 0 80 0 64zm48 96l0 16 0 72 0 16 0 72 0 16 0 80 80 0 0-352L48 80l0 80zm96 272l352 0 0-352L144 80l0 352zM512 80l0 352 80 0 0-80 0-16 0-72 0-16 0-72 0-16 0-80-80 0z" />
    </Icon>
);

export default Rug;