
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=regular left}
 * @preview ![left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/left.svg)
 */
const Left: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M50.4 256L200.3 113.3c.8-.8 2-1.3 3.2-1.3c2.5 0 4.6 2 4.6 4.6l0 83.4c0 13.3 10.7 24 24 24l168 0 0 64-168 0c-13.3 0-24 10.7-24 24l0 83.4c0 2.5-2 4.6-4.6 4.6c-1.2 0-2.3-.5-3.2-1.3L50.4 256zm153-192c-13.5 0-26.5 5.2-36.3 14.5L13.2 225.1C4.8 233.2 0 244.3 0 256s4.8 22.8 13.2 30.9L167.2 433.5c9.8 9.3 22.8 14.5 36.3 14.5c29 0 52.6-23.5 52.6-52.6l0-59.4 144 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-144 0 0-59.4c0-29-23.5-52.6-52.6-52.6z" />
    </Icon>
);

export default Left;