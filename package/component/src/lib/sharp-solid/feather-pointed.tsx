
import { Icon } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=sharp-solid feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M137.4 131.6C228.5 40.5 428.3 6.9 512 0c-4.4 53.7-19.8 155.2-54.4 245.1L368 272l0 16 71.1 0c-8.2 16.9-17.2 32.9-27.1 47.6L304 368l0 16 66.4 0c-61.9 54.9-164.4 88.3-238 45.5L73 489l-17 17L22.1 472l17-17L287.2 206.8l-22.3-22.3-11.3 11.3L78.1 371.3c-37.9-77 1.1-181.5 59.3-239.7z" />
    </Icon>
);

export default FeatherPointed;