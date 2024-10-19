
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-rolling-eyes` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-rolling-eyes?s=duotone face-rolling-eyes}
 * @preview ![face-rolling-eyes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDYxIDE2IDE2IDEyMy40MjIgMTYgMjU2UzEyMy40NjEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NzggNDk2IDI1NlMzODguNTM5IDE2IDI1NiAxNlpNOTYgMjI0Qzk2IDE4OC42NTYgMTI0LjY1NCAxNjAgMTYwIDE2MFMyMjQgMTg4LjY1NiAyMjQgMjI0UzE5NS4zNDYgMjg4IDE2MCAyODhTOTYgMjU5LjM0NCA5NiAyMjRaTTMyMC4wNTkgNDAwSDE5MS45NDFDMTcwLjc1IDQwMCAxNzAuNzUgMzY4IDE5MS45NDEgMzY4SDMyMC4wNTlDMzQxLjI1IDM2OCAzNDEuMjUgNDAwIDMyMC4wNTkgNDAwWk0zNTIgMjg4QzMxNi42NTQgMjg4IDI4OCAyNTkuMzQ0IDI4OCAyMjRTMzE2LjY1NCAxNjAgMzUyIDE2MFM0MTYgMTg4LjY1NiA0MTYgMjI0UzM4Ny4zNDYgMjg4IDM1MiAyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM4Mi4zODUgMTY4QzM3My4zMDkgMTYzLjA2MiAzNjMuMDYxIDE2MCAzNTIgMTYwUzMzMC42OTEgMTYzLjA2MiAzMjEuNjE1IDE2OEMzMjAuOTIyIDE3MC42MTcgMzIwIDE3My4xNjQgMzIwIDE3NkMzMjAgMTkzLjY3MiAzMzQuMzI2IDIwOCAzNTIgMjA4UzM4NCAxOTMuNjcyIDM4NCAxNzZDMzg0IDE3My4xNjQgMzgzLjA3OCAxNzAuNjE3IDM4Mi4zODUgMTY4Wk0xNjAgMTYwQzE0OC45MzkgMTYwIDEzOC42OTEgMTYzLjA2MiAxMjkuNjE1IDE2OEMxMjguOTIyIDE3MC42MTcgMTI4IDE3My4xNjQgMTI4IDE3NkMxMjggMTkzLjY3MiAxNDIuMzI2IDIwOCAxNjAgMjA4UzE5MiAxOTMuNjcyIDE5MiAxNzZDMTkyIDE3My4xNjQgMTkxLjA3OCAxNzAuNjE3IDE5MC4zODUgMTY4QzE4MS4zMDkgMTYzLjA2MiAxNzEuMDYxIDE2MCAxNjAgMTYwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceRollingEyes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.461 16 16 123.422 16 256S123.461 496 256 496S496 388.578 496 256S388.539 16 256 16ZM96 224C96 188.656 124.654 160 160 160S224 188.656 224 224S195.346 288 160 288S96 259.344 96 224ZM320.059 400H191.941C170.75 400 170.75 368 191.941 368H320.059C341.25 368 341.25 400 320.059 400ZM352 288C316.654 288 288 259.344 288 224S316.654 160 352 160S416 188.656 416 224S387.346 288 352 288Z" />
            <path d="M382.385 168C373.309 163.062 363.061 160 352 160S330.691 163.062 321.615 168C320.922 170.617 320 173.164 320 176C320 193.672 334.326 208 352 208S384 193.672 384 176C384 173.164 383.078 170.617 382.385 168ZM160 160C148.939 160 138.691 163.062 129.615 168C128.922 170.617 128 173.164 128 176C128 193.672 142.326 208 160 208S192 193.672 192 176C192 173.164 191.078 170.617 190.385 168C181.309 163.062 171.061 160 160 160Z" />
        </Icon>
    </>
}