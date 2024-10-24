
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=regular watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M112 0C85.5 0 64 21.5 64 48l0 64 1 0C25.1 147.2 0 198.7 0 256s25.1 108.8 65 144l-1 0 0 64c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-64-1 0c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144l1 0 0-64c0-26.5-21.5-48-48-48L112 0zM48 256a144 144 0 1 1 288 0A144 144 0 1 1 48 256zm168-80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 8 4 15.5 10.7 20l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L216 243.2l0-67.2z" />
    </Icon>
);

export default Watch;