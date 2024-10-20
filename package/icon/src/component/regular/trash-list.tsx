
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=regular trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M170.5 51.6L151.5 80l113 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-61.7 0c-2.7 0-5.2 1.3-6.7 3.6zm115-26.6L322.2 80l13.7 0L384 80l8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-11.6 0L356.4 452.7c-2.5 33.4-30.3 59.3-63.8 59.3l-169.1 0c-33.5 0-61.3-25.9-63.8-59.3L35.6 128 24 128c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48.1 0 13.7 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l61.7 0c18.7 0 36.2 9.4 46.6 24.9zM83.7 128l23.8 321.2c.6 8.4 7.6 14.8 16 14.8l169.1 0c8.4 0 15.3-6.5 16-14.8L332.3 128 83.7 128zM472 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM448 408c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default TrashList;