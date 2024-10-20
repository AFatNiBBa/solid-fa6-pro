
import { Icon } from "../../index";

/**
 * A component that renders the `tricycle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle?s=solid tricycle}
 * @preview ![tricycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/tricycle.svg)
 */
const Tricycle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l73.6 0c7.9 0 14.4 6.4 14.4 14.4c0 4.2-1.8 8.2-5 10.9l-42.6 36.5c-.8 .7-1.6 1.4-2.3 2.2l-10.9 0c-58.8 0-114 23.9-154.1 64.6L133.6 176l2.4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l21.6 0 44 73.4c-1.3 2.2-2.6 4.5-3.9 6.7c-1.9-.1-3.9-.1-5.8-.1C50.1 256 0 306.1 0 368s50.1 112 112 112s112-50.1 112-112c0-42.4-23.6-79.4-58.4-98.4c30.7-48.1 84-77.6 141.6-77.6l12.1 0 11 43.8C286.4 256.1 256 300.5 256 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-2.4 0-4.8 .1-7.2 .2l-13.9-55.6 31.3-26.9C408 129.9 416 112.6 416 94.4C416 59.9 388.1 32 353.6 32L280 32zm64.2 260l16.5 65.9c3.2 12.9 16.2 20.7 29.1 17.5s20.7-16.2 17.5-29.1l-16.5-65.9c36.6 3.4 65.2 34.2 65.2 71.7c0 39.8-32.2 72-72 72s-72-32.2-72-72c0-25.1 12.8-47.1 32.2-60zM112 312a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </Icon>
);

export default Tricycle;