
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=thin microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l448 0zM64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l0 24c0 4.4 3.6 8 8 8s8-3.6 8-8l0-24 416 0 0 24c0 4.4 3.6 8 8 8s8-3.6 8-8l0-24c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 32zm432 72l0 272c0 4.4 3.6 8 8 8s8-3.6 8-8l0-272c0-4.4-3.6-8-8-8s-8 3.6-8 8zM104 128l304 0c4.4 0 8 3.6 8 8l0 208c0 4.4-3.6 8-8 8l-304 0c-4.4 0-8-3.6-8-8l0-208c0-4.4 3.6-8 8-8zm-24 8l0 208c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24l0-208c0-13.3-10.7-24-24-24l-304 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Microwave;