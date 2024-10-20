
import { Icon } from "../../index";

/**
 * A component that renders the `fingerprint` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fingerprint?s=sharp-thin fingerprint}
 * @preview ![fingerprint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/fingerprint.svg)
 */
const Fingerprint: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16c77.9 0 147.2 37.1 191 94.7l4.8 6.4 12.7-9.7-4.8-6.4C413 39.6 339.1 0 256 0C114.6 0 0 114.6 0 256l0 56 0 8 16 0 0-8 0-56zm484.8-75l-2.3-7.6L483.2 178l2.3 7.6c6.8 22.2 10.5 45.9 10.5 70.4l0 56 0 8 16 0 0-8 0-56c0-26.1-3.9-51.3-11.2-75zM256 80c-30.5 0-59.3 7.8-84.3 21.5l9.4 13.1C203.4 102.7 228.9 96 256 96c88.4 0 160 71.6 160 160l0 24.9c0 34.6-2.7 69-8 103.1l16.2 0c5.2-34 7.8-68.5 7.8-103.1l0-24.9c0-97.2-78.8-176-176-176zM133.1 130C100.3 162 80 206.6 80 256l0 24.9c0 35-5.5 69.8-16.2 103.1l16.8 0C90.8 350.6 96 315.9 96 280.9L96 256c0-44 17.8-83.9 46.5-112.8L133.1 130zM256 160c-53 0-96 43-96 96l0 24.9c0 46-7.6 91.6-22.5 135.1l16.9 0c14.3-43.5 21.7-89.1 21.7-135.1l0-24.9c0-44.2 35.8-80 80-80s80 35.8 80 80l0 24.9c0 45.6-5.3 90.9-15.6 135.1l16.4 0c10.1-44.2 15.2-89.5 15.2-135.1l0-24.9c0-53-43-96-96-96zm8 96l-16 0 0 24.9c0 61.9-11.4 123.2-33.6 180.9l-5.9 15.3-1.1 2.9 17.1 0 4.8-12.4C252.3 408 264 344.8 264 280.9l0-24.9z" />
    </Icon>
);

export default Fingerprint;