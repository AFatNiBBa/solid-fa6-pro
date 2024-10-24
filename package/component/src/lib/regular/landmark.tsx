
import { Icon } from "../../index";

/**
 * A component that renders the `landmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=regular landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.6 3c-7.2-4-16-4-23.2 0L17.6 128.1C6.7 134.1 0 145.5 0 157.9C0 176.8 15.2 192 34.1 192l443.9 0c18.8 0 34.1-15.2 34.1-34.1c0-12.4-6.7-23.8-17.6-29.8L267.6 3zM256 51.4L423.8 144 88.2 144 256 51.4zM112 224l-48 0 0 160-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-160-48 0 0 160-64 0 0-160-48 0 0 160-64 0 0-160-48 0 0 160-64 0 0-160zM0 488c0 13.3 10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Landmark;