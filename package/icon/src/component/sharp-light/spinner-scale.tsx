
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=sharp-light spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M236 44l40 0 0 20c0 11-9 20-20 20s-20-9-20-20l0-20zM204 12l0 32 0 20c0 28.7 23.3 52 52 52s52-23.3 52-52l0-20 0-32-32 0-40 0-32 0zm28 436l0 24 24 0 24 0 0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24zM448 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0-24 0-24-24 0zM64 268l-12 0 0-24 12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12zm0-56l-12 0-32 0 0 32 0 24 0 32 32 0 12 0c24.3 0 44-19.7 44-44s-19.7-44-44-44zm361.7-91.8l-17 17c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l17-17 33.9 33.9zM414.4 63.7L391.8 41 369.1 63.7l-17 17c-21.9 21.9-21.9 57.3 0 79.2s57.3 21.9 79.2 0l17-17L471 120.2 448.3 97.6 414.4 63.7zM80.6 391.8l19.8 19.8 19.8 19.8L140 411.6c10.9-10.9 10.9-28.7 0-39.6s-28.7-10.9-39.6 0L80.6 391.8zM401 401l17-17-17-17c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l17 17 17-17zm-292-269.4L97.6 120.2l22.6-22.6 11.3 11.3c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zm45.3-45.3L142.9 75 120.2 52.4 97.6 75 75 97.6 52.4 120.2 75 142.9l11.3 11.3c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9z" />
    </Icon>
);

export default SpinnerScale;