
import { Icon } from "../../index";

/**
 * A component that renders the `bus-school` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus-school?s=solid bus-school}
 * @preview ![bus-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bus-school.svg)
 */
const BusSchool: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0C380.8 0 464 35.2 464 80l0 16 0 16 16 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-16 0 0 28.2c9.8 8.8 16 21.6 16 35.8l0 96c0 20.9-13.4 38.7-32 45.3l0 34.7c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-34.7c-18.6-6.6-32-24.4-32-45.3l0-96c0-14.2 6.2-27 16-35.8L48 240l-16 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l16 0 0-16 0-16C48 35.2 131.2 0 256 0zM112 160l0 64c0 17.7 14.3 32 32 32l96 0 0-128-96 0c-17.7 0-32 14.3-32 32zm160 96l96 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-96 0 0 128zM112 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 80c0-8.8-7.2-16-16-16L176 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default BusSchool;