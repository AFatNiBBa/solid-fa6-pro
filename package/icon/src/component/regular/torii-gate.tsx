
import { Icon } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=regular torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-47.5-1.6 .6C437.9 75 411.6 80 385.2 80L126.8 80c-26.5 0-52.7-5-77.2-14.9L48 64.5 48 112zM0 112L0 13.4C0 6 6 0 13.4 0c1.7 0 3.4 .3 5 1l49 19.6C86.3 28.1 106.5 32 126.8 32l258.4 0c20.4 0 40.5-3.9 59.4-11.4L493.6 1c1.6-.6 3.3-1 5-1C506 0 512 6 512 13.4l0 98.6c0 35.3-28.7 64-64 64l0 64 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 200c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-200-144 0-144 0 0 200c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-200-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0-64c-35.3 0-64-28.7-64-64zM112 240l120 0 0-64-120 0 0 64zm168-64l0 64 120 0 0-64-120 0z" />
    </Icon>
);

export default ToriiGate;