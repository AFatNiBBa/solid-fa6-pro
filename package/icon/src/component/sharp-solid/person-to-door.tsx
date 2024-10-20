
import { Icon } from "../../index";

/**
 * A component that renders the `person-to-door` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-to-door?s=sharp-solid person-to-door}
 * @preview ![person-to-door](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-to-door.svg)
 */
const PersonToDoor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM114.7 96L128 96l64 0 6.2 0 5.7 2.3 80 32 11.3 4.5 5.4 10.9L339.8 224l28.2 0 32 0 0 64-32 0-48 0-19.8 0-8.8-17.7L267 221.7 238 299 305 340.9l20.4 12.8-6.6 23.2-16 56-16 56L280.1 512l-66.6 0 11.7-40.8 16-56 9.4-32.8-86.2-53.9c-25.1-15.7-36.1-46.5-26.8-74.5l31.3-94-27.7 0-38.6 38.6L80 221.3 34.7 176l22.6-22.6 48-48 9.4-9.4zM91.2 352l18.3-41.3c7.4 18.1 20.4 33.9 37.9 44.9l9.5 6L141.2 397l-8.4 19L112 416l-80 0L0 416l0-64 32 0 59.2 0zM384 0L576 0l0 512-192 0 0-192 48 0 0-128-48 0L384 0z" />
    </Icon>
);

export default PersonToDoor;