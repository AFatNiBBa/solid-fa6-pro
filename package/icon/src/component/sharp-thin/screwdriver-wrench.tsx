
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver-wrench` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=sharp-thin screwdriver-wrench}
 * @preview ![screwdriver-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/screwdriver-wrench.svg)
 */
const ScrewdriverWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M11.3 396.7L0 408l11.3 11.3 81.4 81.4L104 512l11.3-11.3L231.7 384.3 220.4 373 104 489.4 22.6 408 181.4 249.3l-11.3-11.3L11.3 396.7zM496 160c0 49.8-25.3 93.8-63.8 119.6l11.5 11.5C485 262.2 512 214.3 512 160c0-21.7-4.3-42.4-12.1-61.2c-2.2-5.2-4.6-10.4-7.3-15.3L480.7 95.3 400 176l-48 0-16 0 0-16 0-48 80.7-80.7 11.8-11.8c-5-2.7-10.1-5.1-15.3-7.3C394.4 4.3 373.7 0 352 0C297.7 0 249.8 27 220.9 68.3c4.2 4.3 7.3 9.5 9.1 15.2C255.5 42.9 300.6 16 352 16c17.2 0 33.6 3 48.9 8.5l-76.2 76.2-4.7 4.7 0 6.6 0 64 0 16 8 0 8 0 64 0 6.6 0 4.7-4.7 76.2-76.2c5.5 15.2 8.5 31.7 8.5 48.9zM112 422.6L134.6 400 112 377.4 89.4 400 112 422.6zM176 176l-72 0L21.1 65.5 65.5 21.1 176 104l0 72zm0 16l4.7 0 93.7 93.7-31 31L232 328l11.3 11.3L404.7 500.7 416 512l11.3-11.3 73.4-73.4L512 416l-11.3-11.3L339.3 243.3 328 232l-11.3 11.3-31 31L192 180.7l0-4.7 0-80L64 0 0 64 96 192l80 0zM416 489.4L254.6 328 328 254.6 489.4 416 416 489.4z" />
    </Icon>
);

export default ScrewdriverWrench;