
import { Icon } from "../../index";

/**
 * A component that renders the `hose-reel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose-reel?s=regular hose-reel}
 * @preview ![hose-reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hose-reel.svg)
 */
const HoseReel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 48c-114.9 0-208 93.1-208 208s93.1 208 208 208c45.6 0 87.7-14.6 122-39.5c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5C428 494 376.1 512 320 512C178.6 512 64 397.4 64 256S178.6 0 320 0S576 114.6 576 256l0 96 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-2.3 0-11.5 80.2c7.8 1.1 13.7 7.8 13.7 15.8c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16c0-8.1 6-14.7 13.7-15.8L514.3 400l-2.3 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-96c0-114.9-93.1-208-208-208zM208 256a112 112 0 1 0 224 0 112 112 0 1 0 -224 0zM320 416a160 160 0 1 1 0-320 160 160 0 1 1 0 320zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default HoseReel;