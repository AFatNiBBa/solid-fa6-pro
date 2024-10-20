
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-brush` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-brush?s=sharp-thin hammer-brush}
 * @preview ![hammer-brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hammer-brush.svg)
 */
const HammerBrush: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 120C0 53.7 53.7 0 120 0L248 0l8 0 0 8 0 24 32 0 0-24 0-8 8 0 48 0 8 0 0 8 0 176 0 8-8 0-48 0-8 0 0-8 0-24-32 0 0 16 0 8-8 0-31.6 0 7.3 312 .4 16-16 0-96 0-16 0 .4-16 7.3-312L88 184l-4.9 0-2.2-4.4L68.1 154 10.8 175.5 0 179.5 0 168l0-48zm119.6 64l-7.3 312 95.2 0-7.3-312-80.7 0zM240 168l0-16 0-8 8 0 48 0 8 0 0 8 0 24 32 0 0-160-32 0 0 24 0 8-8 0-48 0-8 0 0-8 0-24L120 16C62.6 16 16 62.6 16 120l0 36.5 53.2-19.9 6.7-2.5 3.2 6.4L92.9 168l11.1 0 112 0 24 0zM640 288l0 208 0 16-16 0-256 0-16 0 0-16 0-208 88-88 0-184 0-16 16 0 80 0 16 0 0 16 0 184 88 88zM536 200l0-184-80 0 0 184 0 6.6-4.7 4.7L374.6 288l242.7 0-76.7-76.7-4.7-4.7 0-6.6zM368 352l256 0 0-48-256 0 0 48zm0 16l0 128 80 0 0-80 0-8 16 0 0 8 0 80 160 0 0-128-256 0zM496 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default HammerBrush;