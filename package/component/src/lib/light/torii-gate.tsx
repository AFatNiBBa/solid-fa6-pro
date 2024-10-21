
import { Icon } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=light torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 112c0 17.7 14.3 32 32 32l176 0 32 0 176 0c17.7 0 32-14.3 32-32l0-71.1-23.5 9.4C433.8 59.3 409.6 64 385.2 64L126.8 64c-24.4 0-48.6-4.7-71.3-13.7L32 40.9 32 112zm208 64L96 176l0 80 144 0 0-80zM64 176c-35.3 0-64-28.7-64-64L0 13.4C0 6 6 0 13.4 0c1.7 0 3.4 .3 5 1l49 19.6C86.3 28.1 106.5 32 126.8 32l258.4 0c20.4 0 40.5-3.9 59.4-11.4L493.6 1c1.6-.6 3.3-1 5-1C506 0 512 6 512 13.4l0 98.6c0 35.3-28.7 64-64 64l0 80 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208-160 0L96 288l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-80zm352 0l-144 0 0 80 144 0 0-80z" />
    </Icon>
);

export default ToriiGate;