
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `drumstick` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=duotone drumstick}
 * @preview ![drumstick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5My43MjUgMzkyLjQ2M0MxODcuNjQ0IDM5OC42MDcgMTg0LjgyNiA0MDYuNDgyIDE4NC44MjYgNDE0LjY1NkMxODQuODI2IDQyOC4zNzEgMTkyLjA3NiA0MzMuMDA5IDE5Mi4wNzYgNDUxLjY4N0MxOTIuMDc2IDQ4NS4xNTggMTY0LjgxMyA1MTIgMTMxLjc0IDUxMkMxMDguOTk2IDUxMiA3Mi4xNTggNDk0LjgwMiA3Mi4xNTggNDUyLjkzQzcyLjE1OCA0NDcuOTg2IDcyLjczMiA0NDMuMDI3IDczLjg0OCA0MzguMTY2QzY4Ljk4OCA0MzkuMjgyIDY0LjAzIDQzOS44NTcgNTkuMDg4IDQzOS44NTdDMTYuOTE4IDQzOS44NTcgMCA0MDMuMTMxIDAgMzgwLjMwMkMwIDMzNy45NTYgMzYuODM2IDMyMC4wMDcgNjAuMjIzIDMyMC4wMDdDNzkuMzAxIDMyMC4wMDcgODMuMzA2IDMyNy4yNTkgOTcuMzUyIDMyNy4yNTlDMTA1LjUyNCAzMjcuMjU5IDExMy4zOTYgMzI0LjQ0IDExOS41MzkgMzE4LjM1OEwxNjAuMDMxIDI3Ny44NTVWMjg3Ljk1NkMxNjAuMDMxIDMyMy4yNTggMTg4LjcyNiAzNTEuOTYgMjI0LjAxOSAzNTEuOTZIMjM0LjIxN0wxOTMuNzI1IDM5Mi40NjNIMTkzLjcyNVogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PHBhdGggZD0iTTE2MC4xIDE5MS45NUMxNjAuMSAxMjcuOTQ2IDE4Ny42OTUgODQuOTQzIDIyMy4xODggNDkuNTQxQzI1Ni4yMTkgMTYuNTAxIDI5OS40OSAwIDM0Mi43NjUgMEM0MzkuMzA5IDAgNTExLjk2OSA3OC43NzQgNTExLjk2OSAxNjkuMTEyQzUxMS45NjkgMjEyLjQ0MyA0OTUuNDQ3IDI1NS43OTEgNDYyLjQ0MSAyODguODU2QzQyNi45NDggMzI0LjI1OCAzODMuOTU2IDM1MS45NiAzMjAuMDY5IDM1MS45NkgyMjMuOTg3QzE4OC42OTQgMzUxLjk2IDE2MCAzMjMuMjU4IDE2MCAyODcuOTU2TDE2MC4xIDE5MS45NVogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function Drumstick(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M193.725 392.463C187.644 398.607 184.826 406.482 184.826 414.656C184.826 428.371 192.076 433.009 192.076 451.687C192.076 485.158 164.813 512 131.74 512C108.996 512 72.158 494.802 72.158 452.93C72.158 447.986 72.732 443.027 73.848 438.166C68.988 439.282 64.03 439.857 59.088 439.857C16.918 439.857 0 403.131 0 380.302C0 337.956 36.836 320.007 60.223 320.007C79.301 320.007 83.306 327.259 97.352 327.259C105.524 327.259 113.396 324.44 119.539 318.358L160.031 277.855V287.956C160.031 323.258 188.726 351.96 224.019 351.96H234.217L193.725 392.463H193.725Z " />
            <path d="M160.1 191.95C160.1 127.946 187.695 84.943 223.188 49.541C256.219 16.501 299.49 0 342.765 0C439.309 0 511.969 78.774 511.969 169.112C511.969 212.443 495.447 255.791 462.441 288.856C426.948 324.258 383.956 351.96 320.069 351.96H223.987C188.694 351.96 160 323.258 160 287.956L160.1 191.95Z " />
        </Icon>
    </>
}