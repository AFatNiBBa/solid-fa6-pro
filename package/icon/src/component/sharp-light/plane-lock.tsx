
import { Icon } from "../../index";

/**
 * A component that renders the `plane-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-lock?s=sharp-light plane-lock}
 * @preview ![plane-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/plane-lock.svg)
 */
const PlaneLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 0c-13.4 0-25.2 5.7-34.8 13.3c-9.5 7.6-17.6 17.7-24 28.4C184.4 62.7 176 89 176 109.7l0 44.5L8.1 250.1 0 254.7 0 264l0 96 0 21.9 20.9-6.7L176 325.4l0 50.6-57.6 43.2L112 424l0 8 0 64 0 16 16 0 16 0 2.2 0 2.2-.6L256 480.6l107.6 30.7 2.2 .6 2.2 0 0-32.6L260.4 448.6l-4.4-1.3-4.4 1.3L144 479.4l0-39.4 57.6-43.2L208 392l0-8 0-80.6 0-21.9-20.9 6.7L32 338.1l0-64.8 167.9-96 8.1-4.6 0-9.3 0-53.7c0-13.5 6.1-34.1 16.6-51.3c5.2-8.5 10.9-15.4 16.7-20C247 33.7 251.9 32 256 32c9.1 0 20.9 8.2 31.8 26.3C298.1 75.5 304 96.1 304 109.7l0 61.7 0 9.3 8.1 4.6 106.9 61.1c2.5-10.7 6.5-20.8 11.9-30.1L336 162.1l0-52.5c0-20.6-8.1-46.8-20.8-67.9C303.1 21.6 282.9 0 256 0zm80 376l0-48.2L384 345l0-34-58.6-20.9L304 282.4l0 22.7 0 78.9 0 8 6.4 4.8L368 440l0-40-32-24zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default PlaneLock;