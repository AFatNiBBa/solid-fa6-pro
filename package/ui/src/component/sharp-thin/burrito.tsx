
import { Icon } from "../../index";

/**
 * A component that renders the `burrito` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burrito?s=sharp-thin burrito}
 * @preview ![burrito](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/burrito.svg)
 */
const Burrito: typeof Icon = x => (
    <Icon {...x}>
        <path d="M263 41L0 304l0 96L112 512l96 0L471 249c24.2-11.6 41-36.3 41-65c0-11.5-2.7-22.4-7.5-32c4.8-9.6 7.5-20.5 7.5-32c0-32.5-21.5-60-51.1-68.9C452 21.5 424.5 0 392 0c-11.5 0-22.4 2.7-32 7.5C350.4 2.7 339.5 0 328 0c-28.7 0-53.4 16.8-65 41zm14.5 6.7C286.6 28.9 305.8 16 328 16c10.2 0 19.8 2.7 28 7.5l4 2.3 4-2.3c8.2-4.8 17.8-7.5 28-7.5c26.6 0 48.9 18.5 54.6 43.4l1.1 4.9 4.9 1.1c24.9 5.7 43.4 28 43.4 54.6c0 10.2-2.7 19.8-7.5 28l-2.3 4 2.3 4c4.8 8.2 7.5 17.8 7.5 28c0 22.2-12.9 41.4-31.7 50.5C432.3 212.7 393.6 200 352 200c-15.5 0-30.6 1.8-45.1 5.1c3.3-14.5 5.1-29.6 5.1-45.1c0-41.6-12.7-80.3-34.5-112.3zM16 393.4l0-57.9C44.5 351.1 77.2 360 112 360c88.5 0 163.5-57.5 189.9-137.1c15.9-4.5 32.7-6.9 50.1-6.9c36.8 0 71.1 10.8 99.9 29.5L201.4 496l-82.7 0L16 393.4zm0-82.7L266.5 60.1C285.2 88.9 296 123.2 296 160c0 18.8-2.8 37-8.1 54.1C264.8 289.3 194.8 344 112 344c-35.2 0-68.1-9.9-96-27l0-6.4z" />
    </Icon>
);

export default Burrito;