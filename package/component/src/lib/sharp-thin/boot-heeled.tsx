
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=sharp-thin boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 0L0 0 0 8 0 32l0 .6 .1 .6L31.9 231.8 .2 382.4l-.2 .8 0 .8 0 56 0 64 0 8 8 0 104 0 8 0 0-8 0-56 22.1 0 126.3 63.2 1.7 .8 1.9 0 200 0 32 0 8 0 0-16-8 0-24 0 0-64 0-4.5-3.8-2.3L272 299.5 272 8l0-8-8 0L8 0zm8 448l88 0 0 48-88 0 0-48zm96-16l-96 0 0-47.2L47.8 233.6l.3-1.4-.2-1.5L16 31.4 16 16l96 0 0 232 0 8 16 0 0-8 0-232 128 0 0 288 0 4.5 3.8 2.3L464 436.5l0 59.5-190.1 0L147.6 432.8l-1.7-.8-1.9 0-32 0z" />
    </Icon>
);

export default BootHeeled;