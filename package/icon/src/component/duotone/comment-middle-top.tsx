
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-middle-top` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle-top?s=duotone comment-middle-top}
 * @preview ![comment-middle-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAzMDRDNTEyIDQxOC45MDYgMzk3LjQwNiA1MTIgMjU2IDUxMlMwIDQxOC45MDYgMCAzMDRDMCAyMDguMDEyIDgwLjA3NiAxMjcuNDY3IDE4OC44MzggMTAzLjQ3NUwyMzcuNzI1IDEwLjA4NEMyNDEuMjQzIDMuMzYxIDI0OC42MjIgMCAyNTYgMFMyNzAuNzU3IDMuMzYxIDI3NC4yNzUgMTAuMDg0TDMyMy4xNjIgMTAzLjQ3NUM0MzEuOTI0IDEyNy40NjcgNTEyIDIwOC4wMTIgNTEyIDMwNFogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function CommentMiddleTop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 304C512 418.906 397.406 512 256 512S0 418.906 0 304C0 208.012 80.076 127.467 188.838 103.475L237.725 10.084C241.243 3.361 248.622 0 256 0S270.757 3.361 274.275 10.084L323.162 103.475C431.924 127.467 512 208.012 512 304Z " />
        </Icon>
    </>
}