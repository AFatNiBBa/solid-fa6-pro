
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=light microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-16 0L80 416l-16 0c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM480 448l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 384 0zM464 128l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16s-16 7.2-16 16zM128 320l0-160 256 0 0 160-256 0zM96 152l0 176c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24l0-176c0-13.3-10.7-24-24-24l-272 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Microwave;