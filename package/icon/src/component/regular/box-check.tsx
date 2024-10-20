
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=regular box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 80l94.4 0c6.3 0 12.1 3.7 14.6 9.5L388.4 160 248 160l0-80zM48 208l352 0 0 208c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-208zm152-48L59.6 160 91 89.5c2.6-5.8 8.3-9.5 14.6-9.5L200 80l0 80zM400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70zM337 265c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L337 265z" />
    </Icon>
);

export default BoxCheck;