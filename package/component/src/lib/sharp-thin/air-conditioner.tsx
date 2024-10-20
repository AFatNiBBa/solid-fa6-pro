
import { Icon } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=sharp-thin air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 16l0 192 544 0 0-192L16 16zM0 0L16 0 560 0l16 0 0 16 0 192 0 16-16 0L16 224 0 224l0-16L0 16 0 0zM256 424c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-28.9 13.9-54.5 35.4-70.5l9.6 12.8C107.4 379.4 96 400.4 96 424c0 39.8 32.2 72 72 72s72-32.2 72-72l0-168 16 0 0 168zm64-168l16 0 0 136c0 39.8 32.2 72 72 72s72-32.2 72-72c0-23.5-11.3-44.4-28.7-57.5l9.6-12.8c21.3 16 35.1 41.6 35.1 70.3c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-136zM104 128l368 0 8 0 0 16-8 0-368 0-8 0 0-16 8 0z" />
    </Icon>
);

export default AirConditioner;