
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cow?s=sharp-duotone-solid cow}
 * @preview ![cow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cow.svg)
 */
const Cow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288c0-20.2 9.4-38.2 24-50c11-8.8 24.9-14 40-14l8 0 0 32c0 35.3-28.7 64-64 64l-8 0 0-32zm192-16l160 0 0 16 0 39.8c-9.9 6.6-20.6 12-32 16.1l0 24.2 0 16-32 0 0-16 0-16.9c-5.3 .6-10.6 .9-16 .9s-10.7-.3-16-.9l0 16.9 0 16-32 0 0-16 0-24.2c-11.4-4-22.1-9.4-32-16.1l0-39.8 0-16z" />
        <path d="M72 184c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160l0 32 0 64 0 192 96 0 0-32 0-128 0-16 160 0 0 16 0 128 0 32 96 0 0-192 32 32 0 64 64 96 64 0 32-160-16-22.4 0-81.6 0-24-48 0 0 24 0 14.4L480 64 256 64l-64 0-48 0C77.7 64 24 117.7 24 184l0 54c11-8.8 24.9-14 40-14l8 0 0-40zM576 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM160 160l0-32 224 0 0 32-30.1 30.1C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9L160 160z" />
    </Icon>
);

export default Cow;