
import { Icon } from "../../index";

/**
 * A component that renders the `r` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=light r}
 * @preview ![r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/r.svg)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 32C21.5 32 0 53.5 0 80L0 272 0 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 135.4 0L290.7 472.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2L205.4 287.3C269.8 280.6 320 226.2 320 160c0-70.7-57.3-128-128-128L48 32zM176 256L32 256 32 80c0-8.8 7.2-16 16-16l144 0c53 0 96 43 96 96s-43 96-96 96l-16 0z" />
    </Icon>
);

export default R;