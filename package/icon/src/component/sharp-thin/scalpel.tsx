
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=sharp-thin scalpel}
 * @preview ![scalpel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/scalpel.svg)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M399.6 35.4C410 23.1 425.3 16 441.4 16C471.5 16 496 40.5 496 70.6l0 4c0 13.8-4.9 27.2-13.8 37.8L347.5 272 200 272 399.6 35.4zM347.5 288l7.4 0 4.8-5.7L494.4 122.7C505.8 109.2 512 92.2 512 74.6l0-4C512 31.6 480.4 0 441.4 0c-20.8 0-40.6 9.2-54 25.1L187.8 261.7 179.1 272l-13.5 16 20.9 0 13.5 0 147.5 0zM15.4 494.7L0 512c4.1 0 12.2-.7 23.4-2.2c72.8-10.1 273-56.9 294.7-189.8l-16.3 0c-11.7 62.9-69.2 105.8-136.1 134.3C128.9 469.9 91 480.4 60.2 487c-7.1 1.5-13.8 2.8-20 3.9L192.1 320l-21.4 0L15.4 494.7z" />
    </Icon>
);

export default Scalpel;