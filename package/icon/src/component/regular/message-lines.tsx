
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-lines` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-lines?s=regular message-lines}
 * @preview ![message-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgMTQ0SDE1MkMxMzguNzUgMTQ0IDEyOCAxNTQuNzUgMTI4IDE2OFMxMzguNzUgMTkyIDE1MiAxOTJIMzYwQzM3My4yNSAxOTIgMzg0IDE4MS4yNSAzODQgMTY4UzM3My4yNSAxNDQgMzYwIDE0NFpNMjY0IDI0MEgxNTJDMTM4Ljc1IDI0MCAxMjggMjUwLjc1IDEyOCAyNjRTMTM4Ljc1IDI4OCAxNTIgMjg4SDI2NEMyNzcuMjUgMjg4IDI4OCAyNzcuMjUgMjg4IDI2NFMyNzcuMjUgMjQwIDI2NCAyNDBaTTQ0OCAwSDY0QzI4Ljc1IDAgMCAyOC43NSAwIDY0VjM1Mi4wMDJDMCAzODcuMjUyIDI4Ljc1IDQxNi4wMDIgNjQgNDE2LjAwMkgxNjBWNTAwLjAwMkMxNjAgNTA5LjgzOCAxNzEuMDIzIDUxNS40NzkgMTc5LjEyNSA1MDkuNjI3TDMwNCA0MTYuMDAySDQ0OEM0ODMuMjUgNDE2LjAwMiA1MTIgMzg3LjI1MiA1MTIgMzUyLjAwMlY2NEM1MTIgMjguNzUgNDgzLjI1IDAgNDQ4IDBaTTQ2NCAzNTIuMDAyQzQ2NCAzNjAuNzUyIDQ1Ni43NSAzNjguMDAyIDQ0OCAzNjguMDAySDI4OEwyMDggNDI4LjAwMlYzNjguMDAySDY0QzU1LjI1IDM2OC4wMDIgNDggMzYwLjc1MiA0OCAzNTIuMDAyVjY0QzQ4IDU1LjI1IDU1LjI1IDQ4IDY0IDQ4SDQ0OEM0NTYuNzUgNDggNDY0IDU1LjI1IDQ2NCA2NFYzNTIuMDAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M360 144H152C138.75 144 128 154.75 128 168S138.75 192 152 192H360C373.25 192 384 181.25 384 168S373.25 144 360 144ZM264 240H152C138.75 240 128 250.75 128 264S138.75 288 152 288H264C277.25 288 288 277.25 288 264S277.25 240 264 240ZM448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.838 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM464 352.002C464 360.752 456.75 368.002 448 368.002H288L208 428.002V368.002H64C55.25 368.002 48 360.752 48 352.002V64C48 55.25 55.25 48 64 48H448C456.75 48 464 55.25 464 64V352.002Z" />
        </Icon>
    </>
}