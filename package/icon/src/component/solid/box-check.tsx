
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=solid box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M93.7 32L208 32l0 128L0 160 50.7 58.5C58.9 42.3 75.5 32 93.7 32zM240 32l114.3 0c18.2 0 34.8 10.3 42.9 26.5L448 160l-208 0 0-128zM0 192l448 0 0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192zm337 89c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L337 281z" />
    </Icon>
);

export default BoxCheck;