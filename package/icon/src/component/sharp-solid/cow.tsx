
import { Icon } from "../../index";

/**
 * A component that renders the `cow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cow?s=sharp-solid cow}
 * @preview ![cow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cow.svg)
 */
const Cow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 64L272 64l-16 0L144 64C77.7 64 24 117.7 24 184l0 54C9.4 249.8 0 267.8 0 288l0 32 8 0c35.3 0 64-28.7 64-64l0-32 0-40c0-21.3 9.3-40.5 24-53.7L96 192l0 64 0 192 96 0 0-120.2c9.9 6.6 20.6 12 32 16.1l0 24.2 0 16 32 0 0-16 0-16.9c5.3 .6 10.6 .9 16 .9s10.7-.3 16-.9l0 16.9 0 16 32 0 0-16 0-24.2c11.4-4 22.1-9.4 32-16.1L352 448l96 0 0-192 32 32 0 64 64 96 64 0 32-160-16-22.4 0-81.6 0-24-48 0 0 24 0 14.4L480 64zm80 272a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM160 128l224 0 0 32-30.1 30.1C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9L160 160l0-32z" />
    </Icon>
);

export default Cow;