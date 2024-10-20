
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=sharp-regular vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M243.4 48L528 48c35.3 0 64 28.7 64 64c0 30.7-21.7 56.5-50.6 62.6C507.8 145.6 463.9 128 416 128l-16 0-48 0 0 48 0 116c10.2-2.6 21-4 32-4c5.4 0 10.8 .3 16 1l0-113 16 0c79.5 0 144 64.5 144 144l0 144-57.3 0c-7.5 18.6-19.3 35-34 48l91.3 0 48 0 0-48 0-144c0-39.5-11.9-76.1-32.3-106.6c38-17.9 64.3-56.6 64.3-101.4C640 50.1 589.9 0 528 0L224 0 204.6 0l-4 19L156.9 224l49.1 0L243.4 48zM199.2 256l-49.1 0L122.9 384 64 384 0 448l0 16 0 48 48 0 128 0 48 0 0-48 0-32 0-48-48 0-4.1 0 27.2-128zM384 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM51.9 464l32-32 92.1 0 0 32L51.9 464zM400 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Vacuum;