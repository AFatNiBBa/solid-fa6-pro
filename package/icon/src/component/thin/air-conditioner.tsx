
import { Icon } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=thin air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 96c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 96c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 64zM256 424c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-28.8 13.9-54.4 35.3-70.4c3.5-2.7 8.5-1.9 11.2 1.6s1.9 8.6-1.6 11.2C107.3 379.5 96 400.4 96 424c0 39.8 32.2 72 72 72s72-32.2 72-72l0-168 16 0 0 168zm64-168l16 0 0 136c0 39.8 32.2 72 72 72s72-32.2 72-72c0-23.6-11.3-44.5-28.8-57.6c-3.5-2.7-4.3-7.7-1.6-11.2s7.7-4.3 11.2-1.6c21.4 16 35.2 41.6 35.2 70.4c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-136zM104 128l368 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-368 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default AirConditioner;