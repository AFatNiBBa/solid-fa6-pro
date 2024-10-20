
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=thin triangle}
 * @preview ![triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/triangle.svg)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M221.7 67.7C228.8 55.5 241.9 48 256 48s27.2 7.5 34.3 19.7l201 344.6c3.1 5.3 4.7 11.2 4.7 17.3c0 19-15.4 34.4-34.4 34.4L50.4 464c-19 0-34.4-15.4-34.4-34.4c0-6.1 1.6-12.1 4.7-17.3l201-344.6zm-13.8-8.1L6.9 404.2C2.4 411.9 0 420.7 0 429.6C0 457.4 22.6 480 50.4 480l411.2 0c27.8 0 50.4-22.6 50.4-50.4c0-8.9-2.4-17.7-6.9-25.4L304.1 59.6C294.1 42.5 275.8 32 256 32s-38.1 10.5-48.1 27.6z" />
    </Icon>
);

export default Triangle;