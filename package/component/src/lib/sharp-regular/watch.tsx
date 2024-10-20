
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=sharp-regular watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 0L64 0l0 112 1 0C25.1 147.2 0 198.7 0 256s25.1 108.8 65 144l-1 0 0 112 256 0 0-112-1 0c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144l1 0L320 0zM48 256a144 144 0 1 1 288 0A144 144 0 1 1 48 256zm168-80l0-24-48 0 0 24 0 80 0 12.8 10.7 7.1 48 32 20 13.3 26.6-39.9-20-13.3L216 243.2l0-67.2z" />
    </Icon>
);

export default Watch;