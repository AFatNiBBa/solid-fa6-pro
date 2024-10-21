
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=sharp-thin reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M414.8 464.3C397.1 475.1 384 480 384 480s10-10 18.8-27.2c7-13.6 13.2-31.6 13.2-52.8c0-61.9-50.1-112-112-112l-64 0-16 0 0 16 0 64 0 16-16 0-16 0L11.8 218.9 0 208l11.8-10.9L192 32l16 0 16 0 0 16 0 64 0 16 16 0 96 0c97.2 0 176 78.8 176 176c0 87.1-59.3 137.2-97.2 160.3zM426.4 437c3.6-2.8 7.3-5.8 11-9c29.7-26 58.5-66 58.5-124c0-88.4-71.6-160-160-160l-112 0-16 0 0-16 0-80-9.8 0L23.7 208 198.2 368l9.8 0 0-80 0-16 16 0 80 0c70.7 0 128 57.3 128 128c0 13.6-2.2 26-5.6 37z" />
    </Icon>
);

export default Reply;