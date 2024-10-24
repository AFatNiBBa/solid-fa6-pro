
import { Icon } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=sharp-thin hand-fist}
 * @preview ![hand-fist](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hand-fist.svg)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 16l0 16 0 16 0 152 64 0 0-152 0-16 0-16-64 0zM160 200l0-152L96 48l0 152 64 0zm-80 0L80 48l0-16 16 0 64 0 0-16 0-16 16 0 64 0 16 0 0 16 0 16 64 0 16 0 0 16 0 16 64 0 16 0 0 16 0 112 0 8 0 24 0 16 0 24c0 48.7-25.6 91.4-64 115.4L352 504l0 8-16 0 0-8 0-129.1 0-4.6 4-2.3c35.9-20.8 60-59.5 60-104l0-24-64 0-16 0 0-16-64 0-8 0 0 64 0 8-8 0-104 0-8 0 0-16 8 0 96 0 0-64-40 0L48 216l0 56 0 8c0 52.4 38.7 95.7 89.1 102.9l6.9 1 0 6.9L144 504l0 8-16 0 0-8 0-106.4C75.8 387 35.8 342.5 32.3 288l-.3 0 0-8 0-8 0-64 0-8 8 0 40 0zm320 24l0-24 0-8 0-112-64 0 0 128 0 16 64 0zM256 200l0 8 64 0 0-128 0-16 0-16-64 0 0 152z" />
    </Icon>
);

export default HandFist;