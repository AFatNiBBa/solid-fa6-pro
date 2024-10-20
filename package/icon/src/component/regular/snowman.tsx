
import { Icon } from "../../index";

/**
 * A component that renders the `snowman` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman?s=regular snowman}
 * @preview ![snowman](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/snowman.svg)
 */
const Snowman: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0C189.7 0 136 53.7 136 120c0 19 4.4 37 12.3 53c-7.2 9.3-13.2 19.6-17.8 30.6L104 192.2l0-40.2c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 19.6-22.5-9.7c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l56 24 49.5 21.2c-.1 1.6-.1 3.1-.1 4.7c0 12.5 1.7 24.7 4.9 36.3C106.7 318.2 96 349.9 96 384c0 39.2 14.1 75.1 37.5 102.9c15.6 18.6 38.4 25.1 58.3 25.1l128.5 0c19.8 0 42.7-6.5 58.3-25.1C401.9 459.1 416 423.2 416 384c0-34.1-10.7-65.8-28.9-91.7c3.2-11.6 4.9-23.7 4.9-36.3c0-1.6 0-3.1-.1-4.7l49.5-21.2 56-24c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L456 171.6l0-19.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40.2-26.5 11.4c-4.6-11-10.6-21.3-17.8-30.6c7.9-16 12.3-34 12.3-53C376 53.7 322.3 0 256 0zM184 120c0-39.8 32.2-72 72-72s72 32.2 72 72c0 15.6-5 30-13.4 41.8c-6.9 9.6-5.7 22.9 2.8 31.1c16.4 16 26.6 38.3 26.6 63c0 11.3-2.1 22.1-6 32c-3.2 8.2-1.7 17.4 3.9 24.1C358.2 331.6 368 356.6 368 384c0 27.5-9.8 52.5-26.2 72c-3.8 4.6-11.1 8-21.5 8l-128.5 0c-10.4 0-17.7-3.4-21.5-8c-16.4-19.5-26.2-44.6-26.2-72c0-27.4 9.8-52.4 26.1-71.8c5.6-6.7 7.1-16 3.9-24.1c-3.9-9.9-6-20.7-6-32c0-24.7 10.2-47 26.6-63c8.5-8.3 9.7-21.5 2.8-31.1C189 150 184 135.6 184 120zm56-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-48 24l0 3.2c0 3.2 .8 6.3 2.3 9l9 16.9c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l9-16.9c1.5-2.8 2.3-5.9 2.3-9l0-3.2c0-8.8-7.2-16-16-16s-16 7.2-16 16zm16 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Snowman;