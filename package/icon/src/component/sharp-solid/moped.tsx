
import { Icon } from "../../index";

/**
 * A component that renders the `moped` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moped?s=sharp-solid moped}
 * @preview ![moped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/moped.svg)
 */
const Moped: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 32l24 0 64 0 17.1 0 5.6 16.1 15.6 44.8L512 64l32 0 0 96-32 0-41.7-20.8L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8l-33.6 34.2C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4l-32 0-16 0-96 0c0 53-43 96-96 96s-96-43-96-96L0 384l0-64c0-70.7 57.3-128 128-128l128 0 0 128 109.3 0c16.8-38.5 48.4-69.2 87.6-84.7L398.9 80 352 80l-24 0 0-48zM256 96l0 64L96 160l0-64 160 0zM160 432c26.5 0 48-21.5 48-48l-96 0c0 26.5 21.5 48 48 48zm352 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Moped;