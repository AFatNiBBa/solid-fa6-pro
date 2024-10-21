
import { Icon } from "../../index";

/**
 * A component that renders the `kite` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kite?s=sharp-solid kite}
 * @preview ![kite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/kite.svg)
 */
const Kite: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 0L318.6 0l-5.8 24.8-80 344-1.4 5.8L142.1 464 120 464l0-107.3-24-10-24 10L72 488l0 24 24 0 56 0 9.9 0 7-7 96.4-96.4 5.8-1.4 344-80 24.8-5.8 0-25.4 0-264 0-32L608 0 344 0zM24 128L0 128l0 48 24 0 48 0 0 110L0 256l0 96 72-30 24-10 24 10 72 30 0-96-72 30 0-134 0-24-24 0-72 0zM427.3 84.7L480 137.4l52.7-52.7L544 73.4 566.6 96l-11.3 11.3L502.6 160l52.7 52.7L566.6 224 544 246.6l-11.3-11.3L480 182.6 363.3 299.3 352 310.6 329.4 288l11.3-11.3L457.4 160l-52.7-52.7L393.4 96 416 73.4l11.3 11.3z" />
    </Icon>
);

export default Kite;