
import { Icon } from "../../index";

/**
 * A component that renders the `donut` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/donut?s=sharp-regular donut}
 * @preview ![donut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/donut.svg)
 */
const Donut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 294.1l7.2 3.6 2.3 1.2 1.8 1.8 44 44 74.3 7.4 1.5 .2 1.5 .4L256 375.3l75.4-22.6 1.5-.4 1.5-.2 74.3-7.4 44-44 1.8-1.8 2.3-1.2 7.2-3.6 0 9.9c0 21.7-14.2 48.5-52.4 72.4C374 399.9 319.1 416 256 416s-118-16.1-155.6-39.6C62.2 352.5 48 325.7 48 304l0-9.9zM256 48C114.6 48 0 119.6 0 208l0 96c0 88.4 114.6 160 256 160s256-71.6 256-160l0-96c0-88.4-114.6-160-256-160zm38.6 48l-11.3 11.3-16 16L256 134.6 233.4 112l11.3-11.3 16-16L272 73.4 294.6 96zm-112 16l-11.3 11.3-32 32L128 166.6 105.4 144l11.3-11.3 32-32L160 89.4 182.6 112zM384 121.4l11.3 11.3 32 32L438.6 176 416 198.6l-11.3-11.3-32-32L361.4 144 384 121.4zM48 192l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zm336 25.4l11.3 11.3 32 32L438.6 272 416 294.6l-11.3-11.3-32-32L361.4 240 384 217.4zm-240 16l11.3 11.3 32 32L198.6 288 176 310.6l-11.3-11.3-32-32L121.4 256 144 233.4zM342.6 272l-11.3 11.3-32 32L288 326.6 265.4 304l11.3-11.3 32-32L320 249.4 342.6 272zM256 224c-35.3 0-64-14.3-64-32s28.7-32 64-32s64 14.3 64 32s-28.7 32-64 32z" />
    </Icon>
);

export default Donut;