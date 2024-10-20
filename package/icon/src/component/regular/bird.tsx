
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=regular bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48.7 208L192 208c44.2 0 80-35.8 80-80l0-16c0-35.3 28.7-64 64-64s64 28.7 64 64l0 80c0 97.2-78.8 176-176 176c-91.8 0-167.2-70.3-175.3-160zM0 188.4L0 192C0 294.3 68.5 380.5 162.1 407.4l48.6 91.9c6.2 11.7 20.7 16.2 32.4 10s16.2-20.7 10-32.4L221 416c1 0 2 0 3 0c12.6 0 25-1 37.1-3.1l45.7 86.3c6.2 11.7 20.7 16.2 32.4 10s16.2-20.7 10-32.4l-40.9-77.2C390.3 366.3 448 285.9 448 192l0-16.5 56.2-33.7c4.8-2.9 7.8-8.1 7.8-13.7s-2.9-10.8-7.8-13.7l-61.7-37C427.9 32.4 385.7 0 336 0C274.1 0 224 50.1 224 112l0 16c0 17.7-14.3 32-32 32L28.4 160C12.7 160 0 172.7 0 188.4zM336 144a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Bird;