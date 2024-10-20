
import { Icon } from "../../index";

/**
 * A component that renders the `fingerprint` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fingerprint?s=sharp-light fingerprint}
 * @preview ![fingerprint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fingerprint.svg)
 */
const Fingerprint: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32c70.3 0 133 32.4 174.1 83l10.1 12.4L465 107.3 455 94.9C408.1 37 336.3 0 256 0C114.6 0 0 114.6 0 256l0 48 0 16 32 0 0-16 0-48zm470.8-68.3l-4.3-15.4-30.8 8.5 4.3 15.4c5.2 19 8.1 39 8.1 59.7l0 48 0 16 32 0 0-16 0-48c0-23.6-3.2-46.5-9.2-68.3zM256 80c-30.5 0-59.3 7.8-84.3 21.5l18.8 26.3C210.1 117.7 232.4 112 256 112c79.5 0 144 64.5 144 144l0 24.9c0 34.6-2.7 69-8.1 103.1l32.4 0c5.2-34 7.8-68.5 7.8-103.1l0-24.9c0-97.2-78.8-176-176-176zM152 156.4L133.1 130C100.3 162 80 206.6 80 256l0 24.9c0 35-5.5 69.8-16.2 103.1l33.5 0C107 350.6 112 315.9 112 280.9l0-24.9c0-38.6 15.2-73.7 40-99.6zM256 160c-53 0-96 43-96 96l0 24.9c0 46-7.6 91.6-22.5 135.1l33.7 0C185 372.4 192 326.8 192 280.9l0-24.9c0-35.3 28.7-64 64-64s64 28.7 64 64l0 24.9c0 45.6-5.4 90.9-16.1 135.1l32.9 0c10.1-44.2 15.2-89.5 15.2-135.1l0-24.9c0-53-43-96-96-96zm16 96l-32 0 0 24.9c0 60.9-11.2 121.2-33.1 178.1l-5.9 15.3-2.2 5.7 34.3 0 3.7-9.5C260.1 410 272 345.7 272 280.9l0-24.9z" />
    </Icon>
);

export default Fingerprint;