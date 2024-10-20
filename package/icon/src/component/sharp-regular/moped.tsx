
import { Icon } from "../../index";

/**
 * A component that renders the `moped` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moped?s=sharp-regular moped}
 * @preview ![moped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/moped.svg)
 */
const Moped: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 32l24 0 64 0 17.1 0 5.6 16.1 15.6 44.8L512 64l32 0 0 96-32 0-41.7-20.8L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8l-33.6 34.2C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4l-32 0-16 0-96 0c0 53-43 96-96 96s-96-43-96-96l-16 0L0 384l0-48 0-16c0-70.7 57.3-128 128-128l80 0 48 0 0 48 0 48 0 48 48 0 32 0 23.3 0c14.5-46 49.1-83.1 93.6-100.7L398.9 80 352 80l-24 0 0-48zm-72 80l0 48L96 160l0-48 160 0zM208 336l0-96-80 0c-44.2 0-80 35.8-80 80l0 16 160 0zm-48 96c26.5 0 48-21.5 48-48l-96 0c0 26.5 21.5 48 48 48zm352 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Moped;