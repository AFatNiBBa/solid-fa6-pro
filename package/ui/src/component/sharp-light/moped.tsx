
import { Icon } from "../../index";

/**
 * A component that renders the `moped` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moped?s=sharp-light moped}
 * @preview ![moped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/moped.svg)
 */
const Moped: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 32l16 0 64 0 11.5 0 3.6 10.9 12.5 37.4 61.2-30.6 3.4-1.7 3.8 0 16 0 16 0 0 16 0 96 0 16-16 0-16 0-3.8 0-3.4-1.7L469 156.4 494.5 233c5.7-.7 11.6-1 17.5-1c41.5 0 79.1 16.6 106.5 43.5l-22.4 22.8C574.4 277.1 544.7 264 512 264c-56.5 0-104 39.1-116.7 91.8c-2.2 9-3.3 18.5-3.3 28.2l-24 0-8 0-104 0c0 53-43 96-96 96s-96-43-96-96l-32 0L0 384l0-32 0-32c0-70.7 57.3-128 128-128l96 0 32 0 0 32 0 96 0 32 32 0 64 0 11.4 0c.3-1.3 .6-2.5 .9-3.8c12.2-50.8 50-91.6 98.9-108.2L404.5 64 352 64l-16 0 0-32zm118.9 82.2l.2-.5L512 142.1l0-60.2-56.8 28.4-1.3 .7 1.1 3.2zM256 128l0 32L96 160l0-32 160 0zM224 352l0-128-96 0c-53 0-96 43-96 96l0 32 37.5 0 35.1 0 110.9 0 8.6 0zm-64 96c35.3 0 64-28.7 64-64L96 384c0 35.3 28.7 64 64 64zm352 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Moped;