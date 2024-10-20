
import { Icon } from "../../index";

/**
 * A component that renders the `garage` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=solid garage}
 * @preview ![garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/garage.svg)
 */
const Garage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 171.3L0 488c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-264c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 264c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-316.7c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3zM128 224l0 96 384 0 0-96-384 0zm0 128l0 160 384 0 0-160-384 0zm128 80c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Garage;