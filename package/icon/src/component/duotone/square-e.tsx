
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-e` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=duotone square-e}
 * @preview ![square-e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJaTTI2NCAyMzJDMjc3LjI1IDIzMiAyODggMjQyLjc1IDI4OCAyNTZTMjc3LjI1IDI4MCAyNjQgMjgwSDE3NlYzMzZIMjk2QzMwOS4yNSAzMzYgMzIwIDM0Ni43NSAzMjAgMzYwUzMwOS4yNSAzODQgMjk2IDM4NEgxNTJDMTM4Ljc1IDM4NCAxMjggMzczLjI1IDEyOCAzNjBWMTUyQzEyOCAxMzguNzUgMTM4Ljc1IDEyOCAxNTIgMTI4SDI5NkMzMDkuMjUgMTI4IDMyMCAxMzguNzUgMzIwIDE1MlMzMDkuMjUgMTc2IDI5NiAxNzZIMTc2VjIzMkgyNjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI5NiAxNzZDMzA5LjI1IDE3NiAzMjAgMTY1LjI1IDMyMCAxNTJTMzA5LjI1IDEyOCAyOTYgMTI4SDE1MkMxMzguNzUgMTI4IDEyOCAxMzguNzUgMTI4IDE1MlYzNjBDMTI4IDM3My4yNSAxMzguNzUgMzg0IDE1MiAzODRIMjk2QzMwOS4yNSAzODQgMzIwIDM3My4yNSAzMjAgMzYwUzMwOS4yNSAzMzYgMjk2IDMzNkgxNzZWMjgwSDI2NEMyNzcuMjUgMjgwIDI4OCAyNjkuMjUgMjg4IDI1NlMyNzcuMjUgMjMyIDI2NCAyMzJIMTc2VjE3NkgyOTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareE(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM264 232C277.25 232 288 242.75 288 256S277.25 280 264 280H176V336H296C309.25 336 320 346.75 320 360S309.25 384 296 384H152C138.75 384 128 373.25 128 360V152C128 138.75 138.75 128 152 128H296C309.25 128 320 138.75 320 152S309.25 176 296 176H176V232H264Z" />
            <path d="M296 176C309.25 176 320 165.25 320 152S309.25 128 296 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384H296C309.25 384 320 373.25 320 360S309.25 336 296 336H176V280H264C277.25 280 288 269.25 288 256S277.25 232 264 232H176V176H296Z" />
        </Icon>
    </>
}