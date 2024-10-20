
import { Icon } from "../../index";

/**
 * A component that renders the `alicorn` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alicorn?s=solid alicorn}
 * @preview ![alicorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/alicorn.svg)
 */
const Alicorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 160l0 78.1 0 1.9s0 0 0 0c-.5 30-12.8 56.4-32 75.7L416 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-133.3c-4.1-.7-8.2-1.6-12.3-2.8l-84-24c.2 2.3 .3 4.6 .3 6.9c0 18.6-7.4 36.5-20.6 49.7l-12.7 12.7c-4.8 4.8-6.4 11.8-4.3 18.2l20.8 62.5c6.9 20.7-8.5 42.1-30.4 42.1l-33.7 0c-13.8 0-26-8.8-30.4-21.9L95.3 437.7c-10.6-31.7-6.5-65.9 10-93.9c7.6-12.9 9.5-29.1 1.2-41.6L78.2 259.9c-7.3-11-11.9-23.4-13.6-36.4C54.6 230.8 48 242.6 48 256l0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56c0-44.6 33.2-81.5 76.3-87.2c13-21.4 35.2-36.5 61.1-40c3.8 15.3 9.2 29.8 16.5 43c11.3 20.4 27.4 37.7 49.9 49.8c6.3 3.4 13.1 6.4 20.3 8.8c-16.5-11.4-28.9-26-38.2-42.7C163.8 147.9 160 96.1 160 48c0-5.9 3.2-11.3 8.5-14.1s11.5-2.5 16.4 .8L320 124.8C321.7 55.6 378.4 0 448 0l16 0 16 0 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-5.7 0c5.2 4.6 9.6 10 13.1 16l79.3 0c5.1 0 9.3 4.2 9.3 9.3c0 4-2.6 7.6-6.4 8.8L560 90.7l0 64.8c0 22.1-13.4 41.9-33.9 50.1c-26.1 10.4-55.7-.9-68.3-26L448 160zm64-80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Alicorn;