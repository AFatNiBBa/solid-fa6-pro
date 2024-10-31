
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=sharp-light triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 16l0-16L272 0l0 16 0 42.7-2.7 4.4L19.2 480 0 512l37.3 0 501.4 0 37.3 0-19.2-32L421.5 254.4l-23.3 23.3L519.5 480l-463 0L288 94.2l76.2 127-43.7 43.7c-9.5-5.6-20.6-8.9-32.5-8.9c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-11.9-3.2-23-8.9-32.5l38-38 23.3-23.3L539.3 91.3 550.6 80 528 57.4 516.7 68.7 387.5 197.9 306.7 63.1 304 58.7 304 16zm16 304a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default TriangleInstrument;