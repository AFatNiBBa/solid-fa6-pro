
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `oil-can-drip` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can-drip?s=duotone oil-can-drip}
 * @preview ![oil-can-drip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMzNiA2NEgxNzZDMTY3LjE2NCA2NCAxNjAgNzEuMTYyIDE2MCA4MFY5NkMxNjAgMTA0LjgzNiAxNjcuMTY0IDExMiAxNzYgMTEySDIyNFYxNjBIMjg4VjExMkgzMzZDMzQ0LjgzOCAxMTIgMzUyIDEwNC44MzYgMzUyIDk2VjgwQzM1MiA3MS4xNjIgMzQ0LjgzOCA2NCAzMzYgNjRaTTU5OC44NDIgMjk5LjM5NkM1OTUuNzU4IDI5NC4xNDMgNTg4LjI0MiAyOTQuMTQzIDU4NS4xNiAyOTkuMzk2QzU3MS45MDIgMzIxLjk4OCA1NDQgMzcyLjIwMyA1NDQgMzk0LjcxOUM1NDQgNDI0LjA5NCA1NjUuMzk2IDQ0OCA1OTIgNDQ4QzYxOC42MDUgNDQ4IDY0MCA0MjQuMDk0IDY0MCAzOTQuNzE5QzY0MCAzNzIuMjAzIDYxMi4xIDMyMS45ODggNTk4Ljg0MiAyOTkuMzk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MzcuODc1IDE2OC4wMzFDNjM0LjM5MSAxNjEuOTY5IDYyNy4zOTEgMTU4LjkyMiA2MjAuNTMxIDE2MC4zNzVMNDUwLjgyOCAxOTcuOTg0TDQwMC44NTkgMTY3LjU0N0MzOTIuNzgxIDE2Mi42MDkgMzgzLjI1IDE2MCAzNzMuMzI4IDE2MEg0OEMyMS41MzEgMTYwIDAgMTgxLjUzMSAwIDIwOFYyNzIuMjk3QzAgMjkxLjM1OSAxMS4yODEgMzA4LjYyNSAyOC43NSAzMTYuMjgxTDk2IDM0NS42OTlWMzc0LjAwMUM5NiAzOTcuMTU2IDExNy41MzEgNDE2IDE0NCA0MTZINDAwLjc2NkM0MTQuNjU2IDQxNiA0MjcuODQ0IDQxMC43OTcgNDM3LjM1OSA0MDEuMjVMNjM1Ljc1IDE4Ni44NTlDNjQwLjUgMTgxLjczNCA2NDEuMzU5IDE3NC4xMDkgNjM3Ljg3NSAxNjguMDMxWk05NiAyOTMuMzAxTDQ4IDI3Mi4yOTdWMjA4SDk2VjI5My4zMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function OilCanDrip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M336 64H176C167.164 64 160 71.162 160 80V96C160 104.836 167.164 112 176 112H224V160H288V112H336C344.838 112 352 104.836 352 96V80C352 71.162 344.838 64 336 64ZM598.842 299.396C595.758 294.143 588.242 294.143 585.16 299.396C571.902 321.988 544 372.203 544 394.719C544 424.094 565.396 448 592 448C618.605 448 640 424.094 640 394.719C640 372.203 612.1 321.988 598.842 299.396Z" />
            <path d="M637.875 168.031C634.391 161.969 627.391 158.922 620.531 160.375L450.828 197.984L400.859 167.547C392.781 162.609 383.25 160 373.328 160H48C21.531 160 0 181.531 0 208V272.297C0 291.359 11.281 308.625 28.75 316.281L96 345.699V374.001C96 397.156 117.531 416 144 416H400.766C414.656 416 427.844 410.797 437.359 401.25L635.75 186.859C640.5 181.734 641.359 174.109 637.875 168.031ZM96 293.301L48 272.297V208H96V293.301Z" />
        </Icon>
    </>
}