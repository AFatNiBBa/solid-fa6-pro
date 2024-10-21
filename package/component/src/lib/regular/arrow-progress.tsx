
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=regular arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M472 64a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-88 0a64 64 0 1 1 128 0A64 64 0 1 1 384 64zM0 160C0 93.7 53.7 40 120 40l136 0 0-22.1C256 8 264 0 273.9 0c4 0 7.8 1.3 11 3.8l60.8 47.3c4 3.1 6.3 7.9 6.3 12.9s-2.3 9.8-6.3 12.9l-60.8 47.3c-3.1 2.4-7 3.8-11 3.8c-9.9 0-17.9-8-17.9-17.9L256 88 120 88c-39.8 0-72 32.2-72 72s32.2 72 72 72l272 0c66.3 0 120 53.7 120 120c0 59.5-43.3 108.8-100 118.3c-9.1 24.3-32.5 41.7-60 41.7c-35.3 0-64-28.7-64-64s28.7-64 64-64c25.9 0 48.3 15.4 58.3 37.6c30.9-8.1 53.7-36.2 53.7-69.6c0-39.8-32.2-72-72-72l-272 0C53.7 280 0 226.3 0 160zM123.3 424l36.7 0 0-22.1c0-9.9 8-17.9 17.9-17.9c4 0 7.8 1.3 11 3.8l60.8 47.3c4 3.1 6.3 7.9 6.3 12.9s-2.3 9.8-6.3 12.9l-60.8 47.3c-3.1 2.4-7 3.8-11 3.8c-9.9 0-17.9-8-17.9-17.9l0-22.1-36.7 0c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40zM88 448a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm264 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default ArrowProgress;