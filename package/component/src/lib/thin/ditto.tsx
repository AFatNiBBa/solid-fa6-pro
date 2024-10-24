
import { Icon } from "../../index";

/**
 * A component that renders the `ditto` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=thin ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 103.9c0 4.2 .5 8.3 1.4 12.4L50.3 261.1C51.7 267.5 57.4 272 64 272s12.3-4.5 13.7-10.9l32.9-144.7c.9-4.1 1.4-8.2 1.4-12.4l0-7.9c0-26.5-21.5-48-48-48S16 69.5 16 96l0 7.9zm-16 0L0 96C0 60.7 28.7 32 64 32s64 28.7 64 64l0 7.9c0 5.4-.6 10.7-1.8 15.9L93.3 264.6C90.2 278.3 78 288 64 288s-26.2-9.7-29.3-23.4L1.8 119.9C.6 114.6 0 109.3 0 103.9zm208 0c0 4.2 .5 8.3 1.4 12.4l32.9 144.7c1.5 6.4 7.1 10.9 13.7 10.9s12.3-4.5 13.7-10.9l32.9-144.7c.9-4.1 1.4-8.2 1.4-12.4l0-7.9c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 7.9zm-16 0l0-7.9c0-35.3 28.7-64 64-64s64 28.7 64 64l0 7.9c0 5.4-.6 10.7-1.8 15.9L285.3 264.6C282.2 278.3 270 288 256 288s-26.2-9.7-29.3-23.4L193.8 119.9c-1.2-5.2-1.8-10.6-1.8-15.9z" />
    </Icon>
);

export default Ditto;