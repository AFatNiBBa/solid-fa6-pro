
import { Icon } from "../../index";

/**
 * A component that renders the `hand-pointer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-pointer?s=sharp-solid hand-pointer}
 * @preview ![hand-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-pointer.svg)
 */
const HandPointer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l80 0 0 176 80 0 0 32 80 0 0 32 80 0 0 80 0 48 0 16c0 70.7-57.3 128-128 128l-16 0-64 0-.1 0-5.2 0c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L24.1 357.4l-24-32 64-48 24 32L128 362.7 128 0zM240 304l0-16-32 0 0 16 0 96 0 16 32 0 0-16 0-96zm64-16l-32 0 0 16 0 96 0 16 32 0 0-16 0-96 0-16zm64 16l0-16-32 0 0 16 0 96 0 16 32 0 0-16 0-96z" />
    </Icon>
);

export default HandPointer;