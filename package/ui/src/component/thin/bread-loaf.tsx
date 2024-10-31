
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=thin bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 240c-26.5 0-48-21.5-48-48c0-54.9 37.2-90.6 86.7-113.5C152.2 55.7 209.8 48 240 48s87.8 7.7 137.3 30.5C426.8 101.4 464 137.1 464 192c0 26.5-21.5 48-48 48c-8.8 0-16 7.2-16 16l0 176c0 17.7-14.3 32-32 32l-48 0-208 0c-17.7 0-32-14.3-32-32l0-176c0-8.8-7.2-16-16-16zm352 16l144 0 0 176c0 17.7-14.3 32-32 32l-124.2 0c7.6-8.5 12.2-19.7 12.2-32l0-160 0-16zm160-16l-8 0-109.7 0c13.3-11.7 21.7-28.9 21.7-48c0-81.1-70.7-123.7-138.8-144L400 48c30.2 0 87.8 7.7 137.3 30.5C586.8 101.4 624 137.1 624 192c0 26.5-21.5 48-48 48c0 0 0 0 0 0zm0 16c35.3 0 64-28.7 64-64C640 64 464 32 400 32L256 32l-16 0C176 32 0 64 0 192c0 35.3 28.7 64 64 64l0 16 0 160c0 26.5 21.5 48 48 48l208 0 48 0 160 0c26.5 0 48-21.5 48-48l0-160 0-16z" />
    </Icon>
);

export default BreadLoaf;