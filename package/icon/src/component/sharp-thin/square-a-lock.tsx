
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=sharp-thin square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 48l416 0 0 116.6c5.2-1.5 10.5-2.7 16-3.5L448 48l0-16-16 0L16 32 0 32 0 48 0 464l0 16 16 0 304 0 0-16L16 464 16 48zm215.2 84.6l-2.2-4.6-10.1 0-2.2 4.6L97.8 384l17.7 0 30.3-64 156.5 0L320 357.5l0-37.4L231.2 132.6zM294.7 304l-141.3 0L224 154.7 294.7 304zM464 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default SquareALock;