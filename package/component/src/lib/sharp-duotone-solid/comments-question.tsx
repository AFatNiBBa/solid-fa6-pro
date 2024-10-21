
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comments-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments-question?s=sharp-duotone-solid comments-question}
 * @preview ![comments-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comments-question.svg)
 */
const CommentsQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 176c0 37.5 13.9 72.3 37.6 100.9L0 352l108.1-21.6C137.7 344.2 171.8 352 208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zm134.7-52c0-25.8 20.9-46.7 46.7-46.7l47.4 0c29.1 0 52.6 23.6 52.6 52.6c0 18.8-10.1 36.3-26.4 45.6L228 191l0 6.3 0 20-40 0 0-20 0-17.9 0-11.6 10-5.8L235 140.9c3.9-2.3 6.3-6.4 6.3-10.9c0-7-5.7-12.6-12.6-12.6l-47.4 0c-3.7 0-6.7 3-6.7 6.7l0 5.5-40 0 0-5.5zM188 250.7l40 0 0 40-40 0 0-40z" />
        <path d="M134.7 124c0-25.8 20.9-46.7 46.7-46.7l47.4 0c29.1 0 52.6 23.6 52.6 52.6c0 18.8-10.1 36.3-26.4 45.6L228 191l0 6.3 0 20-40 0 0-20 0-17.9 0-11.6 10-5.8L235 140.9c3.9-2.3 6.3-6.4 6.3-10.9c0-7-5.7-12.6-12.6-12.6l-47.4 0c-3.7 0-6.7 3-6.7 6.7l0 5.5-40 0 0-5.5zM188 250.7l40 0 0 40-40 0 0-40zM432 512c-95.6 0-176.2-54.6-200.5-129C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 37.5-13.9 72.3-37.6 100.9L640 512 531.9 490.4C502.3 504.2 468.2 512 432 512z" />
    </Icon>
);

export default CommentsQuestion;