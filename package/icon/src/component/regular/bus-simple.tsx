
import { Icon } from "../../index";

/**
 * A component that renders the `bus-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus-simple?s=regular bus-simple}
 * @preview ![bus-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bus-simple.svg)
 */
const BusSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M51.5 96l345.7 0C381.4 78.9 335.2 48 224 48C121.8 48 69.8 78.3 51.5 96zM400 144L48 144l0 80 352 0 0-80zm0 128L48 272l0 104c0 13.3 10.7 24 24 24l228.2 0 75.8 0c13.3 0 24-10.7 24-24l0-104zM10.2 70C35.9 38.7 103.8 0 224 0C352.6 0 414 38.6 438.4 70.6c7.5 9.8 9.6 20.9 9.6 29.9L448 376c0 25-12.7 47-32 59.9l0 52.1c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-67.8 0L80 448l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-52.1C12.7 423 0 401 0 376L0 100.4C0 91.6 2 80 10.2 70zM112 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default BusSimple;