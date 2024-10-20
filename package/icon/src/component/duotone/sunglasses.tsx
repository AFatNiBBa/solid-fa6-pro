
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sunglasses` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunglasses?s=duotone sunglasses}
 * @preview ![sunglasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sunglasses.svg)
 */
const Sunglasses: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48.5 375.8C52.3 407.5 79.3 432 112 432l44.3 0c34 0 62-26.5 63.9-60.4c1.1-19.2 2.1-38.4 3.2-57.5c-9.8-4.2-20.1-7.7-30.5-10.4L48.5 375.8zM356 374c3.1 32.7 30.6 58 63.7 58l44.3 0c35.3 0 64-28.7 64-64l0-53.8c-9.9-4.3-20.3-7.9-31-10.7L356 374z" />
        <path d="M118.6 80c-11.5 0-21.4 7.9-24 19.1L57.1 259.8c25.6-7.8 52.6-11.8 78.6-11.8c40.1 0 82.2 9.6 118.5 27.3c5.8 2.9 10.4 7.3 13.5 12.7l40.6 0c3.1-5.4 7.7-9.8 13.5-12.7c36.2-17.8 78.4-27.3 118.5-27.3c26 0 53 4.1 78.6 11.8L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.2c.3 1.8 .5 3.7 .5 5.6l0 5.2c0 .5 0 1 0 1.5l0 41.3c0 .2 0 .4 0 .6l0 15.4c0 61.9-50.1 112-112 112l-44.3 0c-59.4 0-108.5-46.4-111.8-105.8L306.6 352l-37.2 0-1.2 22.2C264.9 433.6 215.8 480 156.3 480L112 480C50.1 480 0 429.9 0 368l0-16 0-41.3L0 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM48 352l0 16c0 35.3 28.7 64 64 64l44.3 0c34 0 62-26.5 63.9-60.5l3.2-57.5c-27.3-11.7-58.3-18-87.7-18c-29.5 0-60.5 6.4-87.7 18.2L48 352zm392.3-56c-29.4 0-60.4 6.3-87.7 18l3.2 57.5c1.9 33.9 29.9 60.5 63.9 60.5l44.3 0c35.3 0 64-28.7 64-64l0-53.8c-27.2-11.8-58.2-18.2-87.7-18.2z" />
    </Icon>
);

export default Sunglasses;