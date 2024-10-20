
import { Icon } from "../../index";

/**
 * A component that renders the `flag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=sharp-thin flag}
 * @preview ![flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/flag.svg)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 8l0-8L0 0 0 8 0 64 0 383.5 0 400 0 504l0 8 16 0 0-8 0-108 112.3-28.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4L448 368l0-334.1L448 16l-16 8L393.6 43.2c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L16 60 16 8zm0 68.5L136.8 46.3c34.4-8.6 70.7-4.6 102.4 11.2c50.8 25.4 110.6 25.4 161.5 0L432 41.9l0 315-45.1 16.9c-42.1 15.8-88.8 13.3-129-6.8c-41.3-20.7-88.7-25.9-133.5-14.7L16 379.5l0-303z" />
    </Icon>
);

export default Flag;