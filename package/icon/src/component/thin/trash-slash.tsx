
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=thin trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 120.7c.4-4.4-2.9-8.3-7.3-8.6s-8.3 2.9-8.6 7.3L481.6 291.9l15.1 11.9L512 120.7zM467.1 463.8c-3.7 18.5-20 32.2-39.2 32.2l-215.7 0c-20.8 0-38.1-15.9-39.9-36.7L151.9 215.1l-17.2-13.6 21.6 259.2c2.4 29 26.7 51.4 55.8 51.4l215.7 0c24.3 0 45.1-15.5 52.8-37.4l-13.6-10.7zM211.6 64L193 64l20.3 16L536 80c4.4 0 8-3.6 8-8s-3.6-8-8-8L428.4 64 400.2 18.8C392.9 7.1 380.1 0 366.3 0L273.7 0c-13.8 0-26.6 7.1-33.9 18.8L211.6 64zm62.2-48l92.5 0c8.3 0 16 4.3 20.4 11.3l23 36.7L230.4 64l23-36.7c4.4-7 12.1-11.3 20.4-11.3zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default TrashSlash;